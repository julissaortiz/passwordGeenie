// Assignment code here
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
function gotPasswordOptions() {
  var length = parseInt(
    prompt("How many characters would you like in your password?")
  );
  console.log(length);
  var specialCharacters = confirm("Click to confirm special characters");

  var lowerCase = confirm("Click to confirm lowercase letters");

  var numericCharacters = confirm("Click to add number(s)");

  var upperCase = confirm("Click to add uppercase letters");

  var passwordOptions = {
    length: length,
    specialCharacters: specialCharacters,
    lowerCase: lowerCase,
    numericCharacters: numericCharacters,
    upperCase: upperCase,
  };
  return passwordOptions;
}
function generatePassword() {
  var options = gotPasswordOptions();
  console.log(options);

  var selectedCharacters = [];

  if (options.specialCharacters) {
    selectedCharacters = selectedCharacters.concat(specialCharacters);
  }
  if (options.lowerCase) {
    selectedCharacters = selectedCharacters.concat(lowerCasedCharacters);
  }
  if (options.numericCharacters) {
    selectedCharacters = selectedCharacters.concat(numericCharacters);
  }
  if (options.upperCase) {
    selectedCharacters = selectedCharacters.concat(upperCasedCharacters);
  }

  console.log(selectedCharacters);

  var result = [];

  for (let i = 0; i < options.length; i++) {
    var randomIndex = Math.floor(Math.random() * options.length);
    var possibleCharacter = selectedCharacters[randomIndex];
    result.push(possibleCharacter);
  }

  return result.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
