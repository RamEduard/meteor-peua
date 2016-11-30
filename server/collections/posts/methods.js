import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
    /**
     * Admin Set Event Status
     * @param eventId
     * @param status
     */
    adminSetPostStatus: (eventId, status) => {
        check(eventId, String);
        check(status, String);

        let params = { _id: eventId },
            event = Posts.findOne(params),
            userId = Meteor.userId();

        if (!event)
            throw new Meteor.Error("Could not find post.");

        if (!Roles.userIsInRole(userId, ['admin']))
            throw new Meteor.Error("Only admins can set post status");

        var setObject = { status: status };

        Posts.update(params, { $set: setObject });
    }
})
