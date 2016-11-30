Router.map(function() {
  // Home route
  this.route('home', {
      controller: HomeController,
      path : '/'
  });

  // Posts
  this.route('posts', {
      path: '/posts',
      title: "Hoy Que Hay - All Posts"
  });

  this.route('post', {
      controller: PostController,
      path: '/posts/:_id/:slug?'
  });

  // Dashboard Routes
  this.route('dashboard', {
    controller: DashboardController,
    path: '/dashboard'
  });

  // Dashboard categories
  this.route('dashboardCategories', {
    controller: DashboardCategoriesController,
    path: '/dashboard/categories'
  });

  // Dashboard category new
  this.route('dashboardCategoryNew', {
    controller: DashboardCategoryNewController,
    path: '/dashboard/categories/new'
  });

  // Dashboard category edit
  this.route('dashboardCategoryEdit', {
      controller: DashboardCategoryEditController,
      path: '/dashboard/categories/:_id/:slug/edit'
  });

  // Dashboard events
  this.route('dashboardPosts', {
    controller: DashboardPostsController,
    path: '/dashboard/posts'
  });

  // Dashboard Posts
  this.route('dashboardPostsNew', {
    controller: DashboardPostsNewController,
    path: '/dashboard/posts/new'
  });

  // Dashboard Post edit
  this.route('dashboardPostEdit', {
      controller: DashboardPostEditController,
      path: '/dashboard/posts/:_id/:slug/edit'
  });
});
