/*

Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (123)

Если нет ни одного аргумента, вернуть ноль: multiply() // 0

*/


console.log ('1 задание');

function multiply() {
    var result = 1  ;
  
    for (var i = 0; i < arguments.length; i++) {
      result *= arguments[i];
    }
  
    return result;
  }
  
  console.log (multiply (1,2,3,5));