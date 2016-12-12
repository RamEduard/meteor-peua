PostController = MainController.extend({
    title: function() {
        if (this.data())
            return "PEUA - " + this.data().title;
    },
    data: function() {
        return Posts.findOne({
            _id: this.params._id
        });
    },
    layoutTemplate: 'layoutMaterialKit',
    template: 'singlePost',
    waitOn: function() {
        return [
            subs.subscribe("post", this.params._id)
        ];
    },
    onBeforeAction: function() {
        var expectedSlug = this.data().slug();
        if (this.params.slug !== expectedSlug) {
            this.redirect("post", {
                _id: this.params._id,
                slug: expectedSlug
            });
        } else {
            this.next();
        }
    }
})
