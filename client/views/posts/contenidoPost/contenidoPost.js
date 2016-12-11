import { Template } from 'meteor/templating';

Template.contenidoPost.helpers({
  category () {
    let template = Template.instance(),
        categoryId = (template.data.categoryId && template.data.post.categoryId) ? template.data.post.categoryId : '',
        category = Categories.findOne({ _id: categoryId });

    return (categoryId && category) ? category.name : '';
  },
  icon () {
    return '<i class="material-icons">code</i>';
  }
})
