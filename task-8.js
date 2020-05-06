/*

Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять.

Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

Данное задание выполните после того как познакомитесь с методами массивов

funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

*/


console.log ('');
console.log ('8 задание');

let obj8t = [ {name: 'Denis', age: '29', gender: '444'} , 
              {name: '6767', age: '20', gender: 'male'} ,
              {name: '444', age: '20', gender: '444'} ,
              {name: '557855', age: '20', gender: 'male'} ];

newobj8t =[];



function tt11 (obj, key, znach) {
   
    for (i=0; i<=obj.length-1; i++){

        let keysys = Object.keys(obj[i]);
        let maleee = Object.values(obj[i]);
       
            if (keysys.indexOf (key)>0 && maleee.indexOf (znach)>0) {
                newobj8t.push (obj[i])
            } 
    }
    
    console.log(newobj8t);
    
}

tt11 (obj8t, 'gender', 'male');


