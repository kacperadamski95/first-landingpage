window.addEventListener('DOMContentLoaded', (event) => {
    //cały kod wykonujemy w DOMContentLoaded i dodajemy EventListenera na DOMContentLoaded tylko raz
    const menuIconHamburger = document.querySelector(".menu-icon");

    menuIconHamburger.addEventListener("click", (event) => {

        const navigationMobile = document.querySelector(".navigation--mobile");

        navigationMobile.classList.add("navigation--mobile--active");

        const menuIconClose = document.querySelector(".menu-icon-close");

        //when clicking the hamburger menu its changing to x menu and displays 3 links, when clicking on x menu it goes back to first state

        menuIconClose.addEventListener("click", (event) => {

            navigationMobile.classList.remove("navigation--mobile--active");

            menuIconHamburger.classList.add("menu--icon--hidden");

            menuIconHamburger.classList.remove("menu--icon--hidden");

            //adding new background on body when scrolling

            const bodyBody = document.querySelector(".body--scroll--js");

            bodyBody.addEventListener("scroll", (event) => {

                const bodyScroll = document.querySelector(".body--scroll");

                bodyScroll.classList.add("body--scroll")
            });
        });

    });



    // menuIconHamburger.classList.add("menu--icon--hidden"); - TO JEST NUMER 2 to odkomentować jak wrzucę przywracanie hamburherowej ikonki

    /* 2. schowaj ikonkę hamburgera:
    dodaj klasę (.menu--icon--hidden)
    */
});

/* 1. złap ikonkę X (zamknięcie menu) - const menuIconClose(zmienić klasę w html) = document.querySelector(".x-icon");
dodaj do niej EventListenera takiego jak do ikonki hamburgera - menuIconHamburger.addEventListener("click touch", (event) => {
    const navigationMobile = document.querySelector(".navigation--mobile");
i z elementu z klasą navigation--mobile usuń klasę navigation--mobile--active (do wygooglowania) (zamiast add będzie remove raczej, ale sprawdzić)   navigationMobile.classList.remove?("navigation--mobile--active");
3. musze później przywrócić hamburgerową ikonkę - usunięcie klasy (.menu--icon--hidden)  menuIconHamburger.classList.remove?("menu--icon--hidden");
*/







