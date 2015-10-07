import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  issue: DS.attr(),
  when_added: DS.attr(),
  wait_time: function() {
    return moment(Date.now()).diff(moment(this.get('when_added')), 'minutes');
  }.property('when_added')
});
