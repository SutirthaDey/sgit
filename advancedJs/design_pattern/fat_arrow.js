// We use fat arrow function because fat arrow function has no this for itself, it only tries to 
// to access the this of it's closest parent's this.

class Student{
    static count = 0;
    constructor(name,age,phone_number,marks)
    {
        this.name = name;
        this.age = age;
        this.phone_number = phone_number;
        this.marks = marks;
        Student.count = Student.count + 1;
    }

    ifEligible(){
        return this.marks> 40 ? true : false;
    }

    egligible(minimumMarks){
        return (minimumAge)=>{
            return this.age>minimumAge && this.marks>minimumMarks ? true : false;
        }
    }
}

let ram = new Student('Ram','13','9091',60);
let shyam = new Student('Shyam','14','9092',30);
let suraj = new Student('Suraj','15','9093',80);
let vicky = new Student('Vicky','16','9094',60);
let nikhil = new Student('Nikhil','17','9095',70);

console.log(ram.egligible(50)(15));
console.log(shyam.egligible(50)(15));
console.log(suraj.egligible(50)(15));
console.log(vicky.egligible(50)(15));
console.log(nikhil.egligible(50)(15));
