/**
 * Created by Ramon Serrano <ramon.calle.88@gmail.com>
 * Date: 11/11/16
 * Time: 1:38 PM
 */
AutoForm.addHooks(['postInsertForm', 'postUpdateForm'], {
    after: {
        insert: function(error, result) {
            if (error) {
                console.log("Insert Error:", error);
            } else {
                // analytics.track("Event Created");
                Router.go('post', {_id:result});
            }
        },
        update: function(error, result) {
            if (error) {
                console.log("Update Error:", error);
            } else {
                // analytics.track("Event Edited");
                Router.go('post', {_id: Router.current().params._id});
            }
        }
    }
});