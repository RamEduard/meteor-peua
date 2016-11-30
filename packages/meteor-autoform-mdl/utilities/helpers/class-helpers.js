Template.registerHelper('getMdlLabelClass', function (context, fieldAttr) {
  //Return MDL Label classes based on input field type...
  var result = "";

  var type = AutoForm.getInputType(context);

  if (type == "text" || type == "textarea") {
    //Text inputs...
    result = "mdl-textfield__label";
  } else if (type == "select-checkbox") {
    //Select Checkboxes...
    result = "mdl-checkbox__label";
  } else if (type == "select-radio") {
    //Select Radio...
    result = "mdl-radio__label";
  } else  if (type == "select") {
    //Select ...
    result = "mdl-selectfield__label";
  }

  return result;
});

//=================================================================================

Template.registerHelper('getMdlComponentOuterDivClass', function (context, fieldAttr) {
  //Return MDL Input classes based on input field type...
  var result = "";
  var type = AutoForm.getInputType(context);
  var attsExist = "false";

  if( typeof context == 'undefined'
    || typeof fieldAttr == 'undefined'
    || typeof fieldAttr.mdltheme == 'undefined'
    || fieldAttr.mdltheme == ''){

    attsExist = "false";
  }else{
    attsExist = "true";
  }

  if ((type == "text" || type == "textarea") && attsExist =="false") {
    // Text or textarea inputs - No theme default, return default classes...
    result = "mdl-textfield mdl-js-textfield";
  } else if ((type == "text" || type == "textarea") && attsExist =="true") {
    //Text inputs - theme defined...check theme...
    if (fieldAttr.mdltheme == 'default') {
      result = "mdl-textfield mdl-js-textfield";
    } else if (fieldAttr.mdltheme == 'floating')  {
      result = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label";
    }
  } else if(type == "select" && attsExist =="true") {
    //Text inputs - theme defined...check theme...
    if (fieldAttr.mdltheme == 'default') {
      result = "mdl-selectfield mdl-js-selectfield"
    } else if (fieldAttr.mdltheme == 'floating') {
      result = "mdl-selectfield mdl-js-selectfield mdl-textfield--floating-label";
    }
  } else if (type == "select") {
    //Select ...
    result = "mdl-selectfield mdl-js-selectfield";
  }

  return result;

});
