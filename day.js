const LAYOUT_YEAR = 2028; // leap year, used only to walk day-to-day across Feb 29
const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function pad(n){ return String(n).padStart(2, "0"); }

function parseDateParam(){
  const params = new URLSearchParams(window.location.search);
  const raw = params.get("date");
  if (raw && /^\d{2}-\d{2}$/.test(raw)) return raw;
  const d = new Date();
  return `${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
}

function keyToDate(key){
  const [m, d] = key.split("-").map(Number);
  return new Date(LAYOUT_YEAR, m - 1, d);
}

function dateToKey(date){
  return `${pad(date.getMonth()+1)}-${pad(date.getDate())}`;
}

function shiftDay(key, delta){
  const d = keyToDate(key);
  d.setDate(d.getDate() + delta);
  return dateToKey(d);
}

function render(){
  const key = parseDateParam();
  const date = keyToDate(key);
  const song = SONGS[key];

  document.getElementById("counter").textContent = key.replace("-", ".");
  document.getElementById("date-label").textContent = `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}`;

  const body = document.getElementById("song-body");

  if (song){
    body.innerHTML = `
      <h1 class="song-title">${escapeHtml(song.title)}</h1>
      <p class="song-artist">${escapeHtml(song.artist)}</p>
      <div class="player-window">
        <iframe src="https://open.spotify.com/embed/track/${encodeURIComponent(song.spotifyId)}"
                width="100%" height="152" frameborder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"></iframe>
      </div>
      ${song.note ? `<div class="note-card">${escapeHtml(song.note)}</div>` : ""}
    `;
  } else {
    body.innerHTML = `
      <div class="empty-state">
        <p>No song yet for this day.</p>
        <a class="spotify-fallback" href="https://open.spotify.com" target="_blank" rel="noopener">Open Spotify</a>
      </div>
    `;
  }

  const prevKey = shiftDay(key, -1);
  const nextKey = shiftDay(key, 1);
  document.getElementById("prev-link").href = `day.html?date=${prevKey}`;
  document.getElementById("next-link").href = `day.html?date=${nextKey}`;
}

function escapeHtml(str){
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

document.addEventListener("DOMContentLoaded", render);
