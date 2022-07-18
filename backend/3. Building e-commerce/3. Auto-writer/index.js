const text = 'This is auto-writer!!!!';

let index = 0;

function autoWriter(){
    document.body.innerText = text.slice(0,index);
    index++;

    if(text.length < index)
     index = 0;
}

setInterval(autoWriter,100);