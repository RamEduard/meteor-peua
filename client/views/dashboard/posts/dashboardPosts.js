import { Template } from 'meteor/templating'

Template.dashboardPosts.onCreated(function () {
  this.infiniteScroll({
    perPage: 12,
    subManager: subs,
    collection: Posts,
    publication: 'dashboard.posts'
  });
})

Template.dashboardPosts.helpers({
  events () {
    return Posts.find();
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