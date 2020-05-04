/*

Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

Данное задание выполните после того как познакомитесь с методами массивов.

*/


console.log ('');
console.log ('5 задание'); 

let NewMass = []; 

function getArray (intChar) {

    for (let i = 1; i <= intChar; i++) {
        NewMass.push(i);
        
    }
     console.log(NewMass);
    
}

getArray (10);