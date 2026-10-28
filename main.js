// Nested Function Scope
/*Nested functions have access to variable declared in their own scope as well as outer scope */

// let a = 10
// let b = 20
// function outer() {
//     function inner() {
//         let c = 30
//         // console.log(a, b, c)
//     } inner()
// } outer()


// // Object person
// // Car
// // House

// // Walk
// // Drive
// const pen = "Bic"
// const distance = 20
// const Person = {
//     personName: "Codem",
//     car: "Mazda CX5",
//     house: "1 Bedroom Apartment",
//     drive: function(distance) {
//         console.log(this.personName + " Drove for " + distance + "km inside his new " + this.car + " to get a " + pen + " pen inside his " + this.house)
//     }
// }
// Person.drive(distance)

//----------------------------------------------------------
// Closure
/*A closure is a combination of a function bundled together with references to its surrounding state. Closures are created every time a function is created, at functio creation time */

function outer() {
    let counter = 0
    function inner() {
        counter++
        console.log(counter)
    }
    return inner
}
const fn = outer()