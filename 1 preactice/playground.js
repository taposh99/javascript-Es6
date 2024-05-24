// // function number() {
// //     return 10;
// // }
// // console.log(number());


// // let number = (a ,b)=> {
// //     return a +b;
// // }
// // console.log (number(10,5));

// // var javascript = {
// //     name:"javascript",
// //     library:["react","vue","laravel"],
// //     printlib: function(){
// //         this.library.forEach((a) => console.log(`${this.name} loves ${a}`));
// //     },
// // };

// // javascript.printlib();

// // var myvar = [];
// // if (!myvar){
// //     console.log("i am turity");
// // } else{
// //     console.log("i am false")
// // }
// // var age = 10;

// // var type = age >= 18 ? "adult" : age > 10 ? "young" : "child";
// // console.log(type);



// // var age = 10;

// // var type = age < 18;
// // console.log(type);

// // var number = [1,2,3,4,5,6,7,8,9,10];
// // const arr = [[1, 2, 3, 4,  5, 6, 7, 8, 9, 10], [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]];


// // var result = (arr,index)=>{
// //     let index = [];
// //     let value = []; 
// //     for(let i = 0; i < arr.length; i++) {
// //         value += arr[i];
// //         index += i;
// //     }
// //     return `${index},and ${value}`;

// // // console.log(index);
// // // console.log(arr);
// // //return currentvalue > 5 ;
// // };

// // // console.log(result(6, index, arr));
// // console.log(result(arr));

// const sani = [1, 'a', 'Hello', 2+3];

// const result = sani.filter(item => typeof item === 'boolean');
// console.log(result);


// const array = [2, -2, -1, 0, 5];

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num >1;
// }

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(3));

// console.log(animals.slice(2, 4));

// console.log(animals.slice(1, 5));

// console.log(animals.slice(-2));

// console.log(animals.slice(2, -1));

// console.log(animals.slice());

// const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];

// const newCityArr = cities.slice(2);

// console.log("Original: ", cities)
// console.log("New: ", newCityArr)

// let number = [1,2,3,4,5,6,7,8,9,10];

// result =number.map((num) =>
// {
//  return num * 2;
// }
// );
// console.log(result);

//  for (i = 0; i<=5;i++){

//     console.log(i);
//     if(i==5){
//         return "right"
//     }
//     else{
//         break
//     }
// }
// console.log(i);

// const myobj = {
//     name :"java",
//     email :"java@gmail.com",
//     pass :"12343456",
// }

// for ( property in myobj) {
//    console.log(property + " "+ "hello");
// }
// let language = "10";

// let text = '5';
// for (let x of language) {
//   text =   text + x;

// }

// console.log(text);
// let z;
// function test(z){
//     return  z = 10 + 10 ;
// }
// console.log(test(z));

// spread operator

// let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// // let newnumber= [1,2,3,4,5,6,7]

// console.log(... number);

// var myobj = {
//     x : 1,
//     t : 2,
// }
// var myobj2 = {

//     y: 1,

//     z: 2,
// }

// console.log(
//     { ...myobj, ...myobj2});

// Template Literals


// var a = "sani";
// var b = "haque";

// console.log(`My name is ${a} and my last name is ${b}`);

// for (let x = 0; x <= 10; x++) {
//     console.log(`${x}`);
// }


// var a = 10;


// if (a < 5) {
//     console.log("it is roght");
// } else if (a === 10) {
//     console.log("it is 10");
// } else {
//     console.log("it is wrong");
// }

// Nested If Statement


// var age = 16;


// if ((age < 18) && (age > 12)) {
//     console.log("he is tenneager");
// } else {
//     console.log("he is child");
// }