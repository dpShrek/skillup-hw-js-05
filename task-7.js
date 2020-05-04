/*

Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.

Данное задание выполните после того как познакомитесь с методами массивов:

changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

*/


console.log ('');
console.log ('7 задание');



let mas7t = [[1,2,3], ['a', 'b', 'c'],[1,2,3], ['a', 'b', 'c']];
let NewMas= [];
function changeCollection () {
    for (let i = 0; i <= mas7t.length-1; i++){
        
        mas7t[i].shift();
        NewMas.push(mas7t[i])
    }
    console.log(NewMas);
    

}
changeCollection();