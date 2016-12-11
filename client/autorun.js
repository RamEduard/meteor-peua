Tracker.autorun(function() {
  var current = Router.current();

  Tracker.afterFlush(function() {
    $('.mdl-layout').scrollTop(0);
  });
});
