(function ($) {
  // Get Revolution Scripts
  [
    "/rev-slider-4/js/jquery.themepunch.plugins.min.js",
    "/rev-slider-4/js/jquery.themepunch.revolution.js"
  ].forEach(scriptSrc => {
    $.getScript(scriptSrc);
  })
})(jQuery)
