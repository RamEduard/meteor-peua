DashboardPostsController = DashboardController.extend({
  subscriptions () {
      return [
          subs.subscribe('dashboardCategories')
      ]
  },
  title: 'PEUA | Dashboard - Publicaciones'
});

DashboardPostsNewController = DashboardController.extend({
   subscriptions () {
      return [
         subs.subscribe('dashboardCategories')
      ]
   },
   title: 'PEUA | Dashboard - Nueva Publicación'
});

DashboardPostEditController = DashboardPostsNewController.extend({
  data: function() {
      return {
          post: Posts.findOne({
              _id: this.params._id
          })
      };
  },
  title () {
    if (this.data())
        return 'PEUA | Dashboard - Editar ' + this.data().post.title
  },
  waitOn: function() {
      return subs.subscribe("post", this.params._id);
  }
})
