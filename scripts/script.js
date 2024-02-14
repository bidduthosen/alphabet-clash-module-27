document.getElementById('play-now-section').addEventListener('click', function(){
    // remove class
    removeElementById('play-typing-section');
    // added class
    addElementById('playnow-section');
    continueGames()
});


function continueGames(){
    const setGenerateLetter = document.getElementById('letterGenerate');
    setGenerateLetter.innerText = getARandomAlphabets();

}

function getARandomAlphabets(){
    const alphabetsList = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsList.split("");
    
    // random generate index 
    const randomGenerateNumber = Math.random()*25;
    const index = Math.round(randomGenerateNumber);
    
    const alphabet = alphabets[index]
    setBackgroundColor(alphabet)
    return alphabet
}