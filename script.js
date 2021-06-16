var specialChar = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedChar = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedChar = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  function passwordchoice(){
    var length=parseInt(prompt("How many characters do you want your password to be?"))
    if(isNaN(length)=== true){
      alert("Please provide password length as a number")
      return
    }
    if(length <8){
      alert("Password needs to be at least 8 characters long")
      return
    }
    if(length >128){
      alert("Password need to be less than 129 characters")
      return
    }
    var hasupper=confirm("Click ok if you want uppercase letters in your password")
    var haslower=confirm("Click ok if you want lowercase letters in your password")
    var hasnumber=confirm("Click ok if you want numbers in your password")
    var hasspecialcharacters=confirm("Click ok if you want special characters in your password")
  
    if(hasupper=== false &&haslower===false &&hasnumber===false &&hasspecialcharacters===false){
      alert("Please choose at least one character type for your password")
    }
    var passwordanswers={
      length:length,
      hasupper:hasupper,
      haslower:haslower,
      hasnumber:hasnumber,
      hasspecialcharacters:hasspecialcharacters,
    }
    return passwordanswers 
  }
  function randomselect(array){
      var rindex=Math.floor(Math.random()*array.length)
      var relement=array[rindex]
      return relement
  }
  function generatePassword(){
      var choices=passwordchoice()
      var results=[]
      var gchar=[]
      var pchar=[]
      if(choices.hasupper){
          pchar=pchar.concat(upperCasedChar)
          gchar.push(randomselect(upperCasedChar))
      }
      if(choices.haslower){
        pchar=pchar.concat(lowerCasedChar)
        gchar.push(randomselect(lowerCasedChar))
    }
    if(choices.hasnumber){
        pchar=pchar.concat(numericChar)
        gchar.push(randomselect(numericChar))
    }
    if(choices.hasspecialcharacters){
        pchar=pchar.concat(specialChar)
        gchar.push(randomselect(specialChar))
    }
    for(var i=0;i<choices.length;i++){
        var mychar=randomselect(pchar)
        results.push(mychar)
    }
    for(var i=0;i<gchar.length;i++){
        results[i]=gchar[i]
    }
    return results.join("")
  }
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
  
  