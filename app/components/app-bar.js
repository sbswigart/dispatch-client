import Ember from 'ember';

export default Ember.Component.extend({
  newTask: '',
  actions: {
    create() {
      const task = this.get('newTask');
      this.set('newTask', '');
      this.get('onCreate')(task);
    }
  }
});
