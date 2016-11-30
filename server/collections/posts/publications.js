import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

/**
 * Publish all events
 */
Meteor.publish("posts", function(limit) {
    check(limit, Number);

    return Posts.find({
        status: "active"
    }, {
        fields: {
            descriptionShort: true,
            title: true,
            imageUrl: true,
            imageThumbUrl: true,
            createdAt: true,
            updatedAt: true,
            status: true
        },
        sort: {
            createdAt: -1
        },
        limit: limit
    });
});

/**
 * Publish event by Id
 */
Meteor.publish("post", function(eventId) {
    check(eventId, String);
    return [
        Posts.find({
            _id: eventId
        })
    ];
});
