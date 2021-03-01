// var n = 2;
// function square(num) {
//     var ans = num * num;
//     return ans;
// }
// var square2 =  square(n);
// var square4 =  square(4);
// console.log(n, square2, square4);

// Hoising in Javascript

// P!
// var x = 7;
// function getName() {
//     console.log("Hello")
// } 
// console.log(x);
// getName();

// P2 
// console.log(x);
// getName();
// var x = 7;
// function getName() {
//     console.log("Hello")
// } 

// P3 => not defined error
// console.log(x);
// getName();
// function getName() {
//     console.log("Hello")
// }
 
// P4 
// getName();
// console.log(x);
// console.log(getName)
// var x = 7;
// function getName() {
//     console.log("Hello")
// }

// P6 getName2 another declation 
console.log(x);
console.log(getName)
console.log(getName2)
var x = 7;
var getName = () => {
    console.log("Hello")
}
var getName2 = function () {
    console.log("Hello")
}
console.log(x);
console.log(getName);
console.log(getName2);
getName();