var pwLength = {from:8, to:128};
var pwLowercase = "abcdefghijklmnopqrstuvwxyz";
var pwUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pwNumeric = "123456789";
var pwSpecial = "!@#$%^&*";
var pwPool = "";


// Assignment Code

	var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var output = "";
  pwPool = "";
  var pwLength = parseInt(prompt("How many characters would you like in your password? Please choose between 8 and 128)."))
  var pwLowercase = confirm("Click ok if you would like lower case characters in your password?")
  var pwUppercase = confirm("Click ok if you would like upper case characters in your password?")
  var pwNumeric = confirm("Click ok if you would like numeric characters in your password?")
  var pwSpecial = confirm("Click ok if you would like special characters in your pasword?")


  if (pwLowercase) {
    console.log //how do I tell pwPool to include lowercase? 
  } if (pwUppercase) {
    console.log
  } if (pwNumeric) {
    console.log
  } if (pwSpecial) {
    console.log 
  } else //error must choose one? 

  for (var i = 0; i < pwLength; i++) {
  console.log(pwPool[Math.floor(Math.random() * (pwPool.length - 0) + 0)]); 

}

  return output;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

