const countDownDate = new Date("Nov 22, 2019 09:00:00").getTime();
let x = setInterval( () => {
  let now = new Date().getTime();
  let timeLeft = countDownDate - now;

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor( (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor( (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60) );
  let seconds = Math.floor( (timeLeft % (1000 * 60)) / 1000 );

  return {days: days, hours: hours, minutes: minutes, seconds: seconds};
  }, 1000
);

typeof x;
