import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveTicket(params) {
      var newTicket = this.store.createRecord('ticket', params);
      newTicket.save();
      this.transitionTo('index');
      //this.transitionTo('student-ticket' ticket.id)
    }
  }
});
