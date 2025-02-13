const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const gameContainer = document.getElementById("game-container");
let playerX = 250;
let playerY = 450;
let playerSpeed = 4;

let enemyX = 250;
let enemyY = 50;
let enemySpeed = 20;

let keyboard = {ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false};

document.addEventListener("keydown", (e) => {
    if (keyboard.hasOwnProperty(e.key)) {
        keyboard[e.key] = true;
    }
});
document.addEventListener("keyup", (e) => {
    if (keyboard.hasOwnProperty(e.key)) {
        keyboard[e.key] = false;
    }
});

function movePlayer() {
    if (keyboard.ArrowUp && playerY > 0) playerY -= playerSpeed;
    if (keyboard.ArrowDown && playerY < 450) playerY += playerSpeed;
    if (keyboard.ArrowLeft && playerX > 0) playerX -= playerSpeed;
    if (keyboard.ArrowRight && playerX < 450) playerX += playerSpeed;

    player.style.transform = `translate(${playerX}px, ${playerY}px)`;
}
function moveEnemy() {
    let direction = Math.floor(Math.random() * 4);

    switch (direction) {
        case 0: if(enemyY > 0) enemyY -= enemySpeed; break;
        case 1: if(enemyY < 450) enemyY += enemySpeed; break;
        case 2: if(enemyY > 0) enemyX -= enemySpeed; break;
        case 3: if(enemyY < 450) enemyX += enemySpeed; break;
    }
    enemy.style.transform = `translate(${enemyX}px, ${enemyY}px)`;
}
function checkColision() {
    if(Math.abs(playerX - enemyX) < 40 && Math.abs(playerY - enemyY) < 40) {
        alert("O Tom pegou você! Tente denovo.");
        resetGame();
    }
}
function resetGame() {
    playerX = 250;
    playerY = 450;
    enemyX = 250;
    enemyY = 50;

    updateGame();
}
function updateGame() {
    movePlayer();
    moveEnemy();
    checkColision();

    requestAnimationFrame(updateGame);
}
updateGame();