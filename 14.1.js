/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
//console.log('parser', parser);

// XML, который мы будем парсить
const xmlString = `
  <list>
    <student>
        <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
        </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>
`;
/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector("list");
const studentNode = xmlDOM.querySelectorAll("student");
let result = {
  list: []
};

for(let i=0;i<studentNode.length;i++){
    const nameNode = studentNode[i].querySelector("name");
    const firstNameNode = studentNode[i].querySelector("first");
    const secondNameNode = studentNode[i].querySelector("second ");
    const ageNode = studentNode[i].querySelector("age");
    const profNode = studentNode[i].querySelector("prof");
    const langAttr = nameNode.getAttribute('lang');
    result.list.push({
        lang: langAttr,
        first: firstNameNode.textContent,
        second: secondNameNode.textContent,
        age: ageNode.textContent,
        prof: profNode.textContent,
    });
}

console.log(result);

// Почти правильно, но чтобы результат полностью соответствовал условию, информация о студентах должна содержаться в 1-м объекте (не в 2-х разных), а точнее, в его свойстве list. Выше исправила