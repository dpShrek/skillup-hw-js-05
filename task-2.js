/*

Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.  

*/

console.log ('');
console.log ('2 задание');


function reverseString (cba) {
    let cba2 = '';
    for (let i = cba.length-1; i >= 0; i--){
        cba2 += cba[i];
        
    }
    console.log (cba2);
    };
    
    reverseString ('любой текст перевернет');