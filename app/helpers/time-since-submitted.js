import Ember from 'ember';

export function timeSinceSubmitted(params) {
  var timeSubmitted = moment(params[0]);
  var timeNow = moment(Date.now());

  var minutes = timeNow.diff(timeSubmitted, 'minutes');
  var hours = timeNow.diff(timeSubmitted, 'hours');
  var days = timeNow.diff(timeSubmitted, 'days');
  var timeSince;

  if (minutes < 1) {
    timeSince = "a few seconds";
  } else if (minutes === 1) {
    timeSince = "a minute";
  } else if (minutes < 60) {
    timeSince = minutes + " minutes";
  } else if (hours === 1) {
    timeSince = "an hour";
  } else if (hours < 24) {
    timeSince = hours + " hours";
  } else if (days === 1) {
    timeSince = "a day";
  } else {
    timeSince = days + " days";
  }
  return timeSince + " ago";
}

export default Ember.Helper.helper(timeSinceSubmitted);
