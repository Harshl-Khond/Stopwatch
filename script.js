let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
    timer = setInterval(updateDisplay, 1000);
    document.getElementById('startBtn').disabled = true;
}

function stopStopwatch() {
    clearInterval(timer);
    document.getElementById('startBtn').disabled = false;
}

function resetStopwatch() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById('startBtn').disabled = false;
}

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const display = document.getElementById('display');
    display.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
