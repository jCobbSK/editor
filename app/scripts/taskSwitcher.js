const $ = require('jquery');

const NUMBER_OF_ASSETS = 6;

function addOption(name, value) {
  $('.asset-select').append($('<option></option>').attr('value', value).text(name));
}

function addOptions() {
  for (let i = 1; i < NUMBER_OF_ASSETS + 1; i += 1) {
    addOption(i, i);
  }
}

function switchTask(taskNumber) {
  $('.instructions').attr('src', `assets/task_${taskNumber}/instructions.html`);
  $('.reference-screenshot').css('background-image', `url(assets/task_${taskNumber}/page.png)`);
}

function switchTaskListener(event) {
  const taskNumber = event.currentTarget.value;
  switchTask(taskNumber);
}

function registerListener() {
  $('.asset-select').on('change', switchTaskListener);
}

module.exports = function initTaskSwitcher() {
  addOptions();
  registerListener();
};
