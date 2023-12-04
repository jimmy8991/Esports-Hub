let index = 0;
const items = document.querySelectorAll('.news-item');

function showNews() {
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
}

function nextNews() {
    index++;
    if (index >= items.length) {
        index = 0;
    }
    showNews();
}

function prevNews() {
    index--;
    if (index < 0) {
        index = items.length - 1;
    }
    showNews();
}

showNews();

const video = document.querySelector('video');
const playPauseButton = document.querySelector('.play-pause');
const videoSeek = document.querySelector('.video-seek');

playPauseButton.addEventListener('click', togglePlayPause);
video.addEventListener('timeupdate', handleProgress);
videoSeek.addEventListener('input', scrub);

function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = 'Pause';
    } else {
        video.pause();
        playPauseButton.textContent = 'Play';
    }
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    videoSeek.value = percent;
}

function scrub() {
    const scrubTime = (videoSeek.value / 100) * video.duration;
    video.currentTime = scrubTime;
}
