import { Template } from 'meteor/templating';

Template.contenidoPost.events({
  'click .contenido-post': (event, template) => {
    let postId = template.data._id,
        slug = getSlug(template.data.title);

    Router.go('post', {
      _id: postId,
      slug: slug
    })
  }
});

Template.contenidoPost.helpers({
  category () {
    let template = Template.instance(),
        categoryId = (template.data.categoryId && template.data.categoryId) ? template.data.categoryId : '',
        category = Categories.findOne({ _id: categoryId });

    return (categoryId && category) ? category.name : '';
  },
  icon () {
    let template = Template.instance(),
        categoryId = (template.data.categoryId && template.data.categoryId) ? template.data.categoryId : '',
        icon = '';

    switch (categoryId) {
      // Estadísticas
      case 'jqqsfKDfGveGnhKK8':
        icon = '<i class="material-icons">equalizer</i>'
        break;
      // Bases de datos
      case 'dgneT7mmhmXMsQvrC':
        icon = '<i class="material-icons">dns</i>'
        break;
      // Lógica
      case '2qMthk7GXXyfoGCLC':
        icon = '<i class="material-icons">announcement</i>'
        break;
      // Algorítmica y Programación
      case 'HoSmvo84GjW2wSKJi':
        icon = '<i class="material-icons">code</i>'
        break;
      // Matemáticas y Álgebra
      case 'dmXM3B2oahsgmMLqv':
        icon = '<i class="material-icons">library_books</i>'
        break;
    }

    return icon;
  }
});
