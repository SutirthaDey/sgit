const form  = document.getElementById('my-form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const obj = {
        name: e.target.name.value,
        email: e.target.email.value
    }
    const objSerialized = JSON.stringify(obj);
    localStorage.setItem('data',objSerialized);
    
    e.target.name.value='';
    e.target.email.value='';
})

const objDeserialized = JSON.parse(localStorage.getItem('data'));
alert(objDeserialized.name,);
alert(objDeserialized.email);