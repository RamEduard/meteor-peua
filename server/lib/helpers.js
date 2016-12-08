/**
 * Document
 */
cleanHtml = (s) => {

  var s = sanitizeHtml(s, {
    allowedTags: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'br', 'a', 'hr',
      'ul', 'ol', 'nl', 'li', 'b', 'i', 'u', 'strong', 'em', 'strike',
      'code', 'hr', 'br', 'pre', 'iframe',  'img',
      'table', 'thead', 'tbody', 'tfooter', 'th', 'tr', 'td', 'div'
    ],
    allowedAttributes: {
      a: [ 'href', 'name', 'target' ],
      // We don't currently allow img itself by default, but this
      // would make sense if we did
      img: [ 'src', 'width', 'height' ],
      iframe: [ 'src', 'width', 'height' ],
      '*': ['style', 'title']
    },
    // Lots of these won't come up by default because we don't allow them
    selfClosing: [ 'img', 'br', 'hr' ],
    // URL schemes we permit
    allowedSchemes: [ 'http', 'https', 'ftp', 'mailto' ]
  });

  return s;
};
