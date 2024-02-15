// add hidden class
function hideElementById(elementId){
    document.getElementById(elementId).classList.add('hidden')
};

// remove hidden class 
function showElementById(elementId){
    document.getElementById(elementId).classList.remove('hidden');
}

// set background color in random alphabet in keyboard
function setBackgroundColorById(elementId){
    document.getElementById(elementId).classList.add('bg-orange-400');
}

// remove background color in random alphabet in keyboard
function removeBackgroundColorById(elementId){
    document.getElementById(elementId).classList.remove('bg-orange-400')
}

// get element value by id
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementValue = parseInt(elementText);
    return elementValue;
};

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// get element set text
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

// random alphabet generate return 
function GetARandomAlphabet(){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetText = alphabets.split('');
    
    // random generate number of index
    const randomIndex  = Math.round(Math.random() * 25);
    const alphabet = alphabetText[randomIndex];
    return alphabet;
}