let inputSearch = document.querySelector('.input');

inputSearch.addEventListener('input', (event) => {
    let val = event.target.value.trim();
    let listSearch = document.querySelectorAll('.list');
    if (val != '') {
       listSearch.forEach(el => {
          if(el.innerText.search(val) == -1) {
            el.classList.add('hide');
          } else {
            el.classList.remove('hide');
          }
       });
        
    } else {
        listSearch.forEach(el => {
            el.classList.remove('hide');
        });
    }
});
