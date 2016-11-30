Posts = new Mongo.Collection("posts");

// Posts Simple Schema
PostsSchema = new SimpleSchema({
  title: {
    type: String,
    max: 128
  },
  imageThumbUrl: {
    type: String,
    max: 256,
    regEx: new RegExp('^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpg|gif|png)$')
  },
  imageUrl: {
    type: String,
    max: 256,
    regEx: new RegExp('^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpg|gif|png)$')
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

  dateStart: {
    type: Date
  },
  dateEnd: {
    type: Date,
    optional: true
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
    max: 20000
  },
  descriptionShort: {
    type: String,
    max: 255
  },
  status: {
    type: String,
    allowedValues: STATUSES,
    autoValue: function() {
      if (this.isInsert) {
        return 'pending';
      } else if (this.isUpsert) {
        return {
          $setOnInsert: 'pending'
        };
      }
    }
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
  insert () {
    return false;
  },
  update () {
    return false;
  },
  remove () {
    return false
  }
});
