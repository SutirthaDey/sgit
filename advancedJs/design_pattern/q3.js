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
}

let ram = new Student('Ram','13','9091',60);
let shyam = new Student('Shyam','14','9092',30);
let suraj = new Student('Suraj','15','9093',80);
let vicky = new Student('Vicky','16','9094',60);
let nikhil = new Student('Nikhil','17','9095',70);
console.log(`Total number of students are : ${Student.count}`);