// console.log("Hello world!");

// var myCar = 'Lanos'

// if (myCar = 'Lanos') {
//     console.log("ЛАНОС")
// }

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ланос чи мерс?', (q1) => {
    if (q1.toLowerCase() === "ланос") {
        console.log("топ пацан");
    } else {
        console.log("Не ланос, але теж непогано");
    }

    rl.close();
});

// rl.on('close', () => {
//     console.log('Програма завершила роботу.');
//     process.exit(0);
// });



