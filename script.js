//var pwLength = range(8, 128);
var pwLowercase = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var pwUppercase = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
//var pwNumeric = range(0, 9);
var pwSpecial = ["!", "@", "#", "$", "%", "^", "&", "*"];

var pwLength = prompt("How many characters would you like in your password? Please choose between 8 and 128).")
var pwLowercase = confirm("Would you like lower case characters in your password?")
var pwUppercase = confirm("Would you like upper case characters in your password?")
var pwNumeric = confirm("Would you like numeric characters in your password?")
var pwSpecial = confirm("Would you like special characters in your pasword?")



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

