/* Создай плагин настраиваемого таймера, который ведет обратный отсчет 
до предварительно определенной даты. Такой плагин может использоваться в 
блогах и интернет-магазинах, страницах регистрации событий, во время 
технического обслуживания и т. д.
Плагин это класс CountdownTimer, экземпляр которого создает новый 
таймер с настройками.
Для подсчета значений используй следующие готовые формулы, 
где time - разница между targetDate и текущей датой. */

const daysRef = document.querySelector('.value[data-value="days"]');
const hoursRef = document.querySelector('.value[data-value="hours"]');
const minsRef = document.querySelector('.value[data-value="mins"]');
const secsRef = document.querySelector('.value[data-value="secs"]');


class CountdownTimer {
  constructor({targetDate} = {}) {
    this.targetDate = targetDate
    this.setInterval = setInterval(() => {
      const currentDate = Date.now()
      const deltaTime = this.targetDate - currentDate
      const time = this.getTimeComponents(deltaTime);
      this.updateClockface (time) 

    }, 1000);
  }

getTimeComponents(time) {
const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const secs = Math.floor((time % (1000 * 60)) / 1000);
  return {days, hours, mins, secs}
}


updateClockface({ days, hours, mins, secs }) {
  daysRef.textContent = `${days}`
  hoursRef.textContent = `${hours}`
  minsRef.textContent = `${mins}`
  secsRef.textContent = `${secs}`
}

}
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 31, 2021 9:59:59'),
}); 
