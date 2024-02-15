// add hidden class
function hideElementById(elementId){
    document.getElementById(elementId).classList.add('hidden')
};

// remove hidden class 
function showElementById(elementId){
    document.getElementById(elementId).classList.remove('hidden');
    
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