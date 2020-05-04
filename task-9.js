/*

Напиши скрипт, который, для объекта user, последовательно:

добавляет поле mood со значением 'happy'
заменяет значение hobby на 'skydiving'
заменяет значение premium на false
выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

*/


console.log ('');
console.log ('9 задание');


const user8 = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };


  user8.mood = 'happy';
  user8.hobby = 'skydiving';
  user8.premium = false;
 
  var obj = { 'France': 'Paris', 'England': 'London' };
// Iterate over the property names:
for (let inz of Object.keys(user8)) {
    var capital = user8[inz];
    console.log(inz, capital);
}
