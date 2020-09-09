// ## Print a Square

// Write a function printSquare which is given a 
// size and prints a square of that size using asterisks.

// ```js
// printSquare(5);
// ```

// ```
// *****
// *****
// *****
// *****
// *****
// ```

// functiong called printaFOX, set one parameter of size
// since height/width will be same on square
function printaFOX(size) {
    // setting up for loop, x is equal to size,
    // x is greater than 0, and x decrements everytime
    for (let x = size; x > 0; x--) {
        // print the fox and repeat as long as size is true
        console.log('🦊'.repeat(size))
    }
}
// calling the function
printaFOX(5);

// creating function, printaFOX, setting width and height
function printFox(width, height) {
    // setting up our box pieces
    const char = '🦊';
    // setting two spaces because emojis are extra big
    const space = '  ';
    // setting up loop to start at 1 and go until height rule is met
    for (let y = 1; y <=height; y ++) {
        // if we are on the first or last row
        if (y == 1 || y == height) {
            // log the border as many times as the width
            console.log(char.repeat(width))
        } else {
            // log the border oncuechange, repeat on the insides
            // for as many times as the width minus the two borders
            // Chars, and then another border charachter
            console.log(char + space.repeat(width -2) + char)
        }
    }
}

// call the function 
printFox(6, 4);