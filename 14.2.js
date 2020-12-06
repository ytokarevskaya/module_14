/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
  {
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
// console.log('jsonString', jsonString);

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
console.log('data', data);

// Всё, что ниже этой строчки - можно не писать :) JSON.parse сразу возвращает валидный JS-объект, который и является ответом на задачу


// const list = data.list;
// console.log('list', list[0]);

// for (let i=0; i<list.length;i++){
//     const result={
//         name:list[i].name,
//         age:list[i].age,
//         prof:list[i].prof
//     }
//     console.log('result', result);
// }


