import { Template } from 'meteor/templating';

Template.postItem.events({
  'click .post-item': (event, template) => {
    let postId = template.data._id,
        slug = getSlug(template.data.title);

    Router.go('post', {
      _id: postId,
      slug: slug
    })
  }
});

Template.postItem.helpers({
  category () {
    let template = Template.instance(),
        categoryId = (template.data.categoryId && template.data.categoryId) ? template.data.categoryId : '',
        category = Categories.findOne({ _id: categoryId });

    return (categoryId && category) ? category.name : '';
  }
});
