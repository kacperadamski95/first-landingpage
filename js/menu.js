window.addEventListener('DOMContentLoaded', (event) => {
    //cały kod wykonujemy w DOMContentLoaded i dodajemy EventListenera na DOMContentLoaded tylko raz
    //tutaj ustaliłem zmienne, które muszą być na tym samym poziomie
    const menuIconHamburger = document.querySelector(".menu-icon");
    const menuIconClose = document.querySelector(".menu-icon-close");
    const navigationMobile = document.querySelector(".navigation--mobile");
    //dodałem event listenera na kliknięcie ikonki hamburgera
    menuIconHamburger.addEventListener("click", (event) => {
    //tutaj na kliknięciu pokazuje się nawigacja
        navigationMobile.classList.add("navigation--mobile--active");
    //tutaj na kliknięciu chowam ikonkę hamburgera
        menuIconHamburger.classList.add("menu--icon--hidden");
    });
    //na kliknięcie ikonki X 
    menuIconClose.addEventListener("click", (event) => {
        //usuwam nawigację
        navigationMobile.classList.remove("navigation--mobile--active");
        //usuwam klasę, która sprawia, że jest niewidoczna ikonka hamburgera
        menuIconHamburger.classList.remove("menu--icon--hidden");
        

        
    });

    //adding new background on body when scrolling
    const bodyBody = document.querySelector("body");

    window.addEventListener("scroll", (event) => {

        bodyBody.classList.add("body--scroll");
    });
});







