import { Meteor } from 'meteor/meteor';
import { Router } from 'meteor/iron:router';
import { Template } from 'meteor/templating';

Template.dashboardDrawer.events({
  'click .sign-out': () => {
    // User logout
    Meteor.logout(() => {
      // Redirect signIn
      Router.go('signIn');
    });
  },
  'click .mdl-navigation__link:not(.mdl-collapse__button)': () => {
      let layout = document.querySelector('.mdl-layout');

      // Toggle Drawer
      layout.MaterialLayout.toggleDrawer();
  }
});

Template.dashboardDrawer.helpers({
  userEmail () {
    var currentUser = Meteor.user();

    return getUserEmail(currentUser);
  }
});

Template.dashboardDrawer.onRendered(() => {
  let template = Template.instance();

  // Drawer collapse
  template.$('.mdl-collapse__content').each(function(){
    var content = template.$(this);
    content.css('margin-top', -content.height());
  });

  template.$('.mdl-collapse__button').click(function () {
    template.$(this).parent('.mdl-collapse').toggleClass('mdl-collapse--opened');
  });
});
