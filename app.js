const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();

  const secondDegree = (sec / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  const minDegree = (min / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegree}deg)`;

  const hourDegree = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  console.log(hour);
}

setInterval(setDate, 1000);
