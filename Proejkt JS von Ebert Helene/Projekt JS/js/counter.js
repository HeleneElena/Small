'use strict'
window.addEventListener('click', (event) => {
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const eltern = event.target.closest('.counter-wrapper');
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