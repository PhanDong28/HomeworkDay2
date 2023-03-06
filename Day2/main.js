const input = document.getElementById('input')
const list = document.getElementById('list')
const title = document.getElementById('title')
const checkboxlist = document.getElementById('checkbox')
const remove = document.getElementById('close')


input.addEventListener('keyup',(event) => {
    if (event.key === 'Enter' || event.keycode ===13) {
        const inputList = document.createElement('li');    
        const newTodo = document.createTextNode(input.value); 
        inputList.appendChild(newTodo);                       
        inputList.className ='li class="border-b-[2px] border-solid px-[60px] py-[16px] bor-border"'
        list.append(inputList);
    }
    
})

checkboxlist.addEventListener('click', () => {
    if (checkboxlist.className.includes('bx bx-square')) {
       checkboxlist.className='bx bx-check-square cursor-pointer' 
    }   else {
        checkboxlist.className='bx bx-square cursor-pointer'
    }
});


remove.addEventListener('click', () => {
    list.removeChild(list.firstElementChild);
})
