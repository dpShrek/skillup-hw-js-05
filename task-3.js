/*

Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:

getCodeStringFromText(‘hello’) // “104 101 108 108 111”

подсказка: для получения кода используйте специальный метод

*/


console.log ('');
console.log ('3 задание');


var abcC = "Hello my Frend";

function getCodeStringFromText(abc) {
    let n = '';
    let m = [];
        for (let i=0; i<=abc.length-1; i++) {
        n = abc.charCodeAt(i);
        m.push(n);
    }
    console.log(m.join(' '));
};

getCodeStringFromText(abcC);