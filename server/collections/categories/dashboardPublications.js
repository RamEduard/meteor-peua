import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

/**
 * Publish categories
 */
Meteor.publish('dashboardCategories', function () {
  if (this.userId && Roles.userIsInRole(this.userId, ['admin'])) {
    return Categories.find();
  }

  this.ready();
});

/**
 * Publish category only admin users
 */
Meteor.publish('dashboardCategory', function (categoryId) {
  check(categoryId, String);

  if (this.userId && Roles.userIsInRole(this.userId, ['admin'])) {
    return [
      Categories.find({
        _id: categoryId
      })
    ];
  }

  this.ready();
});
