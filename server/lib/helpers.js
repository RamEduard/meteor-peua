/**
 * Document
 */
cleanHtml = (s) => {

  var s = sanitizeHtml(s, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      'h1', 'h2', 'img', 'iframe', 'span'
    ]),
    allowedAttributes: {
      '*': ['style']
    },
  });

  return s;
};
