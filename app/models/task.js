import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  completed: DS.attr('boolean'),
  user: DS.belongsTo('user')
});
