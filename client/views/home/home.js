import { Template } from 'meteor/templating';

Template.home.helpers({
  banners () {
    return Banners.find({
      siteSection: 'home'
    }).fetch()
  }
});

Template.home.onRendered(() => {
  let template = Template.instance();

  (template => {
    // OWL Carousel
    template.$('#owl-technologies').owlCarousel({

      items : 7,
      itemsDesktopSmall : [979, 4],
      lazyLoad : true
      //transitionStyle : "fade" // Optional transitions fade|backSlide|goDown|fadeUp
    });

    // OWL Carousel
    template.$('#owl-references').owlCarousel({
      items : 10,
      itemsDesktopSmall : [979, 10],
      lazyLoad : true
      //transitionStyle : "fade" // Optional transitions fade|backSlide|goDown|fadeUp
    });

    //  Activate the Tooltips
    template.$('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();
  })(template);
});
