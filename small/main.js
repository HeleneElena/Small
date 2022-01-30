let btn = document.querySelector('.btn');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.close_modal_window');

btn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});