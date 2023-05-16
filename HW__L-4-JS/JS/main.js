// =================================          1        =========================================
// let inc = document.querySelector('.inc');
// let text = document.querySelector('.text');
// let dec = document.querySelector('.dec');
// let i = 0;
// text.innerHTML = i;
// let plus = inc.onclick = () => {
//     text.innerHTML = i++;
//     text.style.color = 'green'
// }
// dec.onclick = () => {
//     if (i === 0){
//         return 0
//     }  
//     text.innerHTML = --i;
//     text.style.color = 'red'   
// }

// =================================          2        =========================================
// let btn = document.querySelector('.btn')
// let win = document.querySelector('.window')
// btn.onclick = () => {
//    let sms =  prompt('');
//    win.innerHTML = sms;
// }


// =================================          3       =========================================
let btn = document.querySelector("#btn");
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
let text = document.querySelectorAll('.text');

btn.onclick = () => {
    let sayColor = prompt('введите цвет').toLowerCase()
    if (sayColor === "красный" || sayColor === "red") {
        red.style.backgroundColor = 'red';
        red.innerHTML = 'stop'

    }else if (sayColor === "желтый" || sayColor === "yellow") {
        yellow.style.backgroundColor = 'yellow';
        yellow.innerHTML = 'wait'
    }else if (sayColor === "зеленый" || sayColor === "green") {
        green.style.backgroundColor = 'green';
        green.innerHTML = 'go'
    }else {
       alert('введите корректный данные')
    }
}