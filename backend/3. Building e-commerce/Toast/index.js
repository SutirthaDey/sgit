const btn = document.getElementById("btn");
const cont = document.getElementById("container");

btn.addEventListener('click',()=>{
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerText = 'Notified!';

    cont.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
})