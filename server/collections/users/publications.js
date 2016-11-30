/**
 * Publish user data for user logged in
 */
Meteor.publish("userData", function() {
    check(arguments, [Match.Any]);
    if (this.userId) {
        return [
            Users.find({
                _id: this.userId
            })
        ];
    }
    this.ready();
});

/**
 * Publish all roles
 */
Meteor.publish("roles", function (){
    return Meteor.roles.find({});
});