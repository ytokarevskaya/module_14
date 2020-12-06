function pageLoaded(){
    let input=document.getElementById("input");
    let button=document.getElementById("button");
    let output=document.getElementById("output");

    button.addEventListener("click", sendRequest);
    function sendRequest(){
        let xhr = new XMLHttpRequest();
        if (input.value>0 && input.value<10){
            writeOutput();
        }
        else {
            xhr.open("GET", `https://picsum.photos/v2/list?limit=${input.value}`); // Ошибка в синтаксисе: значение подставлено неверно. Не хватает знака $
            xhr.send();
            // Нет обработки ответа от сервера и вывода полученных изображений на страницу. Всё это должно быть в обработчике xhr.onload = function() {...}
        }
    }
    function writeOutput() {
        output.innerText = 'число вне диапазона от 1 до 10';
    }
}
document.addEventListener("DOMContentLoaded", pageLoaded);