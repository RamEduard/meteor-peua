Package.describe({
  name: "creativeparts:meteor-autoform-mdl",
  summary: "Google MDL Autoform Theme - CreativeParts",
  version: "0.0.1",
  git: "https://github.com/CreativeParts/meteor-autoform-mdl"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0");
  api.use(["templating", "underscore"], "client");
  api.use("zodiase:mdl@1.0.6_2");
  api.use("aldeed:autoform@5.8.1");
  api.use("aldeed:collection2@2.8.0");

  api.addFiles([
    //Helper functions...
    'utilities/helpers/class-helpers.js',

    //Input types
    'inputTypes/boolean-checkbox/boolean-checkbox.html',
    'inputTypes/select/select.html',
    'inputTypes/select/select.js',
    'inputTypes/select-radio/select-radio.html',
    'inputTypes/select-checkbox/select-checkbox.html',
    'inputTypes/textarea/textarea.html',
    'inputTypes/submit/submit.html',
    'inputTypes/text/text.html',
    'inputTypes/label/label.html',
    'inputTypes/label/label.js',

    //Components...
    'components/quickForm/quickForm.html',
    'components/quickForm/quickForm.js',
    'components/afFormGroup/afFormGroup.css',
    'components/afFormGroup/afFormGroup.html',
    'components/afFormGroup/afFormGroup.js'
  ], "client");
});
