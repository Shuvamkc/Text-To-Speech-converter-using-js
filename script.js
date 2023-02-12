const Text1 = document.getElementById("text1");
const speechBtn = document.getElementById("b1");
isSpeaking = true;

function submit() {
  try {
    if (Text1.value !== " " && Text1.value.length > 0) {
      if (!speechSynthesis.speaking) {
        //It does repeat from middle
        textToSpeech(Text1.value);
      }
      if (Text1.value.length > 80) {
        if (isSpeaking) {
          speechSynthesis.resume();
          isSpeaking = false;
          speechBtn.innerText = " Pause Speech";
        } else {
          speechSynthesis.pause();
          isSpeaking = true;
          speechBtn.innerText = "Resume speech";
        }
        setInterval(() => {
          if (!speechSynthesis && !isSpeaking) {
            isSpeaking = true;
            speechBtn.innerText = "Convert To Speech";
          }
        });
      } else {
        speechBtn.innerText = "Convert To Speech";
      }
    }
  } catch (error) {
    alert("please Type text");
  }
}

function textToSpeech(Text) {
  let utter = new SpeechSynthesisUtterance(Text);
  speechSynthesis.speak(utter);
}
