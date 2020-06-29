// // Create variable with my name
// let name = 'Hafeeza'
// //Create const with the number of states 
// const states = 50 
// //Compute the results of adding 5 & 4

// function add (x,y) {
//     console.log(5 + 4)
 
// }
// add()
// //Write a function sayHello that displays an alert "Hello World!"
// function sayHello(){
//     alert("Hello World!")
// }
// sayHello()
//Write function checkAge 
function checkAge(name, age){
    if ( age <= 20){
alert(`Sorry ${name}, you aren't old enough to view this page!`)
    } 
}
// checkAge('Charles', 21)
// checkAge('Abby', 27)
// checkAge('James', 18)
// checkAge('John', 17)

// //Create an array of favorite veggies 
//  let vegArray = ['potatoes', 'green beans', 'squash', 'bell pepper']

//  for (let i = 0; i < vegArray.length; i++) {
//    console.log(vegArray[i])
     
//  }

 let pet = {
     name: 'Braylon',
     breed: 'Pekingnese'
 }
 console.log(pet)

 let ageArray = [{
     name: 'Glenda',
     age: 27
 },
{name: 'Brandon',
age: 35
},
{ name: 'Brittany',
age: 30 },
{
    name: 'Jaycee', 
    age: 17
},
{
    name: 'Caden',
    age: 19
}

] 
for (let index = 0; index < ageArray.length; index++) {
    console.log(ageArray[index])
} 
    checkAge(ageArray)

    function getLength(word) {
        if(word.length % 2 == 0){
            return('The world is nice and even')
        } else {
            return('The world is an odd place')
        }
    }
    console.log(getLength('hello worlds'))