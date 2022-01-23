const scrollFunc = () => {
    const links = document.querySelectorAll('.header-menu__item a');
    const linkCharacteristics = document.querySelector('.card-details__link-characteristics');

    const newArray = [...links, linkCharacteristics];

    seamless.polyfill();
 
    newArray.forEach((elem) => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
 
            const id = elem.getAttribute('href').substring(1);
            const section = document.getElementById(id);
 
            if (section) {
                seamless.elementScrollIntoView(section, {
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }
        });
    });
};
scrollFunc();   