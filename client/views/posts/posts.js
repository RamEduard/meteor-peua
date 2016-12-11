/**
 * Created by Ramon Serrano <ramon.calle.88@gmail.com>
 * Date: 12/8/16
 * Time: 3:41 PM
 */
import { Template } from 'meteor/templating';

Template.posts.onCreated(() => {
    subs.subscribe('posts', 12)
})

Template.posts.helpers({
    contenidos () {
        return Posts.find({
            categoryId: { $exists: true },
            title: { $regex: new RegExp('contenido programático', 'i') }
        });
    }
});
