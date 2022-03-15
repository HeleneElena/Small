'use strict'
window.addEventListener('click', (event) => {

    let counter;

        if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
            const eltern = event.target.closest('.counter');
            counter = eltern.querySelector('[data-counter]');
        }
    

    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    if (event.target.dataset.action === 'minus') {

        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
    }
})



/*const btnMinus = document.querySelectorAll('.remov-btn'),
      btnPlus = document.querySelectorAll('.add-btn'),
      counter = document.querySelectorAll('.menge-btn');

btnMinus.addEventListener('click', () => {

    console.log('Click Minus');

    if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
    }
})

btnPlus.addEventListener('click', () => {
    console.log('Click Plus');
    counter.innerText = ++counter.innerText;
})

*/
