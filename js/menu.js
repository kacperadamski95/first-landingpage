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
    const introductionText = document.querySelector(".introduction__text");

    window.addEventListener("scroll", (event) => {

        bodyBody.classList.add("body--scroll");
    });

    const bodyBackgroundDesktop = document.querySelector(".body--background--desktop");

    window.addEventListener("resize", (event) => {
        //Na dole mam ten sam warunek, ale zapisany w wersji skróconej, używać tamtego
        // if (window.innerWidth > 769) {
        //     bodyBody.classList.add("body--background--desktop");
        // }

        window.innerWidth > 769 ? bodyBody.classList.add("body--background--desktop") : null;
    });

    const siemanko = document.querySelector(".section--introduction h1");

        siemanko.addEventListener("click", (event) => {
            //chcę otworzyć link do contact
            window.location.href = "file:///C:/Users/Kacpa/Desktop/programowanie/first-landingpage/contact.html";
        });
});







