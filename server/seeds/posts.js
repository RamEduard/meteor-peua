(() => {
    // if there is some event return
    if (Posts.find().count() > 0) return;

    let loremIpsum = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eaque voluptate quia repellat necessitatibus vel, accusamus, a omnis in, ullam alias culpa molestias atque fugiat iste. Quidem maxime excepturi aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet exercitationem, nesciunt vel libero voluptatem in animi similique dicta veritatis voluptatum. Totam repellendus accusamus culpa cupiditate! Porro reiciendis exercitationem dolores.</p>',
        description = [0,1,2,3,4,5,6]
            .map(number => loremIpsum)
            .join('\n<br />\n');

    var posts = [];

    posts = JSON.parse(Assets.getText('posts.json'));

    // Insert into collection
    posts.forEach(event => {
      event.createdAt = new Date(event.createdAt.$date);
      event.updatedAt = new Date(event.updatedAt.$date);
      Posts.insert(event)
    });
})();
