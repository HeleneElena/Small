const inp = document.querySelector('.answer');

inp.addEventListener('change', (event) => {
    let info = event.target.value.trim();
    let listArroy = document.querySelectorAll('.elast-list li');
    
    if (info != '') { // ищем подстроку внутри строки
        listArroy.forEach(el => {
            if (el.innerText.search(info) == -1) {
                el.classList.add('hide');
            } else {
                el.classList.remove('hide');
            }
        });
    } else {
        listArroy.forEach(el => {
            el.classList.remove('hide');
    })
    }
});
        