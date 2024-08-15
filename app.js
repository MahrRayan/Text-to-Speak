
const button = document.querySelector("button");
const textarea = document.querySelector("textarea");

button.addEventListener("click", () => {
    let a = new SpeechSynthesisUtterance(textarea.value);
    speechSynthesis.speak(a);
})
