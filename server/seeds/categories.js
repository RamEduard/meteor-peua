/**
 * Created by Ramon Serrano <ramon.calle.88@gmail.com>
 * Date: 11/11/16
 * Time: 2:39 PM
 */
(() => {
    // If there is some category return
    if (Categories.find().count() > 0) {
        return;
    }

    var categories = [
        {
            _id: 'HoSmvo84GjW2wSKJi',
            name: 'Algorítmica y Programación'
        },
        {
            _id: '2qMthk7GXXyfoGCLC',
            name: 'Lógica'
        },
        {
            _id: 'dmXM3B2oahsgmMLqv',
            name: 'Matemática y Álgebra'
        },
        {
            _id: 'jqqsfKDfGveGnhKK8',
            name: 'Estadísticas'
        },
        {
            _id: 'dgneT7mmhmXMsQvrC',
            name: 'Bases de Datos'
        }
    ];

    categories.forEach(category => Categories.insert(category));

})();

