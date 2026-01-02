const button = document.querySelector('button');
const text = document.querySelector('textarea');

function TextToSpeech() {
    const synth = window.speechSynthesis();
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);

}
button.addEventListener('clicked', TextToSpeech);