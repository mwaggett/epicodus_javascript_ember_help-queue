import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  issue: DS.attr()//,
  // when_added: DS.attr()
});
