/*

Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

const countProps = function(obj) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.

 */




let gggg = { mail: 'poly@mail.com', isOnline: true, score: 500 };


console.log ('');
console.log ('10 задание');

function countProps (argyment) {
    
    let counter = 0;
        for (let i in argyment) {
            counter++;
}

console.log( "Всего свойств: " + counter );
        
}


countProps({}); // 0

countProps({ name: 'Mango', age: 2 }); // 2

countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // 3

