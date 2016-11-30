Posts.after.insert(function(userId, doc){
  var admin = Users.findOne({roles:"admin"});
  Email.send({
      to: getUserEmail(admin),
      from: FROM_EMAIL,
      subject: "New Event Posted - " + doc.title,
      text: "Event needs to be approved before it is live:\n\n"
            + Meteor.absoluteUrl("posts/"+doc._id) + "\n\n\n\n\n\n"
    });
});
