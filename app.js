const result = document.querySelector('#result');
const btnCopy = document.querySelector('.btn-copy');
const passwordLength = document.querySelector('#characterLength');
const lowerCaseCheck = document.querySelector('#lowercaseCharacter');
const upperCaseCheck = document.querySelector('#uppercaseCharacter');
const numberCheck = document.querySelector('#numberCharacter');
const symbolCheck = document.querySelector('#symbolCharacter');
const generateBtn = document.querySelector('.btn-generate');

const getLowerCharacters = () => {
    const characterString = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    return characterString;
}
const getUpperCharacters = () => {
    const characterString = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    return characterString;
}
const getNumberCharacters = () => {
    const characterString = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    return characterString;
}
const getSymbolCharacters = () => {
    const symbols = '!@#$%^&*()_+{}:"<>?';
    const characterString = symbols[Math.floor(Math.random() * symbols.length)];
    return characterString;
}

const getRandomCharacter = {
    lowerCase: getLowerCharacters,
    upperCase: getUpperCharacters,
    number: getNumberCharacters,
    symbol: getSymbolCharacters
}
getSymbolCharacters();
const generatepassword = (
    length,
    lowerCase,
    upperCase,
    number,
    symbol
) => {
    let generatedpassword = '';
    const checkCount = lowerCase + upperCase + number + symbol;
    const checks = [{ lowerCase }, { upperCase }, { number }, { symbol }]
        .filter(item => Object.values(item)[0]);
    if (checkCount === 0) {
        return '';
        
    }
    for (let i = 0; i < length; i += checkCount) {
        checks.forEach(check => {
            const randomCharacterFunction = Object.keys(check)[0];
            generatedpassword += getRandomCharacter[randomCharacterFunction]();
        })

    }
    return generatedpassword;
}

generateBtn.addEventListener('click', () => {
    const length = Number(passwordLength.value);
    const lowerCase = lowerCaseCheck.checked;
    const upperCase = upperCaseCheck.checked;
    const number = numberCheck.checked;
    const symbol = symbolCheck.checked;

    result.value = generatepassword(length, lowerCase, upperCase, number, symbol);
})
