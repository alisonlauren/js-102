// // Write a function printNumbers which is given
//  a start number and an end number. It will print 
//  the numbers from one to the other, one per line:

// // ```js
// // printNumbers(1, 10);
// // ```

// // ```
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6
// // 7
// // 8
// // 9
// // 10
// // ```

let count = 1;
while (count <= 10) {
    console.log(count);
    count++;
}

function printNumbers(start, end) {
    for (let numbers = start; numbers <= end; numbers ++) {
        console.log(numbers);
    }
}
printNumbers(1,10)

function printNumbersW(start,end) {
    let numbers = start;
    while (numbers <= end) {
        console.log(numbers);
        numbers++;
    }
}

printNumbersW(1,10)