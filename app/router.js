import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('student');
  this.route('student-ticket', {path: '/ticket/:ticket_id'});
  this.route('teacher');
  this.route('teacher-ticket', {path: '/queue/:ticket_id'});
  this.route('statistics', {});
});

export default Router;
