// 1. Use of call function on obj



const obj = {num:2}



function addValues(a,b,c){

  console.log(this.num + a + b + c);

}



addValues.call(obj, 10, 20, 30);









// 2. Use of apply function on obj



const arr = [10,20,30];



function addValues(...arr){

  let sum = 0;

   

  for(let i = 0 ; i<arr.length; i++)

    sum = sum + arr[i];

     

  console.log(this.num + sum);

}



addValues.apply(obj, arr);




// 3. function using bind



function addValues(a,b,c){

  console.log(this.num + a + b + c);

}



const bound = addValues.bind(obj);

bound(10,20,30);



// 4.



const student = {age: 20}



function printAge(){

  console.log("Age is:",this.age);

}



const print = printAge.bind(student);



print();

