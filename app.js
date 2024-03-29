/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, isPlaying;

init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(!isPlaying){
        return;
    }
    //1. Random
    var dice = Math.floor(Math.random()*6)+1;
    //2. Display
    var diceDOm = document.querySelector('.dice');
    diceDOm.style.display = 'block';
    diceDOm.src = 'dice-' + dice + '.png';
    //3. Update th round if the score not 1
    if(dice!==1){
        roundScore+=dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else{
        //move next player
        nextPlayer();
        
    }
})

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(!isPlaying){
        return;
    }
    //1.Update global score
    scores[activePlayer]+=roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    //Update the UI
    if(scores[activePlayer]>=100){
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
    isPlaying = false;
    } else{
    //next player move
    nextPlayer();
    }
})
document.querySelector('.btn-new').addEventListener('click', init);


function nextPlayer(){
    activePlayer=(activePlayer+1)%2;
    roundScore = 0;
    document.getElementById('current-0').textContent ='0';
    document.getElementById('current-1').textContent ='0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    document.querySelector('.dice').style.display = 'none';
}

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    isPlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
}

























//document.querySelector('.player-1-panel').classList.remove('active');

//document.querySelector('#current-' + activePlayer).textContent = dice;
//(We can use html tag)document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';












