/**
 * Created by Ramon Serrano <ramon.calle.88@gmail.com>
 * Date: 11/24/16
 * Time: 11:10 AM
 */

import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';

Template.featuredEventSlide.events({
    'click .caption-custom-title': (event, template) => {
        let eventId = template.data._id;

        if (eventId)
            Router.go('event', { _id: eventId });
    }
})