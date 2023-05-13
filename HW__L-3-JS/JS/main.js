//==================   1 задание ===================

// let type = (a) => console.log(typeof a);
//  type(true)

// ================= 2 задание =====================

// let calc = () => {
//     let a = Number(prompt('введите первое число'));
//     let b = Number(prompt('введите второе число'));
//     let c = prompt('введите действие (+ ; - ; / ; *)');
//     if (c === "-") {
//         alert(a - b)
//     }else if (c === "+"){
//         alert(a + b)
//     }else if (c === "/"){
//         alert(a / b)
//     }else if (c === "*"){
//         alert(a * b)
//     }else {
//         alert('введите правильные математические значения')
//     }
// }

// calc()


// ================= 3 задание =====================

let arr = [1, 5, 8, 6, 15, 2, 9]
function binarySearch(arr, key){
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (arr[middle] === key) {
            return middle;
        } else if (arr[middle] < key) {
            start = middle + 1;
        } 
        else if (key > arr[middle]){
            end = middle - 1;
        }
    }
}
console.log(binarySearch(arr, 9))