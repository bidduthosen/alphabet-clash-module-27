function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('players pressed', playerPressed)
    
    // current alphabet element 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabetText = currentAlphabetElement.innerText;
    const expectedAlphabet =currentAlphabetText.toLowerCase()
    
    // game escape over----------
    if(playerPressed === 'Escape'){
        gameOver()
    }

    if(playerPressed === expectedAlphabet){
        //updated score-------------
        // 1.get current text convert to number 
        const currentScore = getTextElementValueById('current-score')
        const newScore = currentScore + 1;
        //2. set inner text in current score
        setTextElementValueById('current-score', newScore);

        // setTextElementValueById('final-score', newScore); // way one--------
        // get result set score
        // const resultScore = document.getElementById('final-score'); // way two------------
        // resultScore.innerText = newScore

        // updated score
        // const currentScore= document.getElementById('current-score');
        // const currentScoreText = currentScore.innerText;
        // const currentScoreValue = parseInt(currentScoreText);
        // const updatedScore = currentScoreValue + 1;
        // console.log(updatedScore)
        // currentScore.innerText = updatedScore;

        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }
    else{
        // 1.get current text convert to number 
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        // set inner text in current score
        setTextElementValueById('current-life', updatedLife);
        if(updatedLife === 0){
            gameOver()
        }


        
        // const currentLife  = document.getElementById('current-life');
        // const currentLifeText = currentLife.innerText;
        // const currentLifeValue = parseInt(currentLifeText);
        // const updateLife = currentLifeValue - 1;
        // currentLife.innerText = updateLife;
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress);


function continueGame(){
    const alphabet = GetARandomAlphabet();
    
    // set a random alphabet in show display
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // highlight or background color a current alphabet
    setBackgroundColorById(alphabet);

    
}


// play
function play(){
    hideElementById('home-screen');
    hideElementById('game-over-section');
    showElementById('playing-section');
    // reset life and score
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame()
} 

// game over
function gameOver(){
    showElementById('game-over-section');
    hideElementById('playing-section');
    hideElementById('home-screen');
 
    // set last score in game over
    const currentScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', currentScore)


    // remove color by letter 
    const currentAlphabet = document.getElementById('current-alphabet').innerText;
    removeBackgroundColorById(currentAlphabet)
}