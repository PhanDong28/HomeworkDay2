const input = document.getElementById('input')
const list = document.getElementById('list')
const title = document.getElementById('title')
const checkboxlist = document.getElementById('checkbox')
const remove = document.getElementById('close')

input.addEventListener('keyup',(event) => {
    if (event.key === 'Enter' || event.keycode ===13) {
        const inputList = document.createElement('li');    
        const newTodo = document.createTextNode(input.value);
        const checkbox = document.createElement('span');
        checkbox.classList.add('bx', 'bx-square', 'cursor-pointer');
        checkbox.addEventListener('click', () => {
            if (checkbox.classList.contains('bx-square')) {
                checkbox.classList.replace('bx-square', 'bx-check-square');
            } else {
                checkbox.classList.replace('bx-check-square', 'bx-square');
            }
        });
        const removeBtn = document.createElement('span');
        removeBtn.classList.add('bx', 'bx-x', 'bx-md', 'cursor-pointer', 'float-right');
        removeBtn.addEventListener('click', () => {
            inputList.remove();
        });
        inputList.appendChild(checkbox);
        inputList.appendChild(newTodo);
        inputList.appendChild(removeBtn);
        inputList.classList.add('li', 'border-b-[2px]', 'border-solid', 'px-[60px]', 'py-[16px]', 'bor-border');
        list.append(inputList);
        input.value = ''; 
    }
})

