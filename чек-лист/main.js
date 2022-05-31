const input = document.querySelector('#input');
const list = document.querySelector('#list');

input.addEventListener("keypress", (event) => {
	let inputValue = event.target.value;
	
if (event.key == 'Enter') {
	let li = document.createElement('li');
	li.innerHTML = inputValue;
	input.value = '';
	li.classList.add('listitem');
	list.append(li);
	
	
	let btnDelete = document.createElement('button');
	btnDelete.innerHTML = 'Delete';
	btnDelete.classList.add('delete');
	li.append(btnDelete);

	btnDelete.addEventListener('click', () => {
		li.classList.add('hide');
	});

	let btnFertig = document.createElement('button');
	btnFertig.innerHTML = 'Fertig';
	btnFertig.classList.add('fertig');
	li.append(btnFertig);

	btnFertig.addEventListener("click", () => {
		li.classList.add('done');
	});
	}
	
});
