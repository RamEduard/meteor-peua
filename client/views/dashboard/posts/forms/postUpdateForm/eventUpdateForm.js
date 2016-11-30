/**
 * Created by Ramon Serrano <ramon.calle.88@gmail.com>
 * Date: 11/11/16
 * Time: 1:37 PM
 */
import { Template } from 'meteor/templating'
import { Router } from 'meteor/iron:router'

Template.postUpdateForm.events({
    'click #cancel': function (event, template) {
        event.preventDefault();
        // current url
        let url = Router.current().url;

        if (url.search(/dashboard/) !== -1) {
          Router.go("dashboardPosts");
        } else {
          Router.go("post", {_id:this.event._id});
        }
    }
})
