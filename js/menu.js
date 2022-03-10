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
    // const introductionText = document.querySelector(".introduction__text"); - czy to jest potrzebne

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

    //paragaraf w index i dwie klasy w css
    //przy kliknięciu i przytrzymaniu myszki na "dole" na h4 (email) ma pokazać się .email-paragraph , czemu zmienia się czcionka, ale nie wyświetla się tekst, który dodałem w paragrafie,jak jest z połączeniem klasy
    //która nie jest w htmlu, tylko w css, ale nie jest przypisana do tego paragrafu, do paragrafu przypisana jest klasa z display none, której i tak tu nie używam
    const emailTextInformation = document.querySelector(".footer__email h4");
    const textMouseUp = document.querySelector(".email--paragraph")
    emailTextInformation.addEventListener("mousedown" , (event) => {
        if ("mousedown") { 
            emailTextInformation.classList.add("email-paragraph-information");
        }
        // else { 
        //     emailTextInformation.classList.add(textMouseUp);
        // }
    });

    //dblclick - chcę żeby na doubleclick na tekscie nad ikonką instagrama przekierowało mnie na https://www.instagram.com/kacper.adamskii/
    const instagramLink = document.querySelector(".footer_instagram");
    instagramLink.addEventListener("dblclick", (event) => {
        window.location.href = "https://www.instagram.com/kacper.adamskii/";
    });
    //chcę, żeby poniżej rozdzielczości 600px kolor tła zmieniał się na pomarańczowy - czemu jak wezmę z powrotem to nie pokazuje się biały tylko pomarańczowy
    const bodyBackgroundMobile = document.querySelector(".body--background--mobile")
    window.addEventListener("resize", (event) => {
        if (window.innerWidth < 600) {
            bodyBody.classList.add("body--background--mobile");
        }
    });
    window.addEventListener("resize", (event) => {
        if (window.innerWidth < 768) {
            bodyBody.classList.add("body--background--kurdebele");
        }
    });
});







