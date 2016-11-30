/**
 * Created by Ramon Serrano <ramon.calle.88@gmail.com>
 * Date: 11/24/16
 * Time: 10:41 AM
 */

import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';

Template.revSliderFeaturedEvents.onCreated(() => {
    let template = Template.instance(),
        cityId = Session.get('currentCityId');

    template.ready = new ReactiveVar(false);

    template.autorun(() => {
        let handle = subs.subscribe('featuredEvents', cityId);
        template.ready.set(handle.ready());
    });
});

// On Rendered
Template.revSliderFeaturedEvents.onRendered(() => {
    let template = Template.instance(),
        interval = Meteor.setInterval(() => {
            if (template.ready) {
                // Init Revolution Slider
                template.$('.featured-events-slider .tp-banner').revolution({
                    delay: 9000,
                    sliderLayout: "auto",
                    sliderType: "standard",
                    startwidth: 991,
                    startheight: 500,
                    //hideThumbs:10
                });

                // Clear Interval
                Meteor.clearInterval(interval);
            }
        }, 1000);
});

Template.revSliderFeaturedEvents.onDestroyed(() => {
    let template = Template.instance();

    // Prevent Rev Slider restart event
    template.$('.featured-events-slider .tp-banner').remove();
});

// Helpers
Template.revSliderFeaturedEvents.helpers({
    featuredEvents() {
        let cityId = Session.get('currentCityId'),
            featuredParams = {
                cityId: cityId,
                featuredThrough: { $gte: new Date() }
            };

        return Events.find(featuredParams);
    }
});

