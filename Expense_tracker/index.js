const form = document.getElementById('my-form');

function onDelete(e){
    const parent = e.target.parentElement;
    const key = parent.firstChild.textContent;

    parent.remove();
    localStorage.removeItem(key);
}

function onEdit(e){
    const parent = e.target.parentElement;
    const key = parent.firstChild.textContent;
    const parseObj = JSON.parse(localStorage.getItem(key));

    document.getElementById('expense').value = parseObj.expense;
    document.getElementById('description').value = parseObj.desc;
    document.getElementById('category').value = parseObj.category;
    document.getElementById('submit').value = 'Edit Expense';
    parent.remove();
    localStorage.removeItem(key);
}

function createEntries(amount,description,category){
    const showlist = document.getElementById('showlist');
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');

    li.appendChild(document.createTextNode(`${amount}-${category}-${description}`));
    deleteButton.appendChild(document.createTextNode('delete'));
    editButton.appendChild(document.createTextNode('edit'));
    deleteButton.addEventListener('click',(e)=>onDelete(e));
    editButton.addEventListener('click',(e)=>onEdit(e));
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    showlist.appendChild(li);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const amount = e.target.expense.value;
    const description = e.target.description.value;
    const category = e.target.category.value;

    createEntries(amount,description,category);

    const obj = {
        expense: amount,
        desc: description,
        category: category
    }

    const jsonObj = JSON.stringify(obj);

    localStorage.setItem(`${amount}-${category}-${description}`,jsonObj);

    e.target.expense.value = null;
    e.target.description.value = '';
    e.target.category.value = null;
    document.getElementById('submit').value = 'Add Expense';
})

window.addEventListener('DOMContentLoaded',(e)=>{
    const keys = Object.keys(localStorage);
    const showlist = document.getElementById('showlist');

    keys.forEach(key => {
    const parseObj = JSON.parse(localStorage.getItem(key));
    createEntries(parseObj.expense,parseObj.desc,parseObj.category);
    });
})