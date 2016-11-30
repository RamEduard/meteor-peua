import { Template } from 'meteor/templating';

Template.header.onRendered(() => {
    let template = Template.instance();

    // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.
    if(template.$('.navbar-color-on-scroll').length != 0){
        $(window).on('scroll', materialKit.checkScrollForTransparentNavbar)
    }

    //  Activate the Tooltips
    template.$('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();
})