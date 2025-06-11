const video = document.getElementById('videoplayer');
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const skipBackBtn = document.getElementById('skipBackBtn');
  const skipForwardBtn = document.getElementById('skipForwardBtn');
  const loopBtn = document.getElementById('loopBtn');
  const qualitySelector = document.getElementById('qualitySelector');
  const subtitleSelector = document.getElementById('subtitleSelector');
  const subtitleTrack = document.getElementById('subtitleTrack');

  const videoSources = {
  high: '/videos/high.mp4',
  mid: '/videos/mid.mp4',
  low: '/videos/low.mp4'
};

// Dynamically load subtitle based on quality + language
function updateSubtitles(quality, language) {
  if (language === 'off') {
    subtitleTrack.mode = 'disabled';
    return;
  }

  subtitleTrack.src = `/subs/${language}-${quality}.vtt`;
  subtitleTrack.mode = 'showing';
}

// Load video and update subtitle together
function loadVideo(quality) {
  const currentTime = video.currentTime;
  const isPaused = video.paused;
  const language = subtitleSelector.value;

  video.src = videoSources[quality];
  video.load();

  video.onloadedmetadata = () => {
    video.currentTime = currentTime;
    if (!isPaused) video.play();
  };

  updateSubtitles(quality, language);
}

// Event Listeners
qualitySelector.addEventListener('change', () => {
  const quality = qualitySelector.value;
  loadVideo(quality);
});


  playBtn.addEventListener('click', () => video.play());
  pauseBtn.addEventListener('click', () => video.pause());
  skipBackBtn.addEventListener('click', () => video.currentTime -= 5);
  skipForwardBtn.addEventListener('click', () => video.currentTime += 5);

  loopBtn.addEventListener('click', () => {
    video.loop = !video.loop;
    loopBtn.textContent = `Loop: ${video.loop ? 'On' : 'Off'}`;
  });

  subtitleSelector.addEventListener('change', () => {
  const language = subtitleSelector.value;
  const quality = qualitySelector.value;
  updateSubtitles(quality, language);
});

  // Initialize video
  loadVideo(qualitySelector.value);

  const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');

// Update progress fill as video plays
video.addEventListener('timeupdate', () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressFill.style.width = `${percent}%`;
});

// Seek video when progress bar is clicked
progressBar.addEventListener('click', (e) => {
  const rect = progressBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickPercent = clickX / rect.width;
  video.currentTime = clickPercent * video.duration;
});
const videoTimer = document.getElementById('videoTimer');

// Format seconds as MM:SS
function formatTime(seconds) {
  const min = Math.floor(seconds / 60).toString().padStart(2, '0');
  const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
}


// Update timer on time update
video.addEventListener('timeupdate', () => {
  const current = formatTime(video.currentTime);
  const total = formatTime(video.duration || 0);
  videoTimer.textContent = `${current} / ${total}`;
});