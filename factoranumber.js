// create function and set argument for number 
function factor(number) {
    // set the factors to an empty array 
    let factors = [];
    // for lex x equal the number called , 
    // x is greater or equal to zero
    // and x will increment once everytime
    for (let x = 0 ; x <= number; x++) {
        // if it can be equally divied into a number then x is a factor 
        if (number % x === 0) {
            // if SourceBuffer, push it to the end of my empty array list 
            factors.push(x);
        }
    }
    // return the array with all the new numbers in it 
    return factors;
}
// call function and return results of 8
console.log(factor(8));