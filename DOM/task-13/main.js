const form  = document.getElementById('my-form');

function onDelete(key,li,e){
  li.remove();
  localStorage.removeItem(key);
}

function onEdit(key,li,e){
 const name = document.getElementById('name');
 const email = document.getElementById('email');
 const obj = JSON.parse(localStorage.getItem(key));
 
 name.value = obj.name;
 email.value = obj.email;

 li.remove();
}
const showDetails = ()=> {
    const keys = Object.keys(localStorage);
    const userList = document.getElementsByClassName('items');
    keys.forEach((key)=>{
        const li = document.createElement('li');
        const del = document.createElement('button');
        const edit = document.createElement('button');
        li.className='item';
        const objDeserialized = JSON.parse(localStorage.getItem(key));
        li.appendChild(document.createTextNode(`${objDeserialized.name}   `));
        li.appendChild(document.createTextNode(`${objDeserialized.email}   `));
        del.appendChild(document.createTextNode('Delete'));
        edit.appendChild(document.createTextNode('Edit'));
        del.style.border= '1px solid red';
        edit.style.border= '1px solid green';
        del.style.marginLeft = '10px';

        del.addEventListener('click',(e)=>onDelete(key,li,e));
        edit.addEventListener('click',(e)=>onEdit(key,li,e));

        li.appendChild(edit);
        li.appendChild(del);
    
        userList[0].appendChild(li);
    
    })
}

window.addEventListener('DOMContentLoaded',showDetails);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const obj = {
        name: e.target.name.value,
        email: e.target.email.value
    }
    const objSerialized = JSON.stringify(obj);
    const key = 'userDetails'.concat(obj.email.toString());
    localStorage.setItem(`${key}`,objSerialized);
    
    e.target.name.value='';
    e.target.email.value='';
    
    const userList = document.getElementsByClassName('items');
    const li = document.createElement('li');
    const del = document.createElement('button');
    const edit = document.createElement('button');
    li.className='item';
    const objDeserialized = JSON.parse(localStorage.getItem(key));
    li.appendChild(document.createTextNode(`${objDeserialized.name}   `));
    li.appendChild(document.createTextNode(`${objDeserialized.email}   `));
    del.appendChild(document.createTextNode('Delete'));
    edit.appendChild(document.createTextNode('Edit'));
    del.style.border= '1px solid red';
    edit.style.border= '1px solid green';
    del.style.marginLeft = '10px';

    del.addEventListener('click',(e)=>onDelete(key,li,e));
    edit.addEventListener('click',(e)=>onEdit(key,li,e));

    li.appendChild(edit);
    li.appendChild(del);
    
    userList[0].appendChild(li);
})
