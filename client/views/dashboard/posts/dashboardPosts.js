import { Template } from 'meteor/templating'

Template.dashboardPosts.helpers({
  posts () {
    return Posts.find({}, { sort: { createdAt: -1, updatedAt: -1 }});
  },
  getCategory (categoryId) {
    var category = Categories.findOne({ _id: categoryId });

    return (category.name) ? category.name : '';
  }
})

Template.dashboardPosts.events({
  'click .activate': event => {
    var postId = $(event.currentTarget).attr('data-id')

    Meteor.call("adminSetPostStatus", postId, "active");
  },
  'click .deactivate': event => {
    var postId = $(event.currentTarget).attr('data-id')

    Meteor.call("adminSetPostStatus", postId, "inactive");
  }
})
