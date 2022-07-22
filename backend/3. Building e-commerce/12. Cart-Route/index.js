// backend is called from e-commerce server

const cart_items = document.querySelector('#cart .cart-items');
const musicContent = document.getElementById('music-content');
const merchContent = document.getElementById('merch-content');

function createCartItem(name,img_src,price,prodId){
    const id = name.split(' ')[0]+prodId;
    if (document.querySelector(`#in-cart-${id}`)){
        alert('This item is already added to the cart');
        return
    }

    let total_cart_price = document.querySelector('#total-value').innerText;
    document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)+1
    const cart_item = document.createElement('div');
    cart_item.classList.add('cart-row');
    total_cart_price = parseFloat(total_cart_price) + parseFloat(price)
    total_cart_price = total_cart_price.toFixed(2)
    document.querySelector('#total-value').innerText = `${total_cart_price}`;
    cart_item.setAttribute('id',`in-cart-${id}`);
    cart_item.innerHTML = `
    <span class='cart-item cart-column'>
    <img class='cart-img' src="${img_src}" alt="">
        <span>${name}</span>
</span>
<span class='cart-price cart-column'>${price}</span>
<span class='cart-quantity cart-column'>
    <input type="text" value="1">
    <button>REMOVE</button>
</span>`
    const productId = document.createElement('input');
    productId.setAttribute('type','hidden');
    productId.value = prodId;
    cart_item.appendChild(productId);
    cart_items.appendChild(cart_item)
}

function showCartItems(items){
    items.forEach(({title,imageUrl,price,id})=>{
        createCartItem(title,imageUrl,price,id);
    })
}


const parentContainer = document.getElementById('EcommerceContainer');
parentContainer.addEventListener('click',(e)=>{

    if (e.target.className=='shop-item-button'){
        const id = e.target.parentNode.parentNode.id;
        const name = document.querySelector(`#${id} h3`).innerText;
        const img_src = document.querySelector(`#${id} img`).src;
        const price = e.target.parentNode.firstElementChild.firstElementChild.innerText;
        if (document.querySelector(`#in-cart-${id}`)){
            alert('This item is already added to the cart');
            return
        }
        const prodId = document.querySelector(`#${id} input`).value;

        axios.post('http://localhost:3000/cart',{prodId:prodId})
        .then((res)=>console.log(res));

        let total_cart_price = document.querySelector('#total-value').innerText;
        document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)+1
        const cart_item = document.createElement('div');
        cart_item.classList.add('cart-row');
        total_cart_price = parseFloat(total_cart_price) + parseFloat(price)
        total_cart_price = total_cart_price.toFixed(2)
        document.querySelector('#total-value').innerText = `${total_cart_price}`;
        cart_item.setAttribute('id',`in-cart-${id}`);
        cart_item.innerHTML = `
        <span class='cart-item cart-column'>
        <img class='cart-img' src="${img_src}" alt="">
            <span>${name}</span>
    </span>
    <span class='cart-price cart-column'>${price}</span>
    <span class='cart-quantity cart-column'>
        <input type="text" value="1">
        <button>REMOVE</button>
    </span>`
        const productId = document.createElement('input');
        productId.setAttribute('type','hidden');
        productId.value = prodId;
        cart_item.appendChild(productId);
        cart_items.appendChild(cart_item)

        const container = document.getElementById('container');
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerHTML = `<h4>Your Product : <span>${name}</span> is added to the cart<h4>`;
        container.appendChild(notification);
        setTimeout(()=>{
        notification.remove();
        },2500)
    }
    if (e.target.className=='cart-btn-bottom' || e.target.className=='cart-bottom' || e.target.className=='cart-holder'){
        document.querySelector('#cart').style = "display:block;"
    }
    if (e.target.className=='cancel'){
        document.querySelector('#cart').style = "display:none;"
    }
    if (e.target.className=='purchase-btn'){
        if (parseInt(document.querySelector('.cart-number').innerText) === 0){
            alert('You have Nothing in Cart , Add some products to purchase !');
            return
        }
        alert('Thanks for the purchase')
        cart_items.innerHTML = ""
        document.querySelector('.cart-number').innerText = 0
        document.querySelector('#total-value').innerText = `0`;
    }

    if (e.target.innerText=='REMOVE'){
        const id = e.target.parentNode.parentNode.id;
        const prodId = document.querySelectorAll(`#${id} input`)[1].value;
        console.log(`${prodId} In remove`);

        axios.post('http://localhost:3000/cart-delete-item',{prodId:prodId})
        .then(()=>{
            console.log('In');
            let total_cart_price = document.querySelector('#total-value').innerText;
            total_cart_price = parseFloat(total_cart_price).toFixed(2) - parseFloat(document.querySelector(`#${e.target.parentNode.parentNode.id} .cart-price`).innerText).toFixed(2) ;
            document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)-1
            document.querySelector('#total-value').innerText = `${total_cart_price.toFixed(2)}`
            e.target.parentNode.parentNode.remove();
        })
        .catch((err)=>console.log(err));
    }
})

function showProducts(products){

products.forEach((product)=>{
    const {id,title,price,imageUrl} = product;

    //prodId created for each div
    const prodId = title.split(' ')[0]+id;
    
    const div = document.createElement('div');
    div.setAttribute('id', prodId);

    const h3 = document.createElement('h3');
    h3.append(document.createTextNode(`${title}`));
    div.appendChild(h3);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    const prodImg = document.createElement('img');
    prodImg.src = imageUrl;
    prodImg.classList.add('prod-images');
    imageContainer.appendChild(prodImg);
    div.appendChild(imageContainer);

    const prodDetails = document.createElement('div');
    prodDetails.classList.add('prod-details');
    const span = document.createElement('span');
    span.innerHTML = `$<span>${price}</span>`;
    const addCart = document.createElement('button');
    addCart.innerText = 'ADD TO CART';
    addCart.classList.add("shop-item-button")
    prodDetails.appendChild(span);
    prodDetails.appendChild(addCart);
    div.appendChild(prodDetails);
    const productId = document.createElement('input');
    productId.setAttribute('type','hidden');
    productId.value = id;
    div.appendChild(productId);

    if(title.split(' ')[0]==='Merch')
     merchContent.appendChild(div);
    else
     musicContent.appendChild(div);
})
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('http://localhost:3000/products')
    .then((res)=>showProducts(res.data.products));
    axios.get('http://localhost:3000/cart')
    .then((res)=>{
        showCartItems(res.data);
        // console.log(res.data);
    });
})

