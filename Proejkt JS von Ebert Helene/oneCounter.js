/* подсчет количества товара для одного счетчика*/ 
const btnMinus = document.querySelectorAll('.remov-btn'),
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


