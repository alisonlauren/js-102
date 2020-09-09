// calling function with 2 arguements, string and offset 
function cipher(string, offset) {
    // setting up an empty string to store our ciphered string in  
    let caesar = ' ';
    // set up two alphabets, upper and lower 
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";     
    const alpha = "abcdefghijklmnopqrstuvwxyz" ;

    // go through each charachter in the string, moving upwards through the string 
    for (let x = 0; x < string.length; x++) {
        // get the current charachter 
        const char = string[x];
        // find the index of the current charachter in the alphabet 
        const index = alpha.indexOf(char);
        const upperIndex = upper.indexOf(char);
        // if the charachter is not in either alphabet, just use the original charachter 
        if (index === -1 && upperIndex === -1) {
            caesar += char;
            // if the charachter is in the lower case alphabet... 
        }   else if ( index !== -1) {
            // get the new position of the offset letter ,
            // char is printFox, then inxed will be 15, if the offset is 13
            // then the position will be 2 because thats the difference after 26 letter
            const position = (index + offset) % 26;
            // add the ciphered charachter to the caeser string 
            caesar += alpha[position];
            // if it wasn't in the lower, it must be an upper 
            }
        }   else {
            // do the same as above, but for the uppercase alphabet
            const position = (upperIndex + offset) % 26;
            caesar += upper[position];
          }
        
      
        // return the ciphered string
        return caesar;
      }

console.log(cipher("Genuis without education is like a silver in the mine", 13));