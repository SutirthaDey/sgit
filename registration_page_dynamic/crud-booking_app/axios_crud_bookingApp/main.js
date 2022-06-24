const form = document.getElementById('my-form');

const onDelete = (li,id)=>{
 axios.delete(`https://crudcrud.com/api/f95614ed8854451db9fe1973069120f8/bookings/${id}`)
 .then(()=> li.remove())
 .catch((e)=>console.log(e));
}

const onEdit = (e)=>{

}
const createPost = ({_id,name,email})=>{
    const userList  = document.getElementById('items');
    const li  = document.createElement('li');
    const del = document.createElement('button');
    const edit = document.createElement('button');
    del.addEventListener('click',(e)=>onDelete(li,_id));
    edit.addEventListener('click',(e)=>onEdit(li,_id));
    const text = document.createTextNode(`${name}`);
    del.appendChild(document.createTextNode(`Delete`));
    edit.appendChild(document.createTextNode(`Edit`));
    del.style.margin = '5px';

    li.appendChild(text);
    li.appendChild(document.createTextNode(`${email}`));
    li.appendChild(del);
    li.appendChild(edit);

    userList.appendChild(li);
}
const showPosts = (bookings)=>{
    bookings.forEach((booking) => {
        createPost(booking);
    });
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const obj = {
        name: e.target.name.value,
        email: e.target.email.value
    }
    
    axios.post('https://crudcrud.com/api/f95614ed8854451db9fe1973069120f8/bookings', obj)
    .then((res)=> {
        console.log(res);
        createPost(res.data)
    })
    .catch((e)=> console.log(e));
})

document.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/f95614ed8854451db9fe1973069120f8/bookings')
    .then((res)=> showPosts(res.data));
})



