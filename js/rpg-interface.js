
let player = {
  health: 100,
  power: 20
}

let opponent = {
  health: 100,
  power: 20
}

const attack = () => {
  let attackButton = document.getElementById('attack-button');
  let restartButton = document.getElementById('restart-button');
  let gameMessage = document.getElementById('game-message');

  let playerAttack = determinedAttack(player.power);
  opponent.health -= playerAttack;
  printToScreen();

  if (isGameOver(opponent.health)){
    endGame("Player Won Fight");
    return;
  }

  attackButton.disabled = true;
  // gameMessage.innerText = "Opponent is about to strike!"

  setTimeout(() =>{
    let opponentAttack = determinedAttack(opponent.power);
    player.health -= opponentAttack;
    printToScreen();

      if (isGameOver(player.health)){
        endGame("Opponent Won Fight");
        return;
      }
      attackButton.disabled = false;
  }, 250);
}

const endGame = (message) => {
  document.getElementById('game-message').innerText = message;
  document.getElementById('attack-button').hidden = true;
  document.getElementById('restart-button').hidden = false;
}

const determinedAttack = (power) => {
  return Math.floor(Math.random() * power);
}

const isGameOver = (health) => {
  return health <= 0;
}

const restart = () => {
  let attackButton = document.getElementById('attack-button');
  player.health = 100;
  opponent.health = 100;
  document.getElementById('game-message').innerText = "";
  attackButton.disabled = false;
  attackButton.hidden = false;
  document.getElementById('restart-button').hidden = true;
  printToScreen();
}

const printToScreen = () => {
  document.getElementById('opponent-health').innerText = opponent.health;
  document.getElementById('player-health').innerText = player.health;
}

printToScreen();


// health potion testing
function usePotion(amt) {
  return function(){
    if (player.health < 100) {
      player.health += amt;
      if (player.health >= 100) {
        player.health = 100;
      }
    }
  }
}
