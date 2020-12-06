

function pageLoaded(){
    let inputWidth=document.getElementById("inputWidth");
    let inputHeight=document.getElementById("inputHeight");
    let button=document.getElementById("button");
    let output=document.getElementById("output");

    button.addEventListener("click", sendRequest);
    function sendRequest(){
        let requst=`https://picsum.photos/${inputWidth.value}/${inputHeight}`;
        if (inputWidth.value>100 && inputWidth.value<300 || inputHeight.value>100 && inputHeight.value<300 || isNaN(+inputHeight.value) || isNaN(+inputWidth.value) ||inputWidth.value==="" ||inputHeight.value===""){
            writeOutput();
        }
        else fetch(requst);
        // Запрос отправляется, но нет обработки ответа и вывода результата на страницу
    }
    function writeOutput() {
        output.innerText = 'одно из чисел вне диапазона от 100 до 300';
    }

}
document.addEventListener("DOMContentLoaded", pageLoaded);