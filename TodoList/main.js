const message = document.querySelector('.message'),
      button = document.querySelector('.add'),
      todo = document.querySelector('.todo');

let todoList = [];

if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}

button.addEventListener('click', function() {
    
    let newTodo = {
        todo: message.value,
        checked: false,
        important: false
    };
    todoList.push(newTodo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
});

function displayMessages() {
    let displayMessage = '';

    todoList.forEach( function(item, i) {
        displayMessage += `
            <li> 
                <input type="checkbox" id="item_${i}" ${item.checked ? 'checked' : ''} >
                <label for="item_${i}"> ${item.todo} </label>
            </li>
        `;
        todo.innerHTML = displayMessage;
    });
}

todo.addEventListener('change', function(event) {
    let valueLabel = todo.querySelector('[for=' + event.target.getAttribute('id') + ']').innerHTML;

    todoList.forEach(function(item) {
        if (item.todo === valueLabel) {
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });

});

