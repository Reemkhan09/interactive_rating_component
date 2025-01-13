const mainContainer = document.querySelector(".main-container");

const thanksContainer = document.querySelector(".thank-you");

const submitBtn = document.getElementById("submit-btn");

const rating = document.getElementById("rating");

const rates = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
});

rates.forEach((e) => {
    e.addEventListener("click", () => {
        rating.innerHTML = e.innerHTML;
        console.log(rating.innerHTML);
    })
})

