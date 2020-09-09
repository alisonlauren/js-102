// ### Print a Banner

// Write a function printBanner which is given 
// some text and prints a banner with a border 
// surrounding the text. The border has to stretch 
// to the length of the text.

// ```js
// printBanner('Welcome to DigitalCrafts');
// ```

// ```
// ***************************
// * Welcome to DigitalCrafts *
// ****************************
// ```

// call function, and set parameter as just the text 
function printBanner(text) {
    // print the first row of the banner 
    // a * multiplied by the length of the text
    // plus 4 the 2 borders and two spaces
    console.log('*'.repeat(text.length + 4))
    // log the tect plus its border 
    console.log('* ' + text + ' *')
    // log the same thing as the first line again 
    console.log('*'.repeat(text.length + 4))

}
printBanner("Welcome!")