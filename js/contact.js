window.addEventListener('DOMContentLoaded', (event) => {
    const submitButton = document.querySelector(".section--contact__button");
    const textAfterSubmission = document.querySelector(".submit--text");
    console.log("halkocojest");
    submitButton.addEventListener("click", (event) => {

        textAfterSubmission.classList.add("submit--text--appear");
    });
});