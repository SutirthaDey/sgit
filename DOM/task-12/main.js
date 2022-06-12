const form  = document.getElementById('my-form');

const showDetails = ()=> {
    const keys = Object.keys(localStorage);
    const userList = document.getElementsByClassName('items');
    keys.forEach((key)=>{
        const li = document.createElement('li');
        li.className='item';
        const objDeserialized = JSON.parse(localStorage.getItem(key));
        li.appendChild(document.createTextNode(`${objDeserialized.name}   `));
        li.appendChild(document.createTextNode(`${objDeserialized.email}   `));
    
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
    console.log(key);
    localStorage.setItem(`${key}`,objSerialized);
    
    e.target.name.value='';
    e.target.email.value='';
    
    const userList = document.getElementsByClassName('items');
    const li = document.createElement('li');
    li.className='item';
    const objDeserialized = JSON.parse(localStorage.getItem(key));
    li.appendChild(document.createTextNode(`${objDeserialized.name}   `));
    li.appendChild(document.createTextNode(`${objDeserialized.email}   `));
    
    userList[0].appendChild(li);
})