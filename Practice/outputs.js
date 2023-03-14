// function func1(){
//     setTimeout(()=>{
//       console.log(x);
//       console.log(y);
//     },3000);
  
//     var x = 2;
//     let y = 12;
//   }
//   func1();

//   function func2(){
//     for(var i = 0; i < 3; i++){
//       setTimeout(()=> console.log(i),2000);
//   }
//   }
//   func2();

//   (function(){
//     setTimeout(()=> console.log(1),2000);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     console.log(4);
//   })();

// let a = 1;
// let b = true;               // false - represented as 0 ------------- true - represented as 1
// console.log(typeof(a));
// console.log(typeof(b));
// console.log((a == b));
// console.log((a === b));

// let arr=[]                       // Checking whether Array or Not
// if (Array.isArray(arr)) {
//     console.log(`Array`);
// }else{
//     console.log(`Not an Array`);
// }


// let arr=[0,1,2,3,4,5,6,7,8,9]       // Empty an Array
// console.log(arr);
// arr.splice(0,arr.length)
// console.log(arr);


// function isInt(num) {               // Checking whether integer or not
//     if (num%1===0) {
//         console.log(`${num} : is an Integer`);
//     }else{
//         console.log(`${num} : is not an Integer`);
//     }
// }
// isInt(20)
// isInt(20.56)


// function closure(NUM){
//     return function(n){
//         console.log(NUM+n);
//     }
// }

// let add=closure(10)
// add(15)
// add(-5)


/* Problem
Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 
and "fizzbuzz" at multiples of 3 and 5.

Answer
Check out this version of FizzBuzz:
*/
// for (let i = 1; i <= 100; i++) {
//   let f = i % 3 == 0,
//     b = i % 5 == 0;
//   console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
// }

//Closure
function mul(a) {
    return function(b){
        return a*b
    }
}
console.log(mul(10)(5));

