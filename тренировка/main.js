const input = document.querySelector('.such'),
      list = document.querySelector('.list');

let todos;
function toLocalS() {
    todos = list.innerHTML;
    localStorage.setItem('todos', todos);
}

input.addEventListener('change', (event) => {
    let value = event.target.value;
    
        let li = document.createElement('li');
        li.classList.add('listItem');
        li.innerText = value;
        toLocalS();
        input.value = '';
        list.append(li);
    
        let btnDelete = document.createElement('button');
        btnDelete.innerText = 'Delete';
        btnDelete.classList.add('btn');
        li.append(btnDelete);

        let btnLine = document.createElement('button');
        btnLine.innerText = 'Fertig';
        btnLine.classList.add('btn');
        li.append(btnLine);

        btnDelete.addEventListener('click', () => {
            li.classList.add('hide');
            toLocalS();
        });

        btnLine.addEventListener('click', () => {
            li.classList.add('line');
            toLocalS();
        });
});

if(localStorage.getItem('todos')) {
    list.innerHTML = localStorage.getItem('todos');
}