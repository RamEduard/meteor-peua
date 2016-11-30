Tracker.autorun(function() {
  var current = Router.current();

  Tracker.afterFlush(function() {
    $(window).scrollTop(0);
  });
});
