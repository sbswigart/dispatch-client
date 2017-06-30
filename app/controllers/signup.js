import Ember from 'ember';

export default Ember.Controller.extend({
  errorMessage: '',
  actions: {
    saveUser: function(model) {
      model.save().then(() => {
        this.transitionToRoute('tasks');
      }).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
