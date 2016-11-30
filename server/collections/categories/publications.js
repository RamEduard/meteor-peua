import { Meteor } from 'meteor/meteor';

/**
 * Publish categories
 */
Meteor.publish('categories', () => {
  let params = { isHidden: false },
      options = {
        fields: { name: 1 },
        sort: { name: 1 }
      };

  return Categories.find(params, options);
});
