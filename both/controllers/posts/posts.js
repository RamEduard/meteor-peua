PostsController = MainController.extend({
    title: "PEUA - Publicaciones",
    layoutTemplate: 'layoutMaterialKit',
    subscriptions: function() {
        return [subs.subscribe("categories")];
    }
})
