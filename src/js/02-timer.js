// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

let timerId = null;
let selectedDate = '';

const startBtn = document.querySelector(`button[data-start]`);
const day    = document.querySelector(`span[data-days]`);
const hour   = document.querySelector(`span[data-hours]`);
const minute = document.querySelector(`span[data-minutes]`);
const second = document.querySelector(`span[data-seconds]`);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
selectedDate = selectedDates[0].getTime();
checkDate(selectedDate); 
timeValue();

  },
  };

  flatpickr('#datetime-picker', options);
startBtn.disabled = true;

function timeValue(){
  const startTime = Date.now();
  const resultTime = selectedDate - startTime;
  const time = convertMs(resultTime);
  if (resultTime > 0) {
    renamingValueText(time);
       }
}

startBtn.addEventListener('click', () => {
  if (timerId) {
      return;
  }
  timerId = setInterval(timeValue, 1000);
});

function checkDate (date){
    if (date < options.defaultDate){
        alert("Please choose a date in the future");
        startBtn.disabled = true;
    } 
    else {
        startBtn.disabled = false;
    }
}

 function renamingValueText({days,hours,minutes,seconds}){
    day.textContent = addLeadingZero(days);
    hour.textContent = addLeadingZero(hours);
    minute.textContent = addLeadingZero(minutes);
    second.textContent = addLeadingZero(seconds);
 }

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
  

function addLeadingZero(value){
  return  String(value).padStart(2 , `0`)
}


// function getTimerValues() {
//   
//   
//  
//   console.log('time', time);
//   if (resultTime > 0) {
//       updateClockFace(time);
//   }
//   if (resultTime < 1000) {
//       clearInterval(timerId);
//   }
// }