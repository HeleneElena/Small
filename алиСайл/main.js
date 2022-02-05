const formSearch = document.querySelector('.form-search'),
      inputCitiesFrom = document.querySelector('.input__cities-from'),
      dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
      dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
      inputCitiesTo = document.querySelector('.input__cities-to'),
      inputDateDepart = document.querySelector('.input__date-depart');

const city = ['Moskau', 'Regensburg', 'Minich', 'Berlin', 'Leipzig', 'Dresden', 'Kemerovo', 'Novosibirsk',
               'Prag', 'Barselona'];

    inputCitiesFrom.addEventListener('input', () => {
        dropdownCitiesFrom.textContent = '';

        if (inputCitiesFrom.value !== '') {

            const filterCity = city.filter((item) => {
                const fixItem = item.toLowerCase();
                return fixItem.includes(inputCitiesFrom.value.toLowerCase());
            });
            filterCity.forEach((item) => {
                const li = document.createElement('li');
                li.classList.add('dropdown__city');
                li.textContent = item;
                dropdownCitiesFrom.append(li);
                console.log(li);
            });
        } 
    });
