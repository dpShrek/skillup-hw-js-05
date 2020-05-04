/*

Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять.

Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

Данное задание выполните после того как познакомитесь с методами массивов

funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

*/


console.log ('');
console.log ('8 задание');

let obj8t = [ {name: 'Denis', age: '29', gender: 'male'} , 
              {name: 'Ivan', age: '20', gender: 'male'} ];

              console.log(obj8t[0]['gander']);

              /*
function funcGetUsers (obj, kay, znach) {
        for (let i = 0; i<=obj.length; i++ ) {
    if (typeof obj[i]['key'] == kay && typeof obj[i]['kay']['znach'] == znach) {
        console.log('есть все даные')
        }else{
            console.log('нету всех данных')
        }
    }
};

funcGetUsers (obj8t, 'gender', 'male');*/