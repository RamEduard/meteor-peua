DashboardPostsController = DashboardController.extend({
  subscriptions () {
      return [
          subs.subscribe('dashboardCategories')
      ]
  }
});

DashboardPostsNewController = DashboardController.extend({
   subscriptions () {
      return [
         subs.subscribe('dashboardCategories')
      ]
   }
});

DashboardPostEditController = DashboardPostsNewController.extend({
  data: function() {
      return {
          event: Posts.findOne({
              _id: this.params._id
          })
      };
  },
  waitOn: function() {
      return subs.subscribe("post", this.params._id);
  }
})
