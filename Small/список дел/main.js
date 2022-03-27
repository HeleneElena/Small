const btn = document.getElementById('add');

const todoList = [];
// если в локалсторадж есть дела, то их добавить на страницу
if (localStorage.getItem('todo') != undefined) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    out();
}

btn.addEventListener('click', () => {
    const inputValue = document.getElementById('in').value;
   // {todo: "Lesen", check: false}
    let temp = {};
    temp.todo = inputValue;
    temp.check = false;

    let i = todoList.length;
    todoList[i] = temp;
    console.log(todoList);
    out();
    localStorage.setItem('todo', JSON.stringify(todoList)); // добавили в локалсторадж
});

//Пишем вывод данных дел
function out() {
    let out = '';
    for (let key in todoList) {
        if (todoList[key.check]) {
            out += '<input type="checkbox" checked>';
        } else {
            out += '<input type="checkbox">';
        }
        out += todoList[key].todo + '<br>'; //формируем список дел
    }
    document.getElementById('out').innerHTML = out;
}