/*

Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */


console.log ('');
console.log ('13 задание');

const products123 = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];

const getAllPropValues = function(arr, prop) {
    let gg= [];

      for (let i=0; i<arr.length; i++){

        if (arr == undefined || arr[i][prop] == undefined){
        break;
          
        }

        else 
        gg.push(arr[i][prop]);
        
      }

    return gg;
};


console.log(getAllPropValues(products123, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products123, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products123, 'category')); // []