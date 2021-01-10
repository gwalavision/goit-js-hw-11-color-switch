const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId

const startColorChange = () => {
    startBtn.disabled = true
    intervalId = setInterval(() => {
        body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000)
}

const stopColorChange = () => {
    startBtn.disabled = false
    clearInterval(intervalId)
}


startBtn.addEventListener('click', startColorChange)
stopBtn.addEventListener('click', stopColorChange)
