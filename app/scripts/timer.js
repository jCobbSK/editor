const $ = require('jquery');
const _ = require('underscore');

const INITIAL_MINUTE_COUNT = 15;
const SECONDS_IN_MINUTE = 60;
const INITIAL_SECOND_COUNT = INITIAL_MINUTE_COUNT * SECONDS_IN_MINUTE;

function renderTime(seconds) {
  const formattedMinutes = Math.floor(seconds / SECONDS_IN_MINUTE);
  const formattedSeconds = `0${seconds % SECONDS_IN_MINUTE}`.substr(-2);
  const timeText = `${formattedMinutes}:${formattedSeconds}`;
  $('.timer-content').text(timeText);
}

function resetTimer(intervalId) {
  clearInterval(intervalId);
  $('.start-timer').show();
  $('.timer-content').text('');
}

function initiateCountDownLoop() {
  let actualSecondsRemaining = INITIAL_SECOND_COUNT;
  renderTime(actualSecondsRemaining);
  const intervalID = setInterval(function() {
    actualSecondsRemaining -= 1;
    renderTime(actualSecondsRemaining);
    if (actualSecondsRemaining === 0) {
      alert('TIMER END!!!!');
      resetTimer(intervalID);
    }
  }, 1000);
}

function startTimer() {
  $('.start-timer').hide();
  initiateCountDownLoop();
}

function registerButtonListener() {
  $('.start-timer').on('click', startTimer);
}

module.exports = function initTimer() {
  registerButtonListener();
};
