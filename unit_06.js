// function e6() {
//     let str = '';
//     for (let i = 0; i < 3; i++) {
//       for (let k = 0; k <= i; k++) {
//         str += '*';
//       }
//       str += '<br>';
//     }
//     for (let i = 1; i >= 0; i--) {
//       for (let k = 0; k <= i; k++) {
//         str += '*';
//       }
//       str += '<br>';
//     }
  
//     document.querySelector('.out-e6').innerHTML = str;
//   }
  
//   document.querySelector('.b-e6').onclick = e6;


//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочкa рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
    let out = document.querySelector('.out-1');
    let o = '';

    for (let i = 1; i <= 3; i++) {
        for (let k = 1; k <= 3; k++) {
            // out.innerHTML += '*';
            o += '*';
        }
        // out.innerHTML += '_'; 
        o += '_';
    }
    out.innerHTML = o;

}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифру и перенос строки br, внутренний - *_, и после этого внешний - знак переноса.</p>
function t2() {
    let out = document.querySelector('.out-2');
    let o = '';
    for (let i = 1; i <= 3; i++) {
        o += i + '<br>';
        for (let k = 1; k <= 3; k++) {
            o += '*_';
        }
        o += '<br>';
    }
    out.innerHTML = o;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_

// <p>Решить задачу с помощью вложенных циклов. Внутренний цикл выводит *_,  внешний цикл выводит перенос строки br.</p>
function t3() {
    let out = document.querySelector('.out-3');
    let o = '';

    for (let i = 1; i <= 4; i++) {
        for (let k = 1; k <= 3; k++) {
            o += '*_';
        }
        o += '<br>';
    }
    out.innerHTML = o;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*
// Внешний цикл выводит цифру и _, а внутренний выводит от 1 до 5 с *
function t4() {
    let out = document.querySelector('.out-4');
    let o = '';

    for (let i = 1; i <= 3; i++) {
        o += i + '_';
        for (let k = 1; k <= 5; k++) {
            o += k + '*';
        }
    }
    out.innerHTML = o;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 101010
// 101010
// 101010

// <p>Вложенный цикл в зависимости от четного или нет k (счетчика цикла) рисует или 0 или 1. Внешний цикл - br.</p>
function t5() {
    let out = document.querySelector('.out-5');
    let o = '';

    for (let i = 1; i <= 3; i++) {
        for (let k = 1; k <= 6; k++) {
            if (k % 2 == 0) {
                o += '0';
            }
            else {
                o += '1';
            }
        }
        o += '<br>';
    }
    out.innerHTML = o;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 10x01x
// 10x01x
// 10x01x


function t6() {
    let out = document.querySelector('.out-6');
    let o = '';

    for (let i = 1; i <= 3; i++) {
        o += '10x';
        for (let k = 1; k <= 1; k++) {
            o += '01x';
        }
        o += '<br>';
    }
    out.innerHTML = o;

    // for (let i = 1;i <=3;i++){
    //     for (let k = 1; k <=1; k++){
    //         o += '10x01x';
    //     }
    //         o += '<br>';
    // }
    // out.innerHTML = o;

}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *
// **
// ***
// ****

function t7() {
    let out = document.querySelector('.out-7');
    let o = '';
    for (let i = 1; i <= 4; i++) {
        for (let k = 1; k <= i; k++) {
            o += '*';
        }
        o += '<br>';
    }
    out.innerHTML = o;


}
document.querySelector('.b-7').onclick = t7;


//  Task 8
// Per aspera ad astra
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *****
// ****
// ***
// **
// *

function t8() {
    let out = document.querySelector('.out-8');
    let o = '';
    for (let i = 1; i <= 5; i++) {
        for (let k = 5; k >= i; k--) {
            o += '*';
        }
        o += '<br>';
    }
    out.innerHTML = o;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 1_
// 1_2_
// 1_2_3_
// 1_2_3_4_
// 1_2_3_4_5_

function t9() {
    let out = document.querySelector('.out-9');
    let o = '';
    for (let i = 1; i <= 5; i++) {
        for (let k = 1; k <= i; k++) {
            o += k + '_';
        }
        o += '<br>';
    }
    out.innerHTML = o;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

//01_02_03_04_05_06_07_08_09_10_
//11_12_13_14_15_16_17_18_19_20_
//21_22_23_24_25_26_27_28_29_30_
//31_32_33_34_35_36_37_38_39_40_
//41_42_43_44_45_46_47_48_49_50_


function t10() {
    let o = "";
    let out = document.querySelector(".out-10");
    for (let i = 0; i < 5; i++) {
        for (let k = 1; k <= 10; k++) {
            o += (10 * i + k) + "_";
        }
        o += "<br>";
    }
    out.innerHTML = o;
}
document.querySelector(".b-10").onclick = t10;

// if (k <10 && i === 0) {
//  a10 += 0 ;
// }


// TASK 1

// let o = "";
// let out = document.querySelector('.outs-1');
//     for (let i =1;i <= 10;i++){
//         for (let k = 1;k <=10; k++){
//             o += `${i}*${k}=${i*k}<br>`;
//         }
//         o += '<hr>';
//     }
//     out.innerHTML = o;

// TASK 2

// let o = "";
// let out = document.querySelector('.outs-2');
// for (let i = 1;i <=3;i++){
//     for (let k = 1;k <=5;k++){
//         o += '*';
//     }
//     o += '<br>';
// }
// out.innerHTML = o;


// TASK 4

// let o = "";
// let out = document.querySelector('.outs-3');
// for (let i = 1;i<=5;i++){
//     for (let k=5;k >= i;k--){
//         o += '*';
//     }
//     o += '<br>';
// }
// out.innerHTML = o;



// TASK 5

// let o = "";
// let out = document.querySelector('.outs-4');
// for (let i = 1;i <=3;i++){
//     if (i == 1) {
//         o += "&nbsp&nbsp";
//     }
//     else if (i == 2){
//         o += "&nbsp";
//     }
//     for (let k = 1; k <=5;k++){
//         o +='*';

//     }
//     o += '<br>';
// }
// out.innerHTML = o;

// TASK 6
// let o = "";
// let out = document.querySelector('.outs-6');
//     for (let i = 1; i <= 3;i++){
//         for (let k = 1; k <= i;k++){
//             o += '*';
//         }
//         o += '<br>';
//     }
//     out.innerHTML = o;

//     for (let j = 1; j <= 2;j++){
//         for (let v = 2; v >= j; v--){
//             o += '*';
//         }
//         o += '<br>';
//     }
//     out.innerHTML = o;

// TASK 7
// let o = "";
// let out = document.querySelector('.outs-7');

// for (let a = 1;a <=2;a++) {
//     for (let b = 1; b <=6; b++){

    
// for (let k = 1;k <= 3;k++){
//     for ( let i = 2; i <= 3;i ++){
//         o += '*'  + '&nbsp;&nbsp;&nbsp;';
//     }
//     o += '<br>';
// }

//     o += '*';

// }
// }
// out.innerHTML = o;


// let o = "";
// let out = document.querySelector('.outs-7');

// for (let b = 1; b <= 1;b++){

// for (let a = 1; a<= 6;a++){
//   o += '*' ;
// }
//     o += '<br>';
// }
// for (let i = 1; i <= 3; i++ ){
//   for (let k = 1; k <= 2;k++){
//     o +=   '*' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp';
//   }
//   o += '<br>';
// }

// for (let c = 1; c <= 1;c++){

// for (let d = 1; d<= 6;d++){
//   o += '*' ;
// }
//     o += '<br>';
// }
// out.innerHTML = o;


// TASK 8

// let o = "";
// let out = document.querySelector('.outs-8');
// for (let i = 5; i >= 0;i--){
//     for (let k = i; k >= 1 ; k--){
//         o += k + '_';
//     }
//     o += '<br>';
// }
// out.innerHTML = o;

// for (let i = 0; i <= 5; i++) {
//     let str = ""
//     for (let y = 5; y !== 0; y--) {
//      if(i < y) {
//       str += '  '
//      } else {
//       str += y + ' '
//      }
      
//     }
//     console.log(str);
//   }


//   Попробуй console.log(i, j), тебе нужно понять принцип

// TASK 9

// let o = "";
// let out = document.querySelector('.outs-9');
// for (let i = 1; i <= 5; i++){
//     for (let k = i; k <=5;k--){
//         o += k + '_';
//     }
//     o += '<br>';
// }
// out.innerHTML = o;

// TASK 10

// TASK 11
// TASK 12
// TASK 13

// let o = "";
// let out = document.querySelector('.outs-13');
// for (let i = 1; i<=3;i++){
//     if (i == 1){
//         o += '&nbsp;   *****';
//     }
//     else if (i == 2){
//         o += '&nbsp;*******';
//     }
//     else if ( i == 3) {
//         o += '*********';
//     }
//     o += '<br>';
// }
// out.innerHTML = o;


// let o = "";
// let out = document.querySelector('.outs-13');
// for ( let i = 1; i <= 3;i++){
    
// }
// out.innerHTML = o;


