/**
 * Collection Categories
 * @type Meteor.Collection
 */
Categories = new Meteor.Collection('categories');

/**
 * Categories Simple Schema
 * @type {SimpleSchema}
 */
CategoriesSchema = new SimpleSchema({
  name: {
    type: String,
    max: 128
  },
  isHidden: {
    defaultValue: false,
    type: Boolean
  },
  // Force value to be current date (on server) upon insert
  // and prevent updates thereafter.
  createdAt: {
    type: Date,
    autoValue: function () {
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
  CategoriesSchema.i18n("schemas.categories");

  // Attach schema
  Categories.attachSchema(CategoriesSchema);
})

Categories.helpers({
  slug: function() {
    return 'cat-' + getSlug(this.name);
  }
});

Categories.allow({
  insert: function(userId, doc) {
    return Roles.userIsInRole(userId, ['admin']) || userId && doc;
  },
  update: function(userId, doc, fieldNames, modifier) {
    return Roles.userIsInRole(userId, ['admin']) || userId && doc && userId === doc.userId;
  },
  remove: function(userId, doc) {
    return false;
  },
  fetch: ['userId']
});
