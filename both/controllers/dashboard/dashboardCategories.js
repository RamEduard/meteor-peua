DashboardCategoriesController = DashboardController.extend({
  data () {
    return {
      categories: Categories.find()
    }
  },
  subscriptions () {
      return [
          subs.subscribe('dashboardCategories')
      ]
  },
  title: 'Hoy Que Hay | Dashboard - Categorías'
});

DashboardCategoryNewController = DashboardController.extend({
  template: 'categoryInsertForm',
  title: 'Hoy Que Hay | Dashboard - Nueva Categoría'
});

DashboardCategoryEditController = DashboardCategoryNewController.extend({
  data: function() {
      return {
          category: Categories.findOne({
              _id: this.params._id
          })
      };
  },
  template: 'categoryUpdateForm',
  title: 'Hoy Que Hay | Dashboard - Editar Categoría',
  waitOn: function() {
      return subs.subscribe("dashboardCategory", this.params._id);
  }
})
