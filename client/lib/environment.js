/**
 * Upload Care package configuration
 * @type {boolean}
 */
UPLOADCARE_MANUAL_START = true;

/**
 * Autoform Materialize
 */
AutoForm.setDefaultTemplate('mdl');

/**
 * Register and helper
 */
Template.registerHelper('and', (a, b) => a && b);

/**
 * Register or helper
 */
Template.registerHelper('or', (a, b) => a || b);