



const MAINBGM = document.getElementById("mainBGM");
const AUDIO_BUTTON = document.getElementById("AUDIO_BUTTON");
const BUTTON_CLICK = document.getElementById("BUTTON_CLICK");

const CARD = document.getElementById("form");
const BUTTON = document.getElementById("button");
const LETTER = document.getElementById("LETTER");
const BODY = document.body;
MAINBGM.volume = 0.2;
AUDIO_BUTTON.volume = 0.4;
BUTTON_CLICK.volume = 0.6;



function clickAudio(){
 AUDIO_BUTTON.currentTime = 0; 
  BUTTON_CLICK.play();
}


function playAudio() {
  AUDIO_BUTTON.currentTime = 0; // Reset the audio to the start
  AUDIO_BUTTON.play();
}

function openForm_BIC_BUILD() {
    document.getElementById("BIC_ANSWER_POPUP").style.display = "block";
  
  }

function closeForm_BIC_ANSWER() {
    document.getElementById("BIC_ANSWER_POPUP").style.display = "none";
  }