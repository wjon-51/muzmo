html {
  color-scheme: dark;
  scroll-behavior: smooth;
}

:root {
  --bg: #090b10;
  --bg-soft: #121722;
  --panel: rgba(21, 25, 35, 0.9);
  --panel-strong: rgba(14, 18, 26, 0.95);
  --panel-alt: rgba(255, 255, 255, 0.03);
  --line: rgba(255, 255, 255, 0.08);
  --line-strong: rgba(196, 245, 107, 0.24);
  --text: #edf2f7;
  --muted: #98a4b5;
  --muted-strong: #dbe4ef;
  --lime: #c9f16a;
  --lime-soft: #dff8ad;
  --shadow: rgba(0, 0, 0, 0.35);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(201, 241, 106, 0.12), transparent 32%),
    linear-gradient(180deg, #05070a 0%, #0b1016 100%);
  color: var(--text);
  font-family: 'Inter', sans-serif;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

#root {
  min-height: 100vh;
}

.app-shell {
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  min-height: 100vh;
}

.sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
  padding: 22px 18px 26px;
  background: rgba(8, 11, 16, 0.94);
  border-right: 1px solid var(--line);
  backdrop-filter: blur(22px);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 8px 22px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -1.2px;
}

.brand-mark {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: linear-gradient(135deg, #e4ffb3, #b9ed67);
  color: #12180d;
  font-size: 17px;
}

.brand-text span {
  color: var(--lime);
}

.nav {
  display: grid;
  gap: 18px;
}

.nav-group {
  display: grid;
  gap: 6px;
}

.nav-label {
  margin: 8px 10px 8px;
  font-size: 10px;
  letter-spacing: 1.6px;
  font-weight: 700;
  text-transform: uppercase;
  color: #7f8b9a;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 11px 12px;
  color: #b3bdc9;
  transition: 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  border-color: rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.025);
  color: white;
}

.nav-icon {
  width: 17px;
  height: 17px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.nav-icon svg {
  width: 100%;
  height: 100%;
  stroke: currentColor;
  fill: none;
}

.nav-item svg {
  width: 17px;
  height: 17px;
}

.side-card {
  margin-top: 26px;
  padding: 16px 15px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.024), rgba(255, 255, 255, 0.014));
}

.side-card strong {
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
}

.side-card p {
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.6;
}

.mini-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  background: rgba(201, 241, 106, 0.12);
  border: 1px solid rgba(201, 241, 106, 0.18);
  color: var(--lime-soft);
  padding: 10px 12px;
  font-size: 11px;
  font-weight: 700;
}

.main-panel {
  padding: 22px 24px 120px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 20px;
}

.searchbar {
  position: relative;
  display: block;
  width: min(500px, 62vw);
}

.searchbar svg {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: #8c96a4;
}

.searchbar input {
  width: 100%;
  height: 46px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  padding: 0 50px 0 42px;
  outline: none;
}

.searchbar input:focus {
  border-color: rgba(201, 241, 106, 0.5);
}

.shortcut {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.018);
  color: #8c96a4;
  padding: 4px 6px;
  font-size: 10px;
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.ghost-button {
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  color: #edf3ff;
  border-radius: 12px;
  padding: 10px 14px;
  font-weight: 700;
  font-size: 12px;
}

.profile-pill {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile-avatar {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #dffca3, #bce96f);
  color: #10150a;
  font-weight: 800;
}

.profile-copy {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.profile-copy strong {
  font-size: 12px;
}

.profile-copy span {
  font-size: 10px;
  color: var(--muted);
}

.hero-panel {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 310px;
  overflow: hidden;
  padding: clamp(26px, 5vw, 56px);
  border: 1px solid rgba(201, 241, 106, 0.12);
  border-radius: 28px;
  background: linear-gradient(120deg, rgba(14, 18, 26, 0.88), rgba(19, 22, 30, 0.7));
  box-shadow: 0 28px 55px rgba(0, 0, 0, 0.28);
}

.hero-panel::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(110deg, rgba(7, 8, 10, 0.9), rgba(7, 8, 10, 0.14)),
    url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
}

.hero-panel::after {
  content: '';
  position: absolute;
  right: -7%;
  top: -18%;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: rgba(201, 241, 106, 0.08);
  border: 1px solid rgba(201, 241, 106, 0.2);
  box-shadow: 0 0 0 32px rgba(201, 241, 106, 0.04), 0 0 0 68px rgba(201, 241, 106, 0.02);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 560px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--lime-soft);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
}

.eyebrow::before {
  content: '';
  width: 20px;
  height: 1px;
  background: var(--lime-soft);
}

.hero-content h1 {
  margin: 16px 0 12px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  line-height: 0.96;
  letter-spacing: -3px;
  font-size: clamp(40px, 5vw, 64px);
}

.hero-content p {
  margin: 0;
  color: rgba(255, 255, 255, 0.84);
  font-size: 14px;
  line-height: 1.8;
  max-width: 480px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
}

.primary-button,
.secondary-button {
  border: 0;
  border-radius: 999px;
  padding: 13px 19px;
  font-weight: 800;
}

.primary-button {
  background: linear-gradient(135deg, #c8f46c, #d9fca9);
  color: #11160d;
  box-shadow: 0 18px 32px rgba(201, 241, 106, 0.2);
}

.secondary-button {
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  color: #edf3ff;
}

.content-section {
  margin-top: 30px;
}

.section-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 14px;
}

.section-head.compact {
  margin-bottom: 16px;
}

.section-head h2 {
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(24px, 2vw, 30px);
  letter-spacing: -0.7px;
}

.section-head small {
  color: var(--muted);
  font-size: 12px;
}

.section-link {
  border: 0;
  background: transparent;
  color: var(--lime-soft);
  font-size: 12px;
  font-weight: 700;
  padding: 0;
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
}

.filter-chip {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.02);
  color: #afbac7;
  padding: 9px 14px;
  font-size: 11px;
  font-weight: 700;
}

.filter-chip.active {
  background: var(--lime);
  border-color: transparent;
  color: #181d12;
}

.track-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.track-card {
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.track-card:hover {
  transform: translateY(-3px);
  border-color: rgba(201, 241, 106, 0.2);
}

.cover-wrap {
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  aspect-ratio: 1;
  background: #1c232d;
}

.cover-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-badge {
  position: absolute;
  right: 12px;
  bottom: 12px;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 50%;
  background: rgba(201, 241, 106, 0.96);
  color: #10160c;
  box-shadow: 0 12px 22px rgba(0, 0, 0, 0.22);
}

.play-badge svg,
.icon-button svg {
  width: 15px;
  height: 15px;
}

.card-copy {
  padding: 12px 3px 4px;
}

.card-meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.card-copy h3 {
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-copy p {
  margin: 6px 0 10px;
  color: var(--muted);
  font-size: 11px;
}

.album-link {
  color: var(--lime-soft);
  font-size: 12px;
  font-weight: 700;
}

.tiny-icon {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 50%;
  background: transparent;
  color: #c9d1db;
}

.playlist-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.playlist-card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: end;
  min-height: 180px;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 24px;
}

.playlist-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(8, 8, 11, 0.12), rgba(8, 8, 11, 0.76));
}

.playlist-card > * {
  position: relative;
  z-index: 1;
}

.playlist-card h3 {
  margin: 0 0 8px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(24px, 2vw, 32px);
  letter-spacing: -1px;
}

.playlist-card p {
  margin: 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.82);
}

.playlist-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  color: var(--lime-soft);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.playlist-tag::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--lime-soft);
}

.playlist-1 { background: url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80') center/cover no-repeat; }
.playlist-2 { background: url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80') center/cover no-repeat; }
.playlist-3 { background: url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80') center/cover no-repeat; }

.feature-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 18px;
}

.spotlight-card {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 18px;
  align-items: center;
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.02);
}

.spotlight-card img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 18px;
}

.spotlight-card h3 {
  margin: 12px 0 10px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(24px, 2vw, 30px);
  letter-spacing: -1px;
}

.spotlight-card p {
  margin: 0 0 18px;
  color: var(--muted);
  line-height: 1.7;
  font-size: 13px;
}

.artist-list {
  display: grid;
  gap: 12px;
}

.artist-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
}

.artist-item img {
  width: 52px;
  height: 52px;
  object-fit: cover;
  border-radius: 14px;
}

.artist-item div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.artist-item strong {
  font-size: 13px;
}

.artist-item span {
  color: var(--muted);
  font-size: 11px;
}

.player-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  display: grid;
  grid-template-columns: minmax(180px, 1.1fr) minmax(220px, 1.8fr) minmax(180px, 1fr);
  gap: 16px;
  align-items: center;
  padding: 12px 22px;
  background: rgba(11, 15, 20, 0.9);
  backdrop-filter: blur(18px);
  border-top: 1px solid var(--line);
}

.player-track,
.player-tools,
.controls-row,
.timeline {
  display: flex;
  align-items: center;
}

.player-track {
  gap: 12px;
  min-width: 0;
}

.player-cover {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  object-fit: cover;
}

.now-copy {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.now-copy strong {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
}

.now-copy span {
  color: var(--muted);
  font-size: 11px;
}

.player-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.controls-row {
  gap: 16px;
  margin-bottom: 8px;
}

.icon-button {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border: 0;
  background: transparent;
  color: #a9b2bf;
  padding: 0;
}

.play-main {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 50%;
  background: #edf7ff;
  color: #111719;
}

.timeline {
  width: min(100%, 520px);
  gap: 10px;
  color: var(--muted);
  font-size: 10px;
  font-variant-numeric: tabular-nums;
}

.timeline input[type='range'],
.player-tools input[type='range'] {
  accent-color: var(--lime);
}

.timeline input[type='range'] {
  width: 100%;
}

.player-tools {
  justify-content: flex-end;
  gap: 12px;
}

.player-tools input[type='range'] {
  width: 100px;
}

.empty-note {
  grid-column: 1 / -1;
  border: 1px dashed rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  padding: 30px;
  text-align: center;
  color: var(--muted);
  font-size: 13px;
}

.album-page,
.page-shell {
  display: grid;
  gap: 24px;
}

.page-header {
  margin: 8px 0 0;
  padding: 22px 20px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.02);
}

.page-header h1 {
  margin: 8px 0 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(30px, 4vw, 46px);
  letter-spacing: -2px;
}

.page-header p {
  margin: 0;
  color: var(--muted);
}

.album-hero {
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  gap: 20px;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.02);
}

.album-cover {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 22px;
}

.album-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.album-copy h1 {
  margin: 12px 0 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(34px, 4vw, 56px);
  letter-spacing: -2px;
}

.album-copy p {
  margin: 8px 0 16px;
  color: var(--muted-strong);
  font-size: 18px;
}

.album-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.album-meta span {
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--muted);
  padding: 7px 11px;
  font-size: 11px;
}

.album-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.track-list {
  display: grid;
  gap: 10px;
  padding: 8px 0;
}

.track-row {
  display: grid;
  grid-template-columns: 42px minmax(0, 1.5fr) 100px 60px 30px;
  align-items: center;
  gap: 12px;
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  padding: 16px 14px;
  text-align: left;
}

.track-index,
.track-row-time,
.track-row-like,
.track-row-mood {
  color: var(--muted);
  font-size: 12px;
}

.track-row-main {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.track-row-main strong {
  font-size: 14px;
}

.track-row-main small {
  color: var(--muted);
  font-size: 11px;
}

.related-wrap {
  margin-top: 6px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.related-card {
  display: grid;
  gap: 10px;
  padding: 12px;
  border-radius: 18px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
}

.related-card img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 14px;
}

.related-card strong {
  font-size: 13px;
}

.related-card span {
  color: var(--muted);
  font-size: 11px;
}

.playlist-hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 20px;
}

.hero-card {
  min-height: 200px;
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: linear-gradient(120deg, rgba(201, 241, 106, 0.12), rgba(255, 255, 255, 0.02));
}

.hero-card h2 {
  margin: 0 0 12px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(26px, 3vw, 38px);
  letter-spacing: -1px;
}

.hero-card p {
  margin: 0 0 16px;
  color: #d0d9e2;
  line-height: 1.7;
}

.hero-card-alt {
  background: linear-gradient(120deg, rgba(56, 86, 122, 0.28), rgba(255, 255, 255, 0.02));
}

.playlist-layout {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.mini-playlist {
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
}

.mini-playlist h3 {
  margin: 0 0 8px;
  font-size: 18px;
}

.mini-playlist p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
  font-size: 12px;
}

.artist-spotlight {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 18px;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.02);
}

.artist-spotlight img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 22px;
}

.artist-spotlight h2 {
  margin: 12px 0 10px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(26px, 3vw, 40px);
  letter-spacing: -1px;
}

.artist-spotlight p {
  margin: 0 0 18px;
  color: #aab4bf;
  line-height: 1.8;
}

.artist-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.artist-card {
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
}

.artist-card img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 14px;
}

.artist-card h3 {
  margin: 14px 0 4px;
  font-size: 16px;
}

.artist-card p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
}

.liked-section {
  display: grid;
  gap: 12px;
}

.library-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.library-card {
  display: grid;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
}

.library-card img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 14px;
}

.library-copy {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.library-copy strong {
  font-size: 14px;
}

.library-copy span {
  color: var(--muted);
  font-size: 11px;
}

.library-actions {
  display: flex;
  gap: 8px;
}

.tiny-action {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  padding: 8px 10px;
  font-size: 11px;
}

.tiny-action.alt {
  color: var(--lime-soft);
}

.library-empty {
  grid-column: 1 / -1;
}

@media (max-width: 1100px) {
  .track-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .playlist-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .feature-grid { grid-template-columns: 1fr; }
  .related-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 900px) {
  .app-shell { grid-template-columns: 1fr; }
  .sidebar { display: none; }
  .main-panel { padding-top: 16px; }
  .topbar { flex-wrap: wrap; }
  .searchbar { width: 100%; }
  .track-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .player-bar { grid-template-columns: minmax(180px, 1fr) minmax(220px, 1.35fr) minmax(120px, 0.8fr); }
  .album-hero { grid-template-columns: 1fr; }
  .playlist-hero, .playlist-layout, .artist-grid { grid-template-columns: 1fr; }
  .artist-spotlight { grid-template-columns: 1fr; }
}

@media (max-width: 560px) {
  .main-panel { padding: 12px 14px 120px; }
  .ghost-button { display: none; }
  .track-grid { grid-template-columns: 1fr; }
  .playlist-grid { grid-template-columns: 1fr; }
  .related-grid { grid-template-columns: 1fr; }
  .player-bar { grid-template-columns: 1fr auto; padding: 10px 12px; }
  .player-controls { grid-column: 1 / -1; }
  .player-tools { display: none; }
  .timeline span { display: none; }
  .timeline { width: 100%; }
  .hero-content h1 { letter-spacing: -2.2px; }
  .spotlight-card { grid-template-columns: 1fr; }
  .library-grid { grid-template-columns: 1fr; }
  .track-row { grid-template-columns: 32px minmax(0, 1fr) 70px 50px 20px; }
  .track-row-mood { display: none; }
  .album-meta { gap: 8px; }
}

@media (prefers-reduced-motion: reduce) {
  * {
    scroll-behavior: auto;
    transition: none !important;
  }
}
