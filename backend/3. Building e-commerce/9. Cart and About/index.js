const btn = document.getElementById('cart');
const cart = document.getElementsByClassName('cart')[0];
const closebtn = document.getElementById('close');
const addToCart = document.getElementsByClassName('add-to-cart')

btn.addEventListener('click',()=>{
    cart.classList.add('active');
})

closebtn.addEventListener('click',()=>{
    cart.classList.remove('active');
})

for(let i=0;i<addToCart.length;i++)
  addToCart[i].addEventListener('click',handleCart);

function handleCart(e){
    const album = e.target.parentElement.parentElement;
    const price = e.target.parentElement.childNodes[0].innerText;
    const title = album.childNodes[1].innerText;
    const image = album.childNodes[3].src;
    const cartDiv = document.getElementsByClassName('cart-div')[0];

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    const cartImage = document.createElement('span');
    cartImage.classList.add('cart-image');
    const img = document.createElement('img');
    img.src = image;

    const cartTitle = document.createElement('span');
    cartTitle.appendChild(document.createTextNode(`${title}`));
    cartTitle.classList.add('cart-title');
    cartImage.appendChild(img);
    cartImage.appendChild(cartTitle);

    const cartPrice = document.createElement('span');
    cartPrice.appendChild(document.createTextNode(`${price}`));
    cartPrice.classList.add('cart-price');

    const cartQuantity = document.createElement('span');
    const cartQuant = document.createElement('button');
    cartQuant.appendChild(document.createTextNode('1'));
    const cartRmv = document.createElement('button');
    cartRmv.appendChild(document.createTextNode('REMOVE'));
    cartQuant.classList.add('cart-quant');
    cartRmv.classList.add('cart-rmv');

    cartQuantity.appendChild(cartQuant);
    cartQuantity.appendChild(cartRmv);

    cartItem.appendChild(cartImage);
    cartItem.appendChild(cartPrice);
    cartItem.appendChild(cartQuantity);

    cartDiv.appendChild(cartItem);
}