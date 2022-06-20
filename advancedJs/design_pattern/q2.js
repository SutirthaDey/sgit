// // this inside global scope



// this.table = 'Inside window-table'

// console.log(this.table)





// // this inside object



// this.garage = {
//     table: 'garage table',
//     cleanTable(){
//         console.log(`This is ${this.table}`);
//     }
// }

// this.garage.cleanTable();





// // this inside function




// function cleanTable(){
//     console.log(`This is ${this.table}`);
// }

// cleanTable.call(this.garage);




// // this inside inner function




// function cleanTable(){
//     const innerFunction =()=>{
//         console.log(`This is ${this.table}`);
//     }

//     innerFunction();
// }


// cleanTable.call(this.garage);




// // this inside class 




// class createRoom{
//     constructor(name,table){
//         this.name = name;
//     }

//     cleanTable(){
//         console.log(`This is ${this.name}'s table`);
//     }
// }

// const room1 = new createRoom('room1');
// const room2 = new createRoom('room2');

// room1.cleanTable();
// room2.cleanTable();


