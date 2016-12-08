Posts = new Mongo.Collection("posts");

// Posts Simple Schema
PostsSchema = new SimpleSchema({
  title: {
    type: String,
    max: 128
  },
  categoryId: {
    autoform: {
      options: () => {
        return Categories.find().map(function(category) {
            return {
                label: category.name,
                value: category._id
            }
        });
      }
    },
    regEx: SimpleSchema.RegEx.Id,
    type: String
  },
  userId: {
    type: String,
    autoValue: function() {
      if (this.isInsert) {
        return this.userId;
      } else if (this.isUpsert) {
        return {
          $setOnInsert: this.userId
        };
      } else {
        this.unset();
      }
    },
    denyUpdate: true
  },
  userName: {
    type: String,
    autoValue: function() {
      if (this.isInsert) {
        return getUserName(Meteor.user());
      } else if (this.isUpsert) {
        return {
          $setOnInsert: getUserName(Meteor.user())
        };
      } else {
        this.unset();
      }
    }
  },
  description: {
    type: String,
    max: 50000
  },
  descriptionShort: {
    type: String,
    max: 255
  },
  status: {
    allowedValues: STATUSES,
    defaultValue: 'active',
    type: String
  },
  // Automatically set HTML content based on markdown content
  // whenever the markdown content is set.
  htmlDescription: {
    type: String,
    optional: true,
    autoValue: function(doc) {
      var htmlContent = this.field("description");
      if (Meteor.isServer && htmlContent.isSet) {
        return cleanHtml(htmlContent.value);
      }
    }
  },
  // Force value to be current date (on server) upon insert
  // and prevent updates thereafter.
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date()
        };
      } else {
        this.unset();
      }
    },
    denyUpdate: true
  },
  // Force value to be current date (on server) upon update
  // and don't allow it to be set upon insert.
  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  }
})

Meteor.startup(() => {
  // Configure tranlations
  PostsSchema.i18n("schemas.posts");

  // Attach schema
  Posts.attachSchema(PostsSchema);
})

Posts.helpers({
  path: function() {
    return 'posts/' + this._id + '/' + this.slug();
  },
  slug: function() {
    return getSlug(this.title);
  }
});

Posts.allow({
  insert: function(userId, doc) {
    return userId && doc && userId === doc.userId;
  },
  update: function(userId, doc, fieldNames, modifier) {
    return Roles.userIsInRole(userId, ['admin']) ||
        (!_.contains(fieldNames, 'htmlDescription')
        && !_.contains(fieldNames, 'status')
        && /*doc.status === "pending" &&*/ userId && doc && userId === doc.userId);
  },
  remove: function(userId, doc) {
    return false;
  },
  fetch: ['userId', 'status']
});
