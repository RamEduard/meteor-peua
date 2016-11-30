/**
 * Created by Ramon Serrano <ramon.calle.88@gmail.com>
 * Date: 20/11/16
 * Time: 9:50 AM
 */
AutoForm.addHooks(['categoryInsertForm', 'categoryUpdateForm'], {
    after: {
        insert: function(error, result) {
            if (error) {
                console.log("Insert Error:", error);
            }
        },
        update: function(error, result) {
            if (error) {
                console.log("Update Error:", error);
            }
        }
    }
});
