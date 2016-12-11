/**
 * Subscriptions
 * @type {SubsManager}
 */
subs = new SubsManager({
    cacheLimit: 20,
    expireIn: 5
})

/**
 * Main Controller
 */
MainController = RouteController.extend({
  progressSpinner: false,
  progressDelay: 250,
  title: "PEUA - Programa En Un Año",
  layoutTemplate: 'layoutMaterialKit',
  yieldTemplates: {
      drawer: {
          to: 'drawer'
      },
      header: {
          to: 'header'
      },
      footer: {
          to: 'footer'
      }
  }
})

if (Meteor.isClient) {
    // Current City Id
    Session.set('currentCityId', '8Hn3H6yfb32DjEB9i')
}
