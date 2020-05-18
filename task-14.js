
/*Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).

Вызовы функции для проверки работоспособности твоей реализации.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProdcuts, productName) {
  // твой код
};

Вызовы функции для проверки работоспособности твоей реализации.
 
*/




console.log ('');
console.log ('14 задание');


const products11 = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];
  
  const calculateTotalPrice = function(allProdcuts, productName) {
      for (let i=0; i<allProdcuts.length; i++){   
        if (allProdcuts && allProdcuts[i].name == productName) {
          return ((allProdcuts[i].price) * (allProdcuts[i].quantity));
        }
       
      }
    
  };

console.log(calculateTotalPrice(products11, 'Радар')); // 5200

console.log(calculateTotalPrice(products11, 'Захват')); // 2800