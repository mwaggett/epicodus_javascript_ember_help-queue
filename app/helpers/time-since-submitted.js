import Ember from 'ember';

export function timeSinceSubmitted(params) {
  var waitTime = params[0];
  var timeSince;

  if (waitTime < 1) {
    timeSince = "a few seconds";
  } else if (waitTime === 1) {
    timeSince = "a minute";
  } else if (waitTime < 60) {
    timeSince = waitTime + " minutes";
  } else {
    timeSince = waitTime/60 + " hours";
  }
  return timeSince + " ago";
}

export default Ember.Helper.helper(timeSinceSubmitted);
