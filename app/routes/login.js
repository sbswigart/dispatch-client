import Ember from 'ember';
export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  actions: {
    authenticate() {
      const credentials = this.controller.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:jwt', credentials)
        .then(() => {
          this.transitionTo('/');
        })
        .catch((reason) => {
          this.controller.set('errorMessage', reason.error || reason);
        });
    }
  }
});
