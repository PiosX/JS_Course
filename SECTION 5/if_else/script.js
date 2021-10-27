const pass = 's12!3njsa4fsf';

if(pass.length > 10 && pass.includes('!')) {
    console.log('Masz rewelacyjne hasło.');
} else if(pass.length > 10) {
    console.log('Masz dobre hasło.');
} else {
    console.log('Masz za krótkie hasło.');
}

// const color = 'blue';

// if(color == 'blue') {
//     if(10>0) {
//         console.log('true true');
//     } else {
//         console.log('okokok');
//     }
// } else {
//     console.log('false');
// }
