const tabButtons = document.querySelectorAll('.design-list__item');
const tabdDescriptions = document.querySelectorAll(".design__descr");
const tabImages = document.querySelectorAll('.design-images');

const changeContent = (arr, value) => {
    arr.forEach((elem) => {
            if (elem.dataset.tabsField === value) {
                elem.classList.remove('hidden');
            } else {
                elem.classList.add('hidden');
            }
        });
};

tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', (event) => {
        const dataValue = tabButton.dataset.tabsHandler;

        changeContent(tabdDescriptions, dataValue);
        changeContent(tabImages, dataValue);

        tabButtons.forEach((btn) => {
            if(btn === event.target) {
                btn.classList.add('design-list__item_active');
            } else {
                 btn.classList.remove('design-list__item_active');
            }
        });
        
    });
});

