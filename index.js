const passwordLength = document.getElementById("passwordLength");
const passwordLengthBtn = document.getElementById("passwordLengthBtn");
const includeLowercase = document.getElementById("includeLowercaseBtn");
const includeUppercase = document.getElementById("includeUppercaseBtn");
const includeNumbers = document.getElementById("includeNumbersBtn");
const includeSymbols = document.getElementById("includeSymbolsBtn");
const result = document.getElementById("password");

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChats = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-+";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChats : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    
    if (length <= 0) {
        result.textContent = `Number must be at least one.`;
        return;  // Stop execution if the length is invalid

    }

    if (isNaN(length)) {
        result.textContent = `You need to enter a number.`;
        return;  // Stop execution if the length is invalid

    }

    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
        result.textContent = `At least one option should be checked.`;
        return;  // Stop execution if no options are selected
    }

    for(let i=0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    result.textContent = `Your Password Is: ${password}`;
}

passwordLengthBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const length = parseInt(passwordLength.value);
    generatePassword(length, includeLowercase.checked, includeUppercase.checked, includeNumbers.checked, includeSymbols.checked);
    console.log(length)
})
