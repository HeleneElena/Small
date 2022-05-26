const boxList = document.querySelectorAll('.box'),
      nav = document.querySelector('nav');

nav.addEventListener('click', (event) => {
    if(event.target.tagName !== 'LI') return;

    let filterList = event.target.dataset['f'];

    boxList.forEach((el) => {
        el.classList.remove('hide');
        if(!el.classList.contains(filterList) && filterList !== 'all') {
            el.classList.add('hide');
        }
    });
});


