var scores, roundScores, activePlayer, gamePlay;



//document.querySelector('#current-' + activePlayer).textContent = dice;

newGame();

document.querySelector('.btn-roll').addEventListener('click', function(){
   if(gamePlay){
        //Generate random number
    var dice = Math.floor(Math.random() * 6) + 1;
    //Unhide the dice
    var diceDom = document.querySelector('.dice'); 
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    
    //update score if not equals 1
    if(dice > 1){
        //Add Score
        roundScores += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScores;
        
    }
    else{
        nextPlayer();
    }
   }
   
});
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlay){
        scores[activePlayer] += roundScores;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    document.getElementById('current-' + activePlayer).textContent = 0;
    roundScores = 0;
    
    //Check if player won the game 
    if(scores[activePlayer] >= 100){
        document.getElementById('name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        gamePlay = false;
        
    }
    else{
        
        //TO next player
        nextPlayer();
    }
    }
    
});


document.querySelector('.btn-new').addEventListener('click', function(){
    newGame();
    scores = [0, 0];
    roundScores = 0;
    activePlayer = 0;
    document.querySelector('.player-0-panel').classList.add('active');
     document.querySelector('.player-1-panel').classList.remove('active');
    
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
        roundScores = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
}
function newGame(){
    scores = [0, 0];
    roundScores = 0;
    activePlayer = 0;
    gamePlay =true;
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 0';
    document.getElementById('name-1').textContent = 'Player 1';
}