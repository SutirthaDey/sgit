const form = document.getElementById('my-form');

// on deleting the users
async function onDelete(li,id){
    const response = await axios.delete(`http://localhost:3000/delete/${id}`);
    li.remove();
}

// creating post for each user in front end
const createPost = ({id,username,email})=>{
    const userList  = document.getElementById('items');
    const li  = document.createElement('li');
    const del = document.createElement('button');
    const edit = document.createElement('button');
    del.addEventListener('click',(e)=>onDelete(li,id));
    edit.addEventListener('click',(e)=>onEdit(id,username,email,li));
    const text = document.createTextNode(`${username}`);
    del.appendChild(document.createTextNode(`Delete`));
    edit.appendChild(document.createTextNode(`Edit`));
    del.style.margin = '5px';

    li.appendChild(text);
    li.appendChild(document.createTextNode(` | ${email} `));
    li.appendChild(del);
    li.appendChild(edit);

    userList.appendChild(li);
}

async function getIndex(){

    // showing each by creating 
    const response = await axios.get('http://localhost:3000');
    response.data.forEach((booking) => {
        createPost(booking);
    });

}

// on dom reload
document.addEventListener('DOMContentLoaded',getIndex);


// on submitting adding the value to database and creating a post
form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const response = await axios.post('http://localhost:3000/insert',{
        username:e.target.name.value,
        email: e.target.email.value
    })

    createPost(response.data);
})
