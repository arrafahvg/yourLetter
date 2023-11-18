
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
  let elapsedDays = currentDate.getDate() - startDate.getDate(); // corrected line
  if (elapsedDays <= 0) { // corrected line
    elapsedDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate(); // corrected line
  } // corrected line
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
    if (unit.value > 0) {
      timerString += `<span style="color: blue;">${unit.value} ${unit.value > 1 ? unit.pluralLabel : unit.label}</span> `;
      addedTimeUnits++;
    }
  }

  // Remove trailing comma and space

  document.getElementById("timer").innerHTML = timerString;
}, 1000);

// Letter button
document.addEventListener('DOMContentLoaded', function () {
  const letterContainer = document.querySelector('.letter-container');
  const button = document.querySelector('button');

  let isBackgroundWhite = true;

  button.addEventListener('click', function () {
      if (isBackgroundWhite) {
          letterContainer.style.backgroundColor = '#ffffffab';
      } else {
          letterContainer.style.backgroundColor = '#fff';
      }

      isBackgroundWhite = !isBackgroundWhite;
  });
});
