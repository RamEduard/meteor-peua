/**
 * Document
 */
cleanHtml = (s) => {

  var s = sanitizeHtml(s, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ])
  });

  return s;
};
