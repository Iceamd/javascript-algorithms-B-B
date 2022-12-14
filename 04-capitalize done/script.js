/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    const mas = str.split(' '); 
    const res=[];
    
    mas.forEach(function(word){
      let firstLetter = word.slice(0,1);
      res.push(firstLetter.toUpperCase() + word.slice(1) );
    })

    return res.join(' '); 
  }
// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"