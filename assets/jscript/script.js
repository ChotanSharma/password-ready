// Assignment code here

// function to get user input for the password length
var rangeOfPassword = function() {
    var range = parseInt(window.prompt("Please, enter a value between 8 and 128"));
    // use of conditional statement for a valid response
    if(range < 8 || range > 128) {
        window.alert("Your input is invalid. Please, enter a valid value.");
        // recursive function to ensure a right input
        rangeOfPassword();
    }
    return range;
}

// string variable for uppercase letters
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// string variable for lowerCase letters
var lowerCase = "abcdefghijklmnopqrstuvwxyz";

// a string variable for numbers
var numbers = "0123456789";

// a string variable for special character
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// now an array of strings of upperCase, lowerCase, numbers and SpecialChar for looping over
var arrayOfStrings =  [];
arrayOfStrings.push(upperCase);
arrayOfStrings.push(lowerCase);
arrayOfStrings.push(numbers);
arrayOfStrings.push(specialChar);


// the function for generate the password
function generatePassword() {
    // initialise an empty string to hold the return value
    var passwordChar ="";
    var finalPassword ="";
    // calling the rangeOfPassword() function for user's input
    var passwordLength = rangeOfPassword();
    console.log(passwordLength);
    // confirming the uppercase
    var confirmUpper = window.confirm("Do you want the uppercase letter in your password?" );
    // confirming the lower case letters
    var confirmLower =  window.confirm("Do you want the lower case letters in your password?");
    // confirming the number
    var confirmNumber = window.confirm("Do you want any number in your password?");
    // confirming the special letter
    var confirmSpecial = window.confirm("Do you want the special character in your password?");

    // validate all the user's inputs by conditional and then loop over the valiables
    // if any user's input does not match, restart the generate function. 

    if(!confirmUpper || !confirmLower|| !confirmNumber || !confirmSpecial) {
        window.alert("Sorry, you did not put valid inputs!");
        generatePassword();
    } else {
        for(var i =0; i < arrayOfStrings.length; i++) {
            // test looping works
            passwordChar+=arrayOfStrings[i];
            console.log(passwordChar);
        }

        for (var j = 0; j <= passwordLength; j++){
          finalPassword += passwordChar.charAt(Math.floor(Math.random() * passwordChar.length)); 
        }
    }

    return  finalPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);