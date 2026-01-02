const button = document.querySelector("button");
const textarea = document.querySelector("textarea");

const textToSpeech = () => {
    const synth = window.speechSynthesis;
    const text = textarea.value;
    const isSpeaking = true;

    if(!synth.speaking && text) {
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    }

    if(text.length > 50) {
        if(synth.speaking && isSpeaking) {
            button.innerText = "Pause";
            synth.resume();
            isSpeaking = false;
        }else {
            button.innerText = "Resume";
            synth.pause();
            isSpeaking = true;
        }
    }else {
        isSpeaking = false;
        button.innerText = "Speaking";
    }

    setInterval( () => {
        if(!synth.speaking && !isSpeaking) {
            isSpeaking = true;
            button.innerText = "Convert To Speech";
        }
    })
};

button.addEventListener("click", textToSpeech);