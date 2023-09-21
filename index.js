// Character array
let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// Symbol array
let charactersSymbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

// Combined array
let charactersWithSymbols = characters.concat(charactersSymbols);

// Variables
let passwordLength = document.getElementById("password-length").value
let passwordField1 = document.getElementById("password-field-1")
let passwordField2 = document.getElementById("password-field-2")
let infoField = document.getElementById("info")
let symbols = document.getElementById("symbols")
let hasSymbol = true

// Gets the random index
function getRandomIndex(){
    let randomIndex = 0
    
    if (hasSymbol){
        randomIndex = Math.floor(Math.random() * charactersWithSymbols.length)
    }
    else {
        randomIndex = Math.floor(Math.random() * characters.length)
    }
    return randomIndex
}

// Generates random password
function generatePasswords(){
    passwordField1.value = ""
    passwordField2.value = ""
    infoField.textContent = ""
    
    for(i = 0; i < passwordLength; i++){
        if (hasSymbol){
            passwordField1.value += charactersWithSymbols[getRandomIndex()]
            passwordField2.value += charactersWithSymbols[getRandomIndex()] 
        } else{
            passwordField1.value += characters[getRandomIndex()]
            passwordField2.value += characters[getRandomIndex()] 
        }
    }
}

// Activate symbol filtering
function activateSymbolFilter(){
    if(symbols.checked){
        hasSymbol = true
    }else {
        hasSymbol = false
    }
}

// Sets the password lenght
function setPasswordLength(){
    passwordLength = document.getElementById("password-length").value
}

// Copies the password from each field
function copyPassword(field){
    if (!(passwordField1.value === "Generate password")){
        if (field === 1) {
            passwordField1.select()
            passwordField1.setSelectionRange(0, 99999) // For mobile devices
            navigator.clipboard.writeText(passwordField1.value)
            infoField.textContent = "Password 1 has been copied"
        } else if (field === 2){
            passwordField2.select()
            passwordField2.setSelectionRange(0, 99999) // For mobile devices
            navigator.clipboard.writeText(passwordField2.value)
            infoField.textContent = "Password 2 has been copied"
        }
    }
}