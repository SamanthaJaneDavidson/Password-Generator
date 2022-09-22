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
  pwPool = "";
  var pwLength = parseInt(prompt("How many characters would you like in your password? Please choose between 8 and 128)."))
  var pwLowercase = confirm("Click ok if you would like lower case characters in your password?")
  var pwUppercase = confirm("Click ok if you would like upper case characters in your password?")
  var pwNumeric = confirm("Click ok if you would like numeric characters in your password?")
  var pwSpecial = confirm("Click ok if you would like special characters in your pasword?")


  if (pwLowercase) {
     var pwPool = "abcdefghijklmnopqrstuvwxyz" + pwPool; //How can I use lowercase var here instead of manaully adding the data? 

  } if (pwUppercase) {
     var pwPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + pwPool;
   
  } if (pwNumeric) {
     var pwPool = "123456789" + pwPool;

  } if (pwSpecial) {
     var pwPool = "!@#$%^&*" + pwPool;
   
  /*
  } else {
    "Please choose at least one option." How do I make this loop back to the beginning if they hit cancel on all options? 
  }*/
  var output = "";
  for (var i = 0; i < pwLength; i++) { 
    output += (pwPool[Math.floor(Math.random() * (pwPool.length - 0) + 0)]);
    
  } //this is not stopping at 128; user can put in as high of a number as they want
  
  return output; 
  
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
