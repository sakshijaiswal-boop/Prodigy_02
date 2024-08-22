let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let display = document.querySelector('.display');
let startBtn = document.querySelector('.start-btn');
let stopBtn = document.querySelector('.stop-btn');
let resetBtn = document.querySelector('.reset-btn');

function startTimer() {
  timer = setInterval(updateTime, 10);
  startBtn.disabled = true;
}

function stopTimer() {
  clearInterval(timer);
  startBtn.disabled = false;
}

function resetTimer() {
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  display.textContent = formatTime(minutes, seconds, milliseconds);
  startBtn.disabled = false;
}

function updateTime() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  display.textContent = formatTime(minutes, seconds, milliseconds);
}

function formatTime(minutes, seconds, milliseconds) {
  return `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
}

function padTime(value) {
  return value < 10 ? `0${value}` : value;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);