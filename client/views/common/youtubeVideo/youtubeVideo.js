/**
 * Created by Ramon Serrano <ramon.calle.88@gmail.com>
 * Date: 12/8/16
 * Time: 2:12 PM
 */

import { Random } from 'meteor/random';
import { ReactiveVar } from 'meteor/reactive-var';
import { Template } from 'meteor/templating';

Template.youtubeVideo.onCreated(() => {
    let template = Template.instance();

    template.id = new ReactiveVar(Random.id());
});

Template.youtubeVideo.onRendered(() => {
    let template = Template.instance(),
        videoId = template.data.videoId,
        interval;

    if (!videoId)
        throw new Meteor.Error('Video Id not defined {{> youtubeVideo video="someId"}}')

    interval = Meteor.setInterval(() => {
        if (global.YT && 'Player' in global.YT) {

            let player = new YT.Player(template.id.get(), {
                height: '400',
                width: '560',
                videoId: videoId
            })

            Meteor.clearInterval(interval)
        }
    }, 1000);
});

Template.youtubeVideo.helpers({
    id () {
        return Template.instance().id.get();
    }
});