// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberOfChars;
var finalPassword = "";

//use global variables to list out all possible:
var specialCharacters=["!","@","#","$","%","&","*","(",")"]
var lowerCaseCharacters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
var upperCaseCharacters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
var numbers=["1","2","3","4","5","6","7","8","9","0"]

function getRandom(arr){
  var randomIndex = Math.floor(Math.random()*arr.length)
  var randomElement = arr[randomIndex]
  return randomElement  //array goes here
}

function askQuestions(){
  var response = prompt("How many characters?");
  numberOfChars = parseInt(response);
  if(Number.isNaN(response)){
alert("must be a number value")
return null
  }
  if(response<8||response>128){
    alert("number must be between 8 and 128")
    return null
  }
 var okToUSeSpecialChars = confirm("Do you want to use special characters?")
 var okToUseNumbers = confirm("would you like to use numbers?")
var okToUseLowerCase = confirm("would you like to use lower case?")
 var okToUseUpperCase = confirm("would you like to use upper case?")
  if(!okToUSeSpecialChars &&!okToUseNumbers &&!okToUseLowerCase &&!okToUseUpperCase){
    alert("must select at least one option")
    return null
  }
  var userChoices = {
    response: response, 
    okToUSeSpecialChars: okToUSeSpecialChars,
    okToUseNumbers: okToUseNumbers,
    okToUseLowerCase : okToUseLowerCase,
    okToUseUpperCase: okToUseUpperCase,
  }
  return userChoices
}

//use a loop to grab random characters x number of times

//finalPassword +=

//Your work starts here
function generatePassword(){
var userOptions= askQuestions(); 
var passwordResult= []
var possiblePasswordResult = []
var guarenteedPasswordOptions = [] //array goes here concat and push
if(userOptions.okToUSeSpecialChars){
  possiblePasswordResult = possiblePasswordResult.concat(specialCharacters) 
  guarenteedPasswordOptions.push(getRandom(spe))
}

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
