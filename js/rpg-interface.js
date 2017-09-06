$(document).ready(function(){
  // $('#time').text(moment());
  let player1 = new Player();
  let opponent = new Player();

  let attackButton = document.getElementById('attack-button');
  opponent.getHit(player1.attack);
  
  let restartButton = document.getElementById('restart-button');
  let gameMessage = document.getElementById('game-message');

});
