// "use strict"; використовуєм строгий режим, який не дає можливості використовати старі методи коду
"use strict";

// a = 15;
// console.log(a)

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;


// const storeName = "Gravity";
// const storeDiscription = {};
// storeDiscription['budget'] = 10000;
// storeDiscription['employees'] = ['Jack', 'Nick', 'Tony'];
// storeDiscription['products'] = {
//     aplle: 100,
//     banana: 150
// };
// storeDiscription['open'] = true;

// console.log(storeDiscription);

// const result = confirm("Are you here?");
// console.log(result);

// const answer = [];
// answer[0] = prompt("What you firstname?", "");
// answer[1] = prompt("What yuo lastname?", "");
// answer[2] = prompt("How old are you?", "");

// console.log(typeof(answer));

// const firstName = "Ivan";

// console.log(`My name is ${firstName}`);

// const hamburger = 0;
// const fries = null;
// const cola = 0;
// const nuggets = 2;

// if(hamburger === 3 && cola === 2 || fries === 3 && nuggets){
//     console.log("Всі раді");
// }else {
//     console.log("Ми йдем")
// }

// console.log( NaN || 2 || undefined );
 
// console.log( NaN && 2 && undefined );
 
// console.log( 1 && 2 && 3 );
 
// console.log( !1 && 2 || !3 );
 
// console.log( 25 || null && !3 );
 
// console.log( NaN || null || !3 || undefined || 5);
 
// console.log( NaN || null && !3 && undefined || 5);
 
// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }

// let num = 50;

// // while (num < 60) {
// //     console.log(num);
// //     num++;
// // }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 60);

// for (let i = 1; i < 10; i++) {
//     if(i === 6 ){
//         break;
//     }
//     console.log(i);
// }

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++){
//     for (let j = 0; j < i; j++){
//         result += "*";
//     }
//     result += '\n';
// }
// console.log(result);

// for (let i = 5; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 20; i >= 10; i--) {
//     console.log(i);
//     if(i === 13) {
//         break;
//     }
// }

// for (let i = 2; i <= 10; i++){
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }

// let num = 2;
// while(num <= 16){
//     num++;
//     if (num % 2 === 0) {
//         continue;
//     }
//     console.log(num);
// }
    
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }else {
//         console.log(i);
//     }
// }

// let arr = [];

// for (let i = 5; i <= 10; i++) {
//     arr.push(i);
// }
// console.log(arr);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i <= arr.length; i++) {
//     result[i] = arr[i];
// }

// console.log(result);

// let arr = [5, 10, 'Shoping', 20, 'Homework'];

// for (let i = 0; i < arr.length; i++) {
//     if(typeof(arr[i]) === Number){
//        arr[i] = arr[i] * 2;
//     } else if (typeof(arr[i]) === 'string') {
//         arr[i] = `${arr[i]} - done`;
//     }
// }

// console.log(arr);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//     }
// }

// console.log(data);

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

