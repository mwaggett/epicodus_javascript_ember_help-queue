import Ember from 'ember';

export default Ember.Component.extend({
  questions: [
    "Have you gone through all the steps on the Learn How to Program debugging lesson?",
    "Have you asked another pair for help?",
    "Have you spent 15 minutes going through the problem documenting every step?"
  ],

  currentQuestion: function() {
    return this.get('questions').shift();
  }.property(),

  actions: {
    nextQuestion: function() {
      var questions = this.get('questions');
      var next = questions.shift();
      this.set('currentQuestion', next);
    }
  }
});
