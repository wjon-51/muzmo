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

const storageKey = "muzmo-user";
const audio = document.getElementById('audio');
const search = document.getElementById('search');
const grid = document.getElementById('music-grid');
const toast = document.getElementById('toast');
const liked = new Set();
let activeMood = 'All';
let currentIndex = 0;
let shuffleOn = false;
let repeatOn = false;
let toastTimer;

function showToast(message) {
  if (!toast) return;
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

function setAuthMode(mode) {
  const modal = document.getElementById('auth-modal');
  const title = document.getElementById('auth-title');
  const subtitle = document.getElementById('auth-subtitle');
  const submit = document.getElementById('auth-submit');
  const nameField = document.getElementById('auth-name-field');
  const authForm = document.getElementById('auth-form');
  if (!modal || !title || !subtitle || !submit || !authForm) return;

  const isSignup = mode === 'signup';
  title.textContent = isSignup ? 'Create your account' : 'Welcome back';
  subtitle.textContent = isSignup
    ? 'Start your curated listening life with MUZMO.'
    : 'Pick up where you left off.';
  submit.textContent = isSignup ? 'Create account' : 'Log in';
  if (nameField) nameField.classList.toggle('hidden', !isSignup);
  authForm.dataset.mode = mode;
}

function openAuthModal(mode = 'login') {
  const modal = document.getElementById('auth-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  setAuthMode(mode);
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || 'null');
  } catch {
    return null;
  }
}

function updateAuthUI() {
  const user = getStoredUser();
  const userPills = document.querySelectorAll('.user-pill');
  const authButtons = document.querySelectorAll('[data-auth]');

  userPills.forEach((pill) => {
    if (user) {
      const name = user.name || 'Music lover';
      pill.classList.remove('hidden');
      pill.innerHTML = `
        <div class="profile-avatar small">${name.charAt(0).toUpperCase()}</div>
        <div class="profile-copy">
          <strong>${name}</strong>
          <span>Logged in</span>
        </div>
      `;
    } else {
      pill.classList.add('hidden');
      pill.innerHTML = '';
    }
  });

  authButtons.forEach((button) => {
    button.classList.toggle('hidden', !!user);
  });
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const mode = form.dataset.mode || 'login';
  const nameInput = document.getElementById('auth-name');
  const emailInput = document.getElementById('auth-email');
  const passwordInput = document.getElementById('auth-password');

  if (!emailInput || !passwordInput) return;

  const payload = {
    name: mode === 'signup' ? (nameInput?.value || 'Music lover') : (getStoredUser()?.name || 'Music lover'),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };

  if (!payload.email || !payload.password) return;

  localStorage.setItem(storageKey, JSON.stringify(payload));
  updateAuthUI();
  closeAuthModal();
  showToast(mode === 'signup' ? 'Account created' : 'Logged in');
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

  const authTrigger = event.target.closest('[data-auth]');
  if (authTrigger) {
    openAuthModal(authTrigger.dataset.auth);
    return;
  }

  const closeTrigger = event.target.closest('[data-close-auth]');
  if (closeTrigger) {
    closeAuthModal();
  }
});

const playButton = document.getElementById('play-button');
if (playButton) playButton.addEventListener('click', togglePlayback);

document.getElementById('next-button')?.addEventListener('click', nextTrack);
document.getElementById('prev-button')?.addEventListener('click', prevTrack);

document.getElementById('shuffle-button')?.addEventListener('click', () => {
  shuffleOn = !shuffleOn;
  const shuffleButton = document.getElementById('shuffle-button');
  if (shuffleButton) shuffleButton.style.color = shuffleOn ? '#d2f88b' : '#a9b2bf';
  showToast(shuffleOn ? 'Shuffle on' : 'Shuffle off');
});

document.getElementById('repeat-button')?.addEventListener('click', () => {
  repeatOn = !repeatOn;
  audio.loop = repeatOn;
  const repeatButton = document.getElementById('repeat-button');
  if (repeatButton) repeatButton.style.color = repeatOn ? '#d2f88b' : '#a9b2bf';
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
  if (event.key === 'Escape') closeAuthModal();
});

const authForm = document.getElementById('auth-form');
if (authForm) authForm.addEventListener('submit', handleAuthSubmit);

const authModeButtons = document.querySelectorAll('[data-auth-mode]');
authModeButtons.forEach((button) => {
  button.addEventListener('click', () => setAuthMode(button.dataset.authMode));
});

audio.volume = 0.75;
renderTracks();
setPlayButtonState();
updateNowPlaying(currentIndex);
updateAuthUI();

if (document.body.dataset.page === 'auth') {
  const authPageForm = document.getElementById('auth-page-form');
  if (authPageForm) {
    authPageForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const nameInput = document.getElementById('auth-page-name');
      const emailInput = document.getElementById('auth-page-email');
      const passwordInput = document.getElementById('auth-page-password');
      const mode = authPageForm.dataset.mode || 'login';
      const payload = {
        name: mode === 'signup' ? (nameInput?.value || 'Music lover') : (getStoredUser()?.name || 'Music lover'),
        email: emailInput.value.trim(),
        password: passwordInput.value.trim()
      };
      if (!payload.email || !payload.password) return;
      localStorage.setItem(storageKey, JSON.stringify(payload));
      window.location.href = 'index.html';
    });
  }
}

window.addEventListener('DOMContentLoaded', updateAuthUI);

const libraryGrid = document.getElementById('library-grid');
if (libraryGrid) {
  const libraryTracks = tracks.slice(0, 8);
  libraryGrid.innerHTML = libraryTracks.map((track, idx) => `
    <article class="library-cell" data-index="${idx}">
      <img src="${track.cover}" alt="${track.title} cover" />
      <h3>${track.title}</h3>
      <p>${track.artist}</p>
    </article>
  `).join('');

  libraryGrid.addEventListener('click', (event) => {
    const card = event.target.closest('[data-index]');
    if (card) playTrack(Number(card.dataset.index));
  });
}
