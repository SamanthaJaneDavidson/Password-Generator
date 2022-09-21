//var pwLength = range(8, 128);
var pwLowercase = "abcdefghijklmnopqrstuvwxyz"
var pwUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var pwNumeric = "123456789"
var pwSpecial = "!@#$%^&*"

var pwLength = prompt("How many characters would you like in your password? Please choose between 8 and 128).")
var pwLowercase = confirm("Click ok if you would like lower case characters in your password?")
var pwUppercase = confirm("Click ok if you would like upper case characters in your password?")
var pwNumeric = confirm("Click ok if you would like numeric characters in your password?")
var pwSpecial = confirm("Click ok if you would like special characters in your pasword?")



//pwLowercase[Math.floor(Math.random() * (pwLowercase.length - 0) + 0)]

// Assignment Code

	var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

