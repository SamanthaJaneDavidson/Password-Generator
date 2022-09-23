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
    //How can I use the variable names here instead of manaully adding the values? 
  var pwLength = parseInt(prompt("How many characters would you like in your password? Please choose between 8 and 128)."))
    if (pwLength < 8 || pwLength > 128){
        alert("You must choose a number between 8 and 128");
        var pwLength = parseInt(prompt("How many characters would you like in your password? Please choose between 8 and 128)."))} 

  var pwLowercase = confirm("Click ok if you would like lower case characters in your password?")
    if (pwLowercase) {
        var pwPool = "abcdefghijklmnopqrstuvwxyz" + pwPool;}

  var pwUppercase = confirm("Click ok if you would like upper case characters in your password?")
    if (pwUppercase) {
        var pwPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + pwPool;}

  var pwNumeric = confirm("Click ok if you would like numeric characters in your password?")
    if (pwNumeric) {
        var pwPool = "123456789" + pwPool;}
  
  var pwSpecial = confirm("Click ok if you would like special characters in your pasword?")
    if (pwSpecial) {
        var pwPool = "!@#$%^&*" + pwPool;}

    else if (!pwLowercase && !pwUppercase && !pwNumeric && !pwSpecial) {
    alert("You must choose at least one character type.");
    return generatePassword()
  }

    var output = ""; 
        for (var i = 0; i < pwLength; i++) { 
        output += (pwPool[Math.floor(Math.random() * (pwPool.length - 0) + 0)]);  
        }
         
    return output;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
