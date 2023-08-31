document.addEventListener("DOMContentLoaded", function () {
    const ratingBx = document.querySelector(".rating-bx");
    const thnkYou = document.querySelector(".thnk-you");
    const submitBtn = document.getElementById("submitbtn");
    const rating = document.getElementById("rating1");
    const rates = document.querySelectorAll(".b1,.b2,.b3,.b4,.b5");
    const scoreElement = document.getElementById("score")

    submitBtn.addEventListener("click", () => {
        thnkYou.classList.remove("hidden");
        ratingBx.style.display = "none";
    });
    rates.forEach(rateButton => {
                rateButton.addEventListener("click", () => {
                    const selectedScore = rateButton.textContent;
                    scoreElement.textContent = selectedScore;
                });
            });
        });
