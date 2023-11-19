
const startDate = new Date(2022, 9, 20, 12, 1);

function getElapsedMonths(startDate, currentDate) {
  let elapsedMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
  elapsedMonths += currentDate.getMonth() - startDate.getMonth();
  if (currentDate.getDate() < startDate.getDate()) {
    elapsedMonths--;
  }
  return elapsedMonths;
}

setInterval(function() {
  const currentDate = new Date();
  const elapsedTime = currentDate - startDate;

  const elapsedYears = Math.floor(elapsedTime / 31536000000);
  const elapsedMonths = getElapsedMonths(startDate, currentDate) - elapsedYears * 12;
  let elapsedDays = currentDate.getDate() - startDate.getDate();
  if (elapsedDays <= 0) {
    elapsedDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
  }
  const elapsedHours = Math.floor(elapsedTime / 3600000) % 24;
  const elapsedMinutes = Math.floor(elapsedTime / 60000) % 60;
  const elapsedSeconds = Math.floor(elapsedTime / 1000) % 60;

  const timeUnits = [
    { value: elapsedYears, label: "year", pluralLabel: "years" },
    { value: elapsedMonths, label: "month", pluralLabel: "months" },
    { value: elapsedDays, label: "day", pluralLabel: "days" },
    { value: elapsedHours, label: "hour", pluralLabel: "hours" },
    { value: elapsedMinutes, label: "minute", pluralLabel: "minutes" },
    { value: elapsedSeconds, label: "second", pluralLabel: "seconds" }
  ];

  let timerString = "";
  let addedTimeUnits = 0;

  for (const unit of timeUnits) {
    if (unit.value > 0 || (unit.label === "minute" || unit.label === "second")) {
      let valueString = unit.value.toString();
      if (unit.label === "minute" || unit.label === "second") {
        valueString = valueString.padStart(2, '0');
      }
      timerString += `<span style="color: blue;">${valueString} ${unit.value !== 1 ? unit.pluralLabel : unit.label}</span> `;
      addedTimeUnits++;
    }
  }

  document.getElementById("timer").innerHTML = timerString;
}, 1000);



// Letter button
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('#toggle');
  const toggleTextLeft = document.querySelector('.toggle-text.left');
  const toggleTextRight = document.querySelector('.toggle-text.right');
  const letterContainer = document.querySelector('.letter-container');

  toggle.addEventListener('change', function () {
      if (toggle.checked) {
          toggleTextLeft.style.display = 'block';
          toggleTextRight.style.display = 'none';
          letterContainer.style.backgroundColor = '#ffffffab';
      } else {
          toggleTextLeft.style.display = 'none';
          toggleTextRight.style.display = 'block';
          letterContainer.style.backgroundColor = '#fff';
      }
  });
});

// music player
// Get the audio element 
document.addEventListener('DOMContentLoaded', function () {
  const bgMusic = document.getElementById('bgMusic');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const stopBtn = document.getElementById('stopBtn');

  // Set default volume to 50%
  bgMusic.volume = 0.50;

  playPauseBtn.addEventListener('click', function () {
      if (bgMusic.paused) {
          bgMusic.play();
          playPauseBtn.textContent = 'Pause';
      } else {
          bgMusic.pause();
          playPauseBtn.textContent = 'Play';
      }
  });

  stopBtn.addEventListener('click', function () {
      bgMusic.currentTime = 0;
      bgMusic.pause();
      playPauseBtn.textContent = 'Play';
  });
});

