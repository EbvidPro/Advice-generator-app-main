let adviceID = document.querySelector(".adviceId");
let adviceText = document.querySelector(".adviceText");
let randBtn = document.querySelector(".randBtn")
randBtn.addEventListener("click", getAdvice);

function getAdvice() {
    fetch('https://api.adviceslip.com/advice', { cache: "no-cache" })
        .then((obj) => obj.json())
        .then((res) => {
            adviceID.innerHTML = `Advice # ${res.slip.id}`;
            adviceText.innerHTML = `"${res.slip.advice}"`;
        })
}

getAdvice();

// setInterval(function () { getAdvice();  }, 5000)
// setInterval(getAdvice, 3000)
