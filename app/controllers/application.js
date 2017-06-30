import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    invalidateSession() {
      this.get('session').invalidate().then(() => {
        this.store.unloadAll();
        this.transitionToRoute('/');
      });
    }
  }
});
