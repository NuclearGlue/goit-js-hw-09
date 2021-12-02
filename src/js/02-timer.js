import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const calendarLine = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]')
const dayTime = document.querySelector('[data-days]');
const hourTime = document.querySelector('[data-hours]');
const minuteTime = document.querySelector('[data-minutes]');
const secondsTime = document.querySelector('[data-seconds]');
let timerId = null;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
       return value.padStart(2, '0');
    }

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    setTimer(selectedDates[0]);
    }  
  }

flatpickr(calendarLine, options);

const dateSet = calendarLine._flatpickr;
const currentDate = options.defaultDate;
startBtn.setAttribute('disabled', true);


function setTimer(chosenDate) {
  let timeLeft = chosenDate - currentDate;

   
    
  if (chosenDate <= currentDate) {
  window.alert("You chosed date in past. Please chose date in future")
    
   
}
  else {
    
  startBtn.disabled = false;
  startBtn.addEventListener('click', () => {
    
   
    timerId = setInterval(() => {
   dayTime.textContent= addLeadingZero(`${convertMs(timeLeft).days}`);
    hourTime.textContent = addLeadingZero(`${convertMs(timeLeft).hours}`);
    minuteTime.textContent = addLeadingZero(`${convertMs(timeLeft).minutes}`);
    secondsTime.textContent = addLeadingZero(`${convertMs(timeLeft).seconds}`); 
      
timeLeft -= 1000;
   
}, 1000)
    
  })
}
}







