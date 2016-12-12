import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

/**
 * Publish all events on dashboard
 */
Meteor.publish("dashboard.posts", function () {
  if (this.userId && Roles.userIsInRole(this.userId, ['admin'])) {
    return [
      Posts.find()
    ];
  }

  this.ready();
});
