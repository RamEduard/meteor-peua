/**
 * Document
 */
cleanHtml = (s) => {

  var s = sanitizeHtml(s, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      'h1', 'h2', 'img', 'iframe', 'span'
    ]),
    allowedAttributes: {
      'a': ['href', 'target'],
      'iframe': ['src', 'width', 'height', 'class'],
      'img': ['alt', 'src'],
      '*': ['class', 'style', 'title']
    },
  });

  return s;
};
