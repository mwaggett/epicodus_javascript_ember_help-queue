import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteTicket(ticket) {
      this.sendAction('deleteTicket', ticket);
    }
  }
});
