DashboardController = MainController.extend({
  layoutTemplate: 'dashboardLayout',
  onBeforeAction: function () {
    let userId = Meteor.userId();

    if (!userId) {
      // Redirect login
      Router.go('signIn');
    } else if (!Roles.userIsInRole(userId, ['admin'])) {
      // Redirect home
      Router.go('home');
    } else {
      this.next();
    }
  },
  title: 'Hoy Que Hay | Dashboard',
  waitOn: function () {
    return [ Meteor.subscribe("roles") ];
  },
  yieldTemplates: {
    dashboardDrawer: {
      to: 'drawer'
    },
    dashboardHeader: {
      to: 'header'
    },
    footer: {
      to: 'footer'
    }
  }
});
