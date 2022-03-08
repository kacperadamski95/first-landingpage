window.addEventListener('DOMContentLoaded', (event) => {
    //cały kod wykonujemy w DOMContentLoaded i dodajemy EventListenera na DOMContentLoaded tylko raz
    const submitButton = document.querySelector(".section--contact__button");

    submitButton.addEventListener("submit", (event) => {

        const submitButton = document.querySelector(".submit--text");
        
        submitButton.classList.add("submit--text--appear");
    });
});