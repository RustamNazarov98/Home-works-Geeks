// ------------------------------- 1 задание --------------------------------

// let arr = [10, 20, 30, 50, 235, 3000, 5000];

// for(let i = 0; i < arr.length; i++){
//     let num = String(arr[i]);
//     let str = num[0]
//     if(str[0] === '1' || str[0] === '2' || str[0] === '5')
//     console.log(num); 
// }


// ------------------------   2 задание --------------------------
// for(let i = 20; i >= 0; i-- ) {
//     console.log(i);
// }


// ---------------------------- 3 задание ------------------------------

// let color = {
//     red:'красный',
//     yellow:'желтый',
//     green:'зеленый'
// }
// let sayColor = prompt("НАПИШИТЕ ЦВЕТ СВЕТОФОРА!!!")


// if(sayColor === color.green) {
//     alert('можно идти')
// }else if (sayColor === color.yellow ){
//     alert('готовьтесь')
// }else if (color.red === sayColor){
//     alert('стоп')
// }else {
//     alert('введите только цвета')
// }


// switch(sayColor) {
//     case color.green: alert('можно идти');
//     break;
//     case color.yellow:alert('готовьтесь');
//     break;
//     case color.red:alert('стоп');
//     break;
//     default:
//         alert('введите только цвета')
// }


// ------------------- 4 задание -----------------------
let arr = []

for(let i = 0; i <=10; i++) {
    arr.push(i)
    console.log(arr[i]);
    console.log(arr);
   
}

