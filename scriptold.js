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


  //How can I use the variable names here instead of manaully adding the values? 
  
  // if (pwLength < 8 || pwLength > 128); {
  //   alert("Please choose a number between 8 and 128.");
  //     generatePassword()
  //   }
  
  if (pwLowercase) {
     var pwPool = "abcdefghijklmnopqrstuvwxyz" + pwPool;

  } if (pwUppercase) {
     var pwPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + pwPool;
   
  } if (pwNumeric) {
     var pwPool = "123456789" + pwPool;

  } if (pwSpecial) {
     var pwPool = "!@#$%^&*" + pwPool;
  
  } while (!pwLowercase && !pwUppercase && !pwNumeric && !pwSpecial) {
      invalidResp = alert("You must choose at least one character type.");
      generatePassword() //never generates password just keeps asking the questions
    }
  
  var output = ""; //I used to have this at the top of the function but it didn't work there. Why?
    for (var i = 0; i < pwLength; i++) { 
      output += (pwPool[Math.floor(Math.random() * (pwPool.length - 0) + 0)]);  
    } 
  
  return output; 

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
