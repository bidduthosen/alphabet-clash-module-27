function continueGame(){
    const randomAlphabet = GetARandomAlphabet();

    // set a random alphabet in show display
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = randomAlphabet
}


// play
function play(){
    hideElementById('home-screen');
    showElementById('playing-section')
    continueGame()
} 