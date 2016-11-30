Migrations.add({
  version: 1,
  name: 'Adds emailHash for all existing users',
  up: function() {
    Users.find({}).forEach(function(user) {
      var email = getUserEmail(user);
      if (email)
        Users.update({
          _id: user._id
        }, {
          $set: {
            emailHash: CryptoJS.MD5(email.trim().toLowerCase()).toString()
          }
        });
    });
  },
  down: function() {}
});

Meteor.startup(function(){
  Migrations.migrateTo('latest');
});
