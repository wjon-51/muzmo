const tracks = [
  { title: "Midnight City", artist: "M83", mood: "Dreamy", cover: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { title: "Golden Hour", artist: "JVKE", mood: "Feel good", cover: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=600&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { title: "Ocean Drive", artist: "Duke Dumont", mood: "Chill", cover: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { title: "Sunset Lover", artist: "Petit Biscuit", mood: "Dreamy", cover: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=600&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
  { title: "Weightless", artist: "Marconi Union", mood: "Focus", cover: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
  { title: "A Walk", artist: "Tycho", mood: "Chill", cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
  { title: "Sunset Dreams", artist: "Sundream", mood: "Feel good", cover: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
  { title: "Night Owl", artist: "Galimatias", mood: "Focus", cover: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" }
];

const audio = document.getElementById('audio');
const search = document.getElementById('search');
const grid = document.getElementById('music-grid');
const toast = document.getElementById('toast');
const liked = new Set();
let activeMood = 'All';
let currentIndex = -1;
let shuffleOn = false;
let repeatOn = false;
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function formatTime(value) {
  if (!Number.isFinite(value)) return '0:00';
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

function getVisibleTracks() {
  const query = (search ? search.value : '').trim().toLowerCase();
  return tracks.filter((track) => {
    const matchMood = activeMood === 'All' || track.mood === activeMood;
    const matchText = `${track.title} ${track.artist} ${track.mood}`.toLowerCase().includes(query);
    return matchMood && matchText;
  });
}

function renderTracks() {
  if (!grid) return;
  const visible = getVisibleTracks();

  grid.innerHTML = visible.length
    ? visible.map((track) => {
        const index = tracks.indexOf(track);
        return `
          <article class="track-card" data-index="${index}">
            <div class="cover-wrap">
              <img src="${track.cover}" alt="${track.title} cover" />
              <button class="play-badge" type="button" data-play-index="${index}" aria-label="Play ${track.title}">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </button>
            </div>
            <div class="card-copy">
              <h3>${track.title}</h3>
              <p>${track.artist} · ${track.mood}</p>
            </div>
          </article>
        `;
      }).join('')
    : '<div class="empty-note">No tracks match this search yet.</div>';
}

function updateNowPlaying(index) {
  if (index < 0 || index >= tracks.length) return;
  const track = tracks[index];
  const nowTitle = document.getElementById('now-title');
  const nowArtist = document.getElementById('now-artist');
  const nowCover = document.getElementById('now-cover');
  const likeButton = document.getElementById('like-button');

  if (nowTitle) nowTitle.textContent = track.title;
  if (nowArtist) nowArtist.textContent = track.artist;
  if (nowCover) nowCover.src = track.cover;
  if (likeButton) likeButton.style.color = liked.has(track.title) ? '#d2f88b' : '#a9b2bf';
}

function setPlayButtonState() {
  const playButton = document.getElementById('play-button');
  if (!playButton) return;
  const paused = audio.paused;
  playButton.innerHTML = paused
    ? '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>';
  playButton.setAttribute('aria-label', paused ? 'Play' : 'Pause');
}

function playTrack(index) {
  if (index < 0 || index >= tracks.length) return;
  currentIndex = index;
  const track = tracks[index];
  audio.src = track.audio;
  audio.play();
  updateNowPlaying(index);
  renderTracks();
}

function togglePlayback() {
  if (currentIndex === -1) return playTrack(0);
  if (audio.paused) audio.play(); else audio.pause();
}

function nextTrack() {
  if (tracks.length === 0) return;
  if (shuffleOn) {
    let next = currentIndex;
    while (next === currentIndex) next = Math.floor(Math.random() * tracks.length);
    playTrack(next);
  } else {
    playTrack((currentIndex + 1) % tracks.length);
  }
}

function prevTrack() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }
  playTrack((currentIndex - 1 + tracks.length) % tracks.length);
}

if (search) {
  search.addEventListener('input', renderTracks);
}

const filterButtons = document.querySelectorAll('.filter-chip');
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeMood = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    renderTracks();
  });
});

const clearFilters = document.getElementById('clear-filters');
if (clearFilters) {
  clearFilters.addEventListener('click', () => {
    activeMood = 'All';
    if (search) search.value = '';
    filterButtons.forEach((item) => item.classList.toggle('active', item.dataset.filter === 'All'));
    renderTracks();
  });
}

document.addEventListener('click', (event) => {
  const play = event.target.closest('[data-play-index]');
  if (play) {
    playTrack(Number(play.dataset.playIndex));
    return;
  }

  const scrollTrigger = event.target.closest('[data-scroll]');
  if (scrollTrigger) {
    const target = document.getElementById(scrollTrigger.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }
});

const playButton = document.getElementById('play-button');
if (playButton) playButton.addEventListener('click', togglePlayback);

document.getElementById('next-button')?.addEventListener('click', nextTrack);
document.getElementById('prev-button')?.addEventListener('click', prevTrack);

document.getElementById('shuffle-button')?.addEventListener('click', () => {
  shuffleOn = !shuffleOn;
  document.getElementById('shuffle-button').style.color = shuffleOn ? '#d2f88b' : '#a9b2bf';
  showToast(shuffleOn ? 'Shuffle on' : 'Shuffle off');
});

document.getElementById('repeat-button')?.addEventListener('click', () => {
  repeatOn = !repeatOn;
  audio.loop = repeatOn;
  document.getElementById('repeat-button').style.color = repeatOn ? '#d2f88b' : '#a9b2bf';
  showToast(repeatOn ? 'Repeat on' : 'Repeat off');
});

document.getElementById('like-button')?.addEventListener('click', () => {
  if (currentIndex === -1) {
    showToast('Pick a track first');
    return;
  }
  const title = tracks[currentIndex].title;
  if (liked.has(title)) {
    liked.delete(title);
    showToast(`${title} removed from liked songs`);
  } else {
    liked.add(title);
    showToast(`${title} added to liked songs`);
  }
  updateNowPlaying(currentIndex);
});

document.getElementById('volume')?.addEventListener('input', (event) => {
  audio.volume = Number(event.target.value);
});

document.getElementById('progress')?.addEventListener('input', (event) => {
  if (!Number.isFinite(audio.duration) || audio.duration === 0) return;
  audio.currentTime = (Number(event.target.value) / 100) * audio.duration;
});

audio.addEventListener('timeupdate', () => {
  const progress = document.getElementById('progress');
  const current = document.getElementById('current-time');
  const duration = document.getElementById('duration');
  if (current) current.textContent = formatTime(audio.currentTime);
  if (duration) duration.textContent = formatTime(audio.duration);
  if (progress && Number.isFinite(audio.duration) && audio.duration > 0) {
    progress.value = (audio.currentTime / audio.duration) * 100;
  }
});

audio.addEventListener('play', setPlayButtonState);
audio.addEventListener('pause', setPlayButtonState);
audio.addEventListener('ended', nextTrack);

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    if (search) search.focus();
  }
  if (event.code === 'Space' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    togglePlayback();
  }
});

audio.volume = 0.75;
renderTracks();
setPlayButtonState();
updateNowPlaying(0);
