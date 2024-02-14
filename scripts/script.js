document.getElementById('play-now-section').addEventListener('click', function(){
    // remove class
    removeElementById('play-typing-section');
    // added class
    addElementById('playnow-section');
    continueGames()
});

document.addEventListener('keyup', function(event){
    const PlayerPressedKey = event.key;
    const randomGenerateLetter = document.getElementById('random-generate-letter').innerText;
    const randomGenerateKey = randomGenerateLetter.toLowerCase();
    
    // if randomGenerate === playerPressedKey 
    if(PlayerPressedKey === randomGenerateKey){

        // current score get
        const currentScoreNumber = document.getElementById('current-score');
        const currentScoreText = document.getElementById('current-score').innerText;
        const currentScore = parseInt(currentScoreText);
        
        // new score set
        const newScore = currentScore + 1;
        currentScoreNumber.innerText = newScore;
        
        // setup ending game score result
        const resultScore = document.getElementById('result-score');
        resultScore.innerText = newScore;

        // continue game again function
        continueGames()
        removeBackgroundColor(randomGenerateKey)
    }
    else{
        const lifeScoreNumber = document.getElementById('life');
        const lifeScoreText = lifeScoreNumber.innerText;
        const lifeScore = parseInt(lifeScoreText);

        // set life score
        const newLife = lifeScore -1;
        lifeScoreNumber.innerText = newLife;
        console.log(lifeScore)
        if(lifeScore < 1){
            removeElementById('ending-game-section');
            addElementById('playnow-section');
            addElementById('play-typing-section');
        }
        
    }

})

function continueGames(){
    const randomGenerateLetter = document.getElementById('random-generate-letter');
    randomGenerateLetter.innerText = getARandomAlphabets();

}

function getARandomAlphabets(){
    const alphabetsList = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsList.split("");
    
    // random generate number 
    const randomGenerateNumber = Math.random()*25;
    const index = Math.round(randomGenerateNumber);
    
    // random generate number find this key letter index
    const alphabet = alphabets[index]
    setBackgroundColor(alphabet)
    return alphabet
};

// play again game function

document.getElementById('play-again-btn').addEventListener('click', function(){
    continueGames()
    removeElementById('play-typing-section');
    addElementById('ending-game-section');
    addElementById('playnow-section');
})