// var age=25;

// if(true){
//     console.log(age);
// }


// let age=25;

// function drive(){
//     const age=4;
//     if(age<18){
//         console.log("Cant drive");
//     }
// }
// drive();
// if(age>20){
//     console.log("Can drive");
// }
// Objects

// let person={
//     name:"Piyush",
//     age:19,
//     country:"India",
//     message: function(){
//         console.log("Hello ,my name is "+this.name);
//     }
// };

// console.log(person.name);

// person.name="Nihar";

// console.log(person.name);
// //adding new property
// person.hungry=true;

// console.log(person.hungry);
// //delete
// delete person.country;
// console.log(person.country);
// person.message();

//Arrays


// let fruits = ["Apple", "Banana", "Orange"];

// fruits.push("Kiwi");

// fruits.unshift("Grapes");

// console.log(fruits);

// Output : [ 'Grapes', 'Apple', 'Banana', 'Orange', 'Kiwi' ]


// function add(x,y){
//     let result= x+y;
//     return result;
// }
// console.log(add(5,3));

//Day 2 chatgpt hw

//check prime number

let num=10;
let p= true;
function checkprime(){
    for(let i=2;i*i<num;i++){
        if(num %i ==0){
            p=false;
            break;
        }else{
            continue;
        }
    }
    if(p==true){
        console.log("it is a prime numbrer");
    }else{
        console.log("It is not a prime number");
    }
}
checkprime();