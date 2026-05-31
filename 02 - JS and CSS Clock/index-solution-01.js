const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;

    secondHand.style.transition = seconds === 0 ? 'none' : 'all 0.1s';
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + 90;

    minHand.style.transition = minutes === 0 ? 'none' : 'all 0.1s';
    minHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = (((hours % 12) / 12) * 360) + 90;

    hourHand.style.transition = hours % 12 === 0 ? 'none' : 'all 0.1s';
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setDate();
setInterval(setDate, 1000);

