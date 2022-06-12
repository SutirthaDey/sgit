const form  = document.getElementById('my-form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    localStorage.setItem('name',`${e.target.name.value}`);
    localStorage.setItem('email',`${e.target.email.value}`)
    e.target.name.value='';
    e.target.email.value='';
})