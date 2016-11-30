SUMMERNOTE_OPTIONS = {
  type: 'summernote',
  height: 300,
  minHeight: 300,
  toolbar: [
    ['style', ['style']],
    ['font', ['bold', 'italic', 'underline', 'clear']],
    ['para', ['ul', 'ol']],
    ['insert', ['link','hr']],
    ['misc', ['codeview']]
  ],
  styleWithSpan: false
};

/**
 * Statuses
 * @type {string[]}
 */
STATUSES = ["pending","active","flagged","inactive","filled"];

/**
 * Profiles statuses
 * @type {string[]}
 */
PROFILE_STATUSES = ["active","flagged"];

/**
 * Action type for events
 * @type {string[]}
 */
ACTION_TYPES = ['view', 'like', 'share'];

/**
 * Obtener el lenguage del navegador del usuario
 * @returns {string}
 */
getUserLanguage = function () {
  // Put here the logic for determining the user language
  var lang = window.navigator.language || window.navigator.userLanguage;

  if (lang.search('en') > -1)
    return 'en';
  if (lang.search('es') > -1)
    return 'es';
};
