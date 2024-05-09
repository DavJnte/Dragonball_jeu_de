//Joueurs
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    // Réinitialisation des points à 0 lors du changement de joueur
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
}

let Nameplayer1 = "Joueur 1";
let Nameplayer2 = "Joueur 2";

// Modifier les noms des joueurs
function editNames() {
    let newNameplayer1, newNameplayer2;

    // Impossible de laisser un champ vide ou de dépasser 10 caractères
    do {
        newNameplayer1 = prompt("Nom JOUEUR 1 (10 caractères maximum)");
    } while (newNameplayer1.trim() === "" || newNameplayer1.length > 10);
    do {
        newNameplayer2 = prompt("Nom JOUEUR 2 (10 caractères maximum)");
    } while (newNameplayer2.trim() === "" || newNameplayer2.length > 10);

    Nameplayer1 = newNameplayer1 || Nameplayer1;
    Nameplayer2 = newNameplayer2 || Nameplayer2;

    document.querySelector("h2.Player1").innerHTML = Nameplayer1;
    document.querySelector("h2.Player2").innerHTML = Nameplayer2;

    nombloquer();
}

function joueur2debloquer() {
    document.getElementById('select-player-2').disabled = false;
}

function bloquer() {
    ['chargerki1', 'chargerki2', 'attaquer', 'lancer', 'select-player-2'].forEach(id => {
        document.getElementById(id).disabled = true;
    });
}

function debloquer() {
    ['chargerki1', 'chargerki2', 'attaquer', 'lancer'].forEach(id => {
        document.getElementById(id).disabled = false;
    });
}

function disableNameInput() {
    document.getElementById('Nameplayer').disabled = true;
}

choicePlayer();
bloquer();

//Les joueurs choisissent un personnage

function choicePlayer() {
    //Choix du joueur 1 
    let player1 = document.getElementById('select-player-1')
    let imgPlayer1 = document.getElementById('imgPlayer1')
    player1.addEventListener('change', (action1) => {
        const character = action1.target.value.toLowerCase();
        imgPlayer1.src = `./image/Combatants/${character}.png`;
        player1.disabled = true
        bloquer();
        joueur2debloquer();
    });
    // choix du joueur 2
    let player2 = document.getElementById('select-player-2')
    let imgPlayer2 = document.getElementById('imgPlayer2')
    player2.addEventListener('change', (action2) => {
        const character = action2.target.value.toLowerCase();
        imgPlayer2.src = `./image/Combatants/${character}.png`;
        player2.disabled = true
        debloquer();
        soundback();
    });
}

//GAMEPLAY AVEC LE DE -------------------------------------------------------------------------------
var scores, roundScore, activePlayer, gamePlaying;

//Initialisation des joueurs 
function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
}

init();
lancementdé();
points();

function lancementdé() {
    document.querySelector('.btn-roll').addEventListener('click', function() {
        if (gamePlaying) {
            //On lance le dé
            var dice = Math.floor(Math.random() * 6) + 1;
            // Affichage du lancé 
            var diceDOM = document.querySelector('.dice');
            diceDOM.style = ' max-width: 100px;';
            diceDOM.src = './image/dés/dice-' + dice + '.png';
            if (dice > 1) {
                soundroll()
            }
            if (dice == 1) {
                soundfail()
            }
            //Si le dé ne fait pas 1 
            if (dice !== 1) {
                //On cumul les points 
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
                nextPlayer()
            }
        }
    });
}

function points() {
    document.querySelector('.btn-hold').addEventListener('click', function() {
        if (gamePlaying) {
            // ATTRIBUE LES POINTS AU JOUEUR
            scores[activePlayer] += roundScore;
            if (activePlayer == 0) {
                if (roundScore == 0) {} else {
                    damage();
                    var damageEffect = document.getElementById('damageEffect2');
                    damageEffect.style.animation = 'none';
                    void damageEffect.offsetWidth; // Réinitialiser l'animation
                    damageEffect.style.animation = null;
                }
            }
            if (activePlayer == 1) {
                if (roundScore == 0) {} else {
                    damage();
                    var damageEffect = document.getElementById('damageEffect1');
                    damageEffect.style.animation = 'none';
                    void damageEffect.offsetWidth; // Réinitialiser l'animation
                    damageEffect.style.animation = null;
                }
            }

            // DEGAT TOTAL DES JOUEURS ADDITIONNÉ
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

            // Si un joueur dépasse ou egal un score de 100 alors message gagnant
            function customAlert(message) {
                var modal = document.getElementById("myModal");
                var modalMessage = document.getElementById("modalMessage");
                modalMessage.innerHTML = message;
                modal.style.display = "block";
                // Centrer verticalement et horizontalement
                modal.style.justifyContent = "center";
                modal.style.alignItems = "center";
                modal.style.textAlign = "center"
                var span = document.getElementsByClassName("close")[0];
                span.onclick = function() {
                    modal.style.display = "none";
                }
            }

            if (scores[activePlayer] >= 100) {
                soundwin();
                if (scores[0] >= 100) {
                    customAlert('Nous avons un GAGNANT, FÉLICITATIONS A ' + Nameplayer1);
                } else {
                    customAlert('Nous avons un GAGNANT, FÉLICITATIONS A ' + Nameplayer2);
                }
                // Arrêt total du jeu
                document.querySelector('.dice').style.display = 'none';
                gamePlaying = false;
                bloquer();
            } else { // SI CONDITION PAS RESPECTÉ ALORS JEU CONTINUE 
                nextPlayer()
            }
        }
    });
}

//Son et Musique -----------------------------------------------------------
//Son roulement de de
function soundroll() {
    let audio = new Audio('./Son&Musique/soundeffect/sondé.mp3');
    audio.play();
    audio.volume = 0.5;
}
//son echec
function soundfail() {
    let audio = new Audio('./Son&Musique/soundeffect/fail.mp3');
    audio.play();
    audio.volume = 0.5;
}
//Son ambiance
function soundback() {
    let audio = new Audio('./Son&Musique/soundeffect/back_sound.mp4');
    audio.play();
    audio.volume = 0.1;
    audio.loop = true
}
//Son degat
function damage() {
    let audio = new Audio('./Son&Musique/soundeffect/damage.mp3');
    audio.play();
    audio.volume = 0.3;
}
//Son de victoire
function soundwin() {
    let audio = new Audio('./Son&Musique/soundeffect/win-sound-effect-no-copyright.mp3');
    audio.play();
    audio.volume = 0.3;
}
