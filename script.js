function bukaSurprise() {
    var password = document.getElementById("password").value;
    // Ganti "password-rahasia" dengan password yang lu mau
    if (password === "araaraaja") {
        // Redirect ke halaman surprise
        window.location.href = "letter/halaman-surprise.html";
    } else {
        alert("Wrong password, Hint: Just like the old one.");
    }
}

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

const quotes = [
  { text: "\"Hence (if you will not misunderstand me) the exquisite arbitrariness and irresponsibility of this love. I have no duty to be anyone's Friend and no man in the world has a duty to be mine. No claims, no shadow of necessity. Friendship is unnecessary, like philosophy, like art, like the universe itself (for God did not need to create). It has no survival value; rather it is one of those things which give value to survival.\"", name: "— C.S. Lewis" },
  { text: "\"One friend with whom you have a lot in common is better than three with whom you struggle to find things to talk about. We never needed best friend gear because I guess with real friends you don't have to make it official. It just is.\"", name: "— Mindy Kaling" },
  { text: "\"No friendship is an accident.\"", name: "— O. Henry" },
  { text: "\"Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years.\"", name: "— Richard Bach" },
  { text: "\"True friends are never apart, maybe in distance but never in heart.\"", name: "— Unknown" },
  { text: "\"There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves; it is not my nature.\"", name: "— Jane Austen" }
];

let currentQuoteIndex = 0;
let intervalID; // Declare intervalID variable

function changeQuote() {
  const mainQuoteElement = document.querySelector(".mainQuotes");
  const nameQuoteElement = document.querySelector(".nameQuotes");
  const currentQuote = quotes[currentQuoteIndex];

  mainQuoteElement.textContent = currentQuote.text;
  nameQuoteElement.textContent = currentQuote.name;
}

window.onload = function () {
  changeQuote();
  intervalID = setInterval(changeQuote, 30000); // Assign intervalID when setting the interval
};

function changeSlide(n) {
  clearInterval(intervalID);
  currentQuoteIndex += n;

  if (currentQuoteIndex < 0) {
    currentQuoteIndex = quotes.length - 1;
  } else if (currentQuoteIndex >= quotes.length) {
    currentQuoteIndex = 0;
  }

  changeQuote();
  intervalID = setInterval(changeQuote, 30000);
}

document.querySelector(".previous").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default behavior
  changeSlide(-1);
});

document.querySelector(".next").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default behavior
  changeSlide(1);
});
