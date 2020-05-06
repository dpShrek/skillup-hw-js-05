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
 
function skript () {
  if (user8.mood == '') user8.mood = 'happy';
   else user8.mood = 'happy';

  if (user8.hobby == 'html') 
      user8.hobby = 'skydiving';

  if (user8.premium == true) 
      user8.premium = false;
  
 

for (let inz of Object.keys(user8)) {
    let capital = user8[inz];
    console.log(inz, capital);
}
}
skript ();