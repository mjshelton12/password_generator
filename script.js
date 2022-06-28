// Assignment Code
var generateBtn = document.querySelector("#generate");

//MJ's code
var putItAllTogether;
var prompLengthNum;

function buildArray(){
var promptLength = prompt("Enter password length. It must be at least 8 characters with a maximum of 128 character.")

if (!promptLength) {
  return;
}

promptLengthNum = parseInt(promptLength)

while (promptLengthNum < 8 || promptLengthNum > 128) {
  promptLength = window.prompt("Your number must be inbetween 8 and 128; please try again")
  promptLengthNum = parseInt(promptLength)

  if (!promptLength) {
    return;
  }
}

if (window.confirm("Click Ok if you would like to include special characters (!@#$%^&*()) or Cancel if you don't.")){
  promptSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
  } else {
  promptSpecial = []
}

if (window.confirm("Click Ok if you would like to include numbers or Cancel if you don't.")){
  promptNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  } else {
  promptNumbers = []
}

if (window.confirm("Click Ok if you would like to include uppercase letters or Cancel if you don't.")){
  promptUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
  } else {
  promptUpper = []
}

if (window.confirm("Click Ok if you would like to include lowercase letters or Cancel if you don't.")){
  promptLower= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 
  } else {
  promptLower = []
}

putItAllTogether = promptSpecial.concat(promptNumbers, promptUpper, promptLower)

if (putItAllTogether.length === 0) {
  window.alert ("Could not create password with no character sets selected. Please try again.")
  putItAllTogether = [""]
}

if (putItAllTogether != 0)
  window.alert ("Thank you! Your password will now be generated.")

}

function generatePassword(){
  buildArray()
  var prePassword = ""
  for (i=0; i<promptLengthNum; i++){
  prePassword += putItAllTogether[Math.floor(Math.random()*putItAllTogether.length)]
  }
  return prePassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
