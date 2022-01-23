const tabsFunc = () => {
    const tabs = document.querySelectorAll('.card-detail__change'),
      tabsTitle = document.querySelector('.card-details__title'),
      tabsPrice = document.querySelector('.card-details__price'),
      tabsImage = document.querySelector('.card__image_item');


    const tabsOptions = [
        {
            name: 'Graphite',
            memory: '128',
            price: 69990,
            image: 'img/iPhone-graphite.webp'
        },
        {
            name: 'Silver',
            memory: '256',
            price: 79990,
            image: 'img/iPhone-silver.webp'
        },
        {
            name: 'Sierra Blue',
            memory: '512',
            price: 99990,
            image: 'img/iPhone-sierra_blue.webp'
        }
    ];

    const changeContent = (index) => {
        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory} ${tabsOptions[index].name}`;
        tabsPrice.textContent = `${tabsOptions[index].price}₽`;
    
        tabsImage.setAttribute('src', tabsOptions[index].image);
    };

    const changeActiveTabs = (indexClickedTab) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('active');

            if (index === indexClickedTab) {
            tab.classList.add('active');
            }
        });
        changeContent(indexClickedTab);
    };

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            changeActiveTabs(index);
        });
    });
    changeContent(0);
    };
tabsFunc(); 

