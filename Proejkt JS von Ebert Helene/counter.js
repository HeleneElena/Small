'use strict'

/*подсчет товара для всех счетчиков*/ 
window.addEventListener('click', (event) => {

    /*счетчик вынесли из поля видимости функции*/ 
    let counter;

    /*проверяем чтобы была нажата только кнопка плюс и минус, прочие игнорируем нажатие*/ 
    /*сначала событие всплывает до родителя, потом с родителя определяем нужный счетчик*/ 
        if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
            const eltern = event.target.closest('.counter');
            counter = eltern.querySelector('[data-counter]');
        }
    
/*прибавляем товар*/ 
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    if (event.target.dataset.action === 'minus') {

        /*удаляем товар*/
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
    }
})


/* подсчет количества товара для одного счетчика*/ 
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
