const micButton = document.getElementById("mic");

// Toggle mic active state on click
micButton.addEventListener("click", () => {
  micButton.classList.toggle("mic-active");

  toggleMic();
});
const playBtn = document.querySelector(".playback");
let canRecord = false,
  isRecording = false;
let recorder = null;
let chunks = [];
function setUpAudio() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
      })
      .then(setUpStream)
      .catch((error) => console.error(error.message));
  }
}
function setUpStream(stream) {
  recorder = new MediaRecorder(stream);
  recorder.ondataavailable = (e) => {
    chunks.push(e.data);
  };
  recorder.onstop = (e) => {
    const blob = new Blob(chunks, { type: "audio/ogg" });
    chunks = [];
    const audioURL = window.URL.createObjectURL(blob);
    playBtn.src = audioURL;
  };
}
function toggleMic() {
  if (isRecording) {
    // Stop recording if already recording
    recorder.stop();
    isRecording = false;
  } else {
    // Start recording
    recorder.start();
    isRecording = true;
  }
}
setUpAudio();
