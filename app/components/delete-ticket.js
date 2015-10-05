import Ember from 'ember';

export default Ember.Component.extend({
  ticketExists: true,
  actions: {
    deleteTicket(ticket) {
      this.set('ticketExists', false);
      this.sendAction('deleteTicket', ticket);
    }
  }
});
