// Array of tracks
const tracks = [
    {
      title: "Hall Of Fame",
      artist: "The Script",
      src: "Hall.mp3",
      cover: "Hall Image.jpg",
    },
    {
      title: "Waving Flag",
      artist: "K'naan",
      src: "WFlag.mp3",
      cover: "flag.jpg",
    },
    {
      title: "Avicii-the-night",
      artist: "Avicii",
      src: "Night.mp3",
      cover: "Night.jpeg",
    },
  ];
  
  let currentTrackIndex = 0;
  const audioPlayer = document.getElementById("audio-player");
  const trackTitle = document.getElementById("track-title");
  const trackArtist = document.getElementById("track-artist");
  const albumCover = document.querySelector(".album-cover");
  const playPauseButton = document.getElementById("play-pause");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const progressBar = document.getElementById("progress-bar");
  const currentTime = document.getElementById("current-time");
  const duration = document.getElementById("duration");
  
  // Load the current track
  function loadTrack(index) {
    const track = tracks[index];
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    albumCover.src = track.cover;
    audioPlayer.src = track.src;
  }
  
  loadTrack(currentTrackIndex);
  
  // Play or pause track
  function togglePlayPause() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseButton.textContent = "⏸";
    } else {
      audioPlayer.pause();
      playPauseButton.textContent = "▶️";
    }
  }
  
  // Previous track
  function prevTrack() {
    currentTrackIndex =
      currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
    playPauseButton.textContent = "⏸";
  }
  
  // Next track
  function nextTrack() {
    currentTrackIndex =
      currentTrackIndex === tracks.length - 1 ? 0 : currentTrackIndex + 1;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
    playPauseButton.textContent = "⏸";
  }
  
  // Update progress bar
  function updateProgress() {
    progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    currentTime.textContent = formatTime(audioPlayer.currentTime);
    duration.textContent = formatTime(audioPlayer.duration || 0);
  }
  
  // Format time in mm:ss
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }
  
  // Seek track
  function seekTrack() {
    audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
  }
  
  // Event listeners
  playPauseButton.addEventListener("click", togglePlayPause);
  prevButton.addEventListener("click", prevTrack);
  nextButton.addEventListener("click", nextTrack);
  audioPlayer.addEventListener("timeupdate", updateProgress);
  progressBar.addEventListener("input", seekTrack);
  