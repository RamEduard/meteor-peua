Router.configure({
  controller: MainController,
  loadingTemplate: 'loading'
});

Router.plugin('ensureSignedIn', {
    only: ['dashboard', 'eventEdit', 'eventNew', 'reviewNew', 'reviewEdit']
});

Router.onBeforeAction(function() {
    UploadCarePlus.load();
   this.next();
}, {
   only: ['eventEdit', 'eventNew']
});

Router.plugin('dataNotFound', {
    notFoundTemplate: 'notFound'
});
