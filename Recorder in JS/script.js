const mic = document.querySelector("#mic");
const playback = document.querySelector(".playback");
let recorder = null;
let chunks = [];
let isRecording = false;

mic.addEventListener("click", () => {
  mic.classList.toggle("mic-active");
  audioToggle();
});

// Set up audio
function setAudio() {
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(setStream)
    .catch((err) => {
      console.error("Error accessing microphone:", err);
      alert("Please allow microphone access.");
    });
}

// Stream setup and recorder initialization
function setStream(stream) {
  recorder = new MediaRecorder(stream);
  recorder.ondataavailable = (e) => {
    chunks.push(e.data);
  };

  // Automatically triggered when recorder stops
  recorder.onstop = () => {
    const blob = new Blob(chunks, { type: "audio/ogg" });
    chunks = []; // Reset chunks after creating the Blob
    const audioURL = window.URL.createObjectURL(blob);
    playback.src = audioURL;
  };
}

// Toggle start/stop recording based on current state
function audioToggle() {
  if (!recorder) {
    alert("Recorder not initialized. Please allow microphone access.");
    return; // Prevent further execution if recorder is null
  }

  if (isRecording) {
    recorder.stop();
    isRecording = false;
  } else {
    recorder.start();
    isRecording = true;
  }
}

// Initialize audio setup
setAudio();
