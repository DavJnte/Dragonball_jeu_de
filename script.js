let Nameplayer1 = "Player 1";
let Nameplayer2 = "Player 2";

function editNames() {
    Nameplayer1 = prompt("Nom JOUEUR 1") || Nameplayer1;
    Nameplayer2 = prompt("Nom JOUEUR 2") || Nameplayer2;
    document.querySelector("h2.Player1").innerHTML = Nameplayer1;
    document.querySelector("h2.Player2").innerHTML = Nameplayer2;
    disableNameInput();
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

//Le joueur 1 choisi son personnage
    function choicePlayer(){
        
        let player1 = document.getElementById('select-player-1')
        let imgPlayer1 = document.getElementById('imgPlayer1')
        

    //Le joueur choisi son personnage dans la liste et affiche son personnage
        player1.addEventListener('change', (action1) => {
        switch(action1.target.value){
            case 'Goku':
                imgPlayer1.src='./image/Combatants/goku.png'
                let audio = new Audio('./Son&Musique/goku/goku_sound.mp3');
                audio.play();
                audio.volume = 0.2;
                break
            case 'VEGETA':
                imgPlayer1.src='./image/Combatants/vegeta.png'
                let v_audio = new Audio('./Son&Musique/vegeta/vegeta_voice.mp3');
                v_audio.play();
                v_audio.volume = 0.2;
                break
            case 'Duogetv':
                imgPlayer1.src='./image/Combatants/duo_getv.png'
                let duo_audio = new Audio('./Son&Musique/duo_v_g/duo_voice.mp3');
                duo_audio.play();
                duo_audio.volume = 0.2;
                break
            case 'Jiren':
                imgPlayer1.src='./image/Combatants/jiren.png'
                let jaudio = new Audio('./Son&Musique/jiren/jiren_voice.mp3');
                jaudio.play();
                jaudio.volume = 0.2;
                break
            case 'Piccolo':
                imgPlayer1.src='./image/Combatants/piccolo.png'
                let piaudio = new Audio('./Son&Musique/piccolo/pic_sound.mp3');
                piaudio.play();
                piaudio.volume = 0.2;
                break
            case 'Broly':
                imgPlayer1.src='./image/Combatants/broly.png'
                let broaudio = new Audio('./Son&Musique/broly/broly_sound.mp3');
                broaudio.play();
                broaudio.volume = 0.3;
                break
            case 'KRILLIN':
                imgPlayer1.src='./image/Combatants/krillin.png'
                let kaudio = new Audio('./Son&Musique/krillin/krillin_voice.mp3');
                kaudio.play();
                kaudio.volume = 0.3;
                break
            case 'FREEZER':
                imgPlayer1.src='./image/Combatants/freezer.png'
                let faudio = new Audio('./Son&Musique/freezer/freezer_voice.mp3');
                faudio.play();
                faudio.volume = 0.3;
                break
            case 'GOHAN':
                imgPlayer1.src='./image/Combatants/gohan.png'
                let ulaudio = new Audio('./Son&Musique/gohan/ultimate_voice.mp3');
                ulaudio.play();
                ulaudio.volume = 0.3;
                break
            case 'TOPPO':
                imgPlayer1.src='./image/Combatants/toppo.png'
                let toplaudio = new Audio('./Son&Musique/toppo/toppo_voice.mp3');
                toplaudio.play();
                toplaudio.volume = 0.3;
                break
        }
        //bloque la liste des combatants joueur 1
        player1.disabled = true
        bloquer();
        joueur2debloquer();
    })
        // choix du joueur 2
        let player2 = document.getElementById('select-player-2')
        let imgPlayer2 = document.getElementById('imgPlayer2')
        
        player2.addEventListener('change', (action2) => {
            switch(action2.target.value){
                case 'Goku':
                    imgPlayer2.src='./image/Combatants/goku.png'
                    let audio = new Audio('./Son&Musique/goku/goku_voice_p2.mp3');
                    audio.play();
                    audio.volume = 0.2;
                    break
                case 'VEGETA':
                    imgPlayer2.src='./image/Combatants/vegeta.png'
                    let v_audio = new Audio('./Son&Musique/vegeta/vegeta_voice_2.mp3');
                    v_audio.play();
                    v_audio.volume = 0.2;
                    break
                case 'Duogetv':
                    imgPlayer2.src='./image/Combatants/duo_getv.png'
                    let duo_audio = new Audio('./Son&Musique/duo_v_g/duo_sound_2.mp3');
                    duo_audio.play();
                    duo_audio.volume = 0.5;
                    break
                case 'Jiren':
                    imgPlayer2.src='./image/Combatants/jiren.png'
                    let j_audio = new Audio('./Son&Musique/jiren/jiren_voice_2.mp3');
                    j_audio.play();
                    j_audio.volume = 0.2;
                    break
                case 'Piccolo':
                    imgPlayer2.src='./image/Combatants/piccolo.png'
                    let piaudio = new Audio('./Son&Musique/piccolo/pic_sound_2.mp3');
                    piaudio.play();
                    piaudio.volume = 0.3;
                    break
                case 'Broly':
                    imgPlayer2.src='./image/Combatants/broly.png'
                    let broaudio = new Audio('./Son&Musique/broly/broly_voice_2.mp3');
                    broaudio.play();
                    broaudio.volume = 0.3;
                    break
                case 'KRILLIN':
                    imgPlayer2.src='./image/Combatants/krillin.png'
                    let kaudio = new Audio('./Son&Musique/krillin/krinllin_voice_2.mp4');
                    kaudio.play();
                    kaudio.volume = 0.3;
                    break
                case 'FREEZER':
                    imgPlayer2.src='./image/Combatants/freezer.png'
                    let faudio = new Audio('./Son&Musique/freezer/freezer_voice_2.mp3');
                    faudio.play();
                    faudio.volume = 0.3;
                    break
                case 'GOHAN':
                    imgPlayer2.src='./image/Combatants/gohan.png'
                    let ulaudio = new Audio('./Son&Musique/gohan/gohan_voice2.mp3');
                    ulaudio.play();
                    ulaudio.volume = 0.3;
                    break
                case 'TOPPO':
                    imgPlayer2.src='./image/Combatants/toppo.png'
                    let toplaudio = new Audio('./Son&Musique/toppo/toppo_voice_2.mp3');
                    toplaudio.play();
                    toplaudio.volume = 0.3;
                    break
            } 
            //bloque la liste du joueur 2 
            player2.disabled = true
            debloquer();
            soundback();
        })
        
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

function lancementdé(){
    document.querySelector('.btn-roll').addEventListener('click', function() {
        if(gamePlaying) {
            //On lance le dé      
           var dice = Math.floor(Math.random() * 6) + 1;
            
            // Affichage du lancé 
            var diceDOM = document.querySelector('.dice');
            diceDOM.style= ' max-width: 100px;';
            diceDOM.src = './image/dés/dice-' + dice + '.png';

            if(dice>1){
                soundroll()
            }
            if(dice ==1){
                soundfail()
            }
    
            //Si le dé ne fait pas 1 
            if (dice !== 1) {
                //On cumul les points 
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
                nextPlayer();
            }
        }    
    });
}
    function points(){
        document.querySelector('.btn-hold').addEventListener('click', function() {
            if (gamePlaying) {
                // ATTRIBUE LES POINTS AU JOUEUR
                scores[activePlayer] += roundScore;

                if(activePlayer == 0){
                    if(roundScore==0){
                        //Rien ne se passe
                    }
                    else{
                        //Emet un bruit de dégat
                        damage();
                    }
                }

                if(activePlayer ==1){
                    if(roundScore==0){
                       //rien ne se passe 
                    }
                    else{
                        damage();
                    }
                }

                // DEGAT TOTAL DES JOUEURS ADDITIONNÉ
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                
                // Si un joueur dépasse ou egal un score de 100
                if (scores[activePlayer] >= 100) {
                    soundwin()
                    if(scores[0] >=100){
                        alert('BRAVO ! Nous avons un GAGNANT, FÉLICITATION AU JOUEUR '+ Nameplayer1)
                    }else{
                        alert('BRAVO ! Nous avons un GAGNANT, FÉLICITATION AU JOUEUR '+ Nameplayer2)
                    }
                  //ARRET TOTAL DU JEU 
                    document.querySelector('.dice').style.display = 'none';
                    gamePlaying = false;
                    bloquer()
                } else {
                    // SI CONDITION PAS RESPECTÉ ALORS JEU CONTINUE 
                    nextPlayer();
                }
            }
        });
    }
    //Joueurs
    function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        //Réatribution des points à 0 lors du changement de joueur
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
    }


//Son et Musique ---------------------------------------------------

//Son roulement de de
function soundroll(){
    let audio = new Audio('./Son&Musique/soundeffect/sondé.mp3');
    audio.play();
    audio.volume = 0.5;
}
//son echec
function soundfail(){
    let audio = new Audio('./Son&Musique/soundeffect/fail.mp3');
    audio.play();
    audio.volume = 0.5;
}
//Son ambiance
function soundback(){
    let audio = new Audio('./Son&Musique/soundeffect/back_sound.mp4');
    audio.play();
    audio.volume = 0.1;
    audio.loop=true
}
//Son degat
function damage(){
    let audio = new Audio('./Son&Musique/soundeffect/damage.mp3');
    audio.play();
    audio.volume = 0.3;
}
//Son de victoire
function soundwin(){
    let audio = new Audio('./Son&Musique/soundeffect/win-sound-effect-no-copyright.mp3');
    audio.play();
    audio.volume = 0.3;
}
