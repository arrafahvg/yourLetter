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

const quotes = [
  { text: "\"Hence (if you will not misunderstand me) the exquisite arbitrariness and irresponsibility of this love. I have no duty to be anyone's Friend and no man in the world has a duty to be mine. No claims, no shadow of necessity. Friendship is unnecessary, like philosophy, like art, like the universe itself (for God did not need to create). It has no survival value; rather it is one of those things which give value to survival.\"", name: "— C.S. Lewis —" },
  { text: "\"One friend with whom you have a lot in common is better than three with whom you struggle to find things to talk about. We never needed best friend gear because I guess with real friends you don't have to make it official. It just is.\"", name: "— Mindy Kaling —" },
  { text: "\"No friendship is an accident.\"", name: "— O. Henry —" },
  { text: "\"Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years.\"", name: "— Richard Bach —" },
  { text: "\"True friends are never apart, maybe in distance but never in heart.\"", name: "— Unknown —" },
  { text: "\"There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves; it is not my nature.\"", name: "— Jane Austen —" }
];

let currentQuoteIndex = 0;
let intervalID; // Declare intervalID variable

function changeQuote() {
  const mainQuoteElement = document.querySelector(".mainQuotes");
  const nameQuoteElement = document.querySelector(".nameQuotes");
  const currentQuote = quotes[currentQuoteIndex];

  mainQuoteElement.style.opacity = 0;
  nameQuoteElement.style.opacity = 0;

  setTimeout(function() {
    mainQuoteElement.textContent = currentQuote.text;
    nameQuoteElement.textContent = currentQuote.name;

    mainQuoteElement.style.opacity = 1;
    nameQuoteElement.style.opacity = 1;
  }, 500);
}

window.onload = function () {
  changeQuote();
  intervalID = setInterval(changeQuote, 100000); // Assign intervalID when setting the interval
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
