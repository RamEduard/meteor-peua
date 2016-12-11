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
                let post = Posts.findOne({ _id: result });

                Router.go('dashboardPostEdit', {
                  _id: post._id,
                  slug: getSlug(post.title)
                });
            }
        },
        update: function(error, result) {
            if (error) {
                console.log("Update Error:", error);
            } else {
              let post = Posts.findOne({
                _id: Router.current().params._id
              });

              Router.go('dashboardPostEdit', {
                _id: post._id,
                slug: getSlug(post.title)
              });
            }
        }
    }
});
