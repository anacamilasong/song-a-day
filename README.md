# A Song a Day

A calendar homepage where every day of the year links to its own page with a song and a Spotify embed.

## Files

- `index.html` — the calendar (homepage)
- `day.html` — the template used for every single day's page
- `js/data.js` — **the only file you need to edit** to add songs
- `js/calendar.js` / `js/day.js` — logic, you shouldn't need to touch these
- `css/style.css` — all the styling

## Adding a song

Open `js/data.js` and add an entry like this, keyed by month-day:

```js
"03-21": {
  title: "Song Name",
  artist: "Artist Name",
  spotifyId: "4ZtFanR9U6ndgddUvNcjcG",
  note: "Optional line about why you picked it."
},
```

To get the `spotifyId`: open the song in Spotify, click **Share → Copy Song Link**.
You'll get something like `https://open.spotify.com/track/4ZtFanR9U6ndgddUvNcjcG` —
the part after `/track/` is the id.

Days without an entry just show "No song yet" — the site works fine while you're
filling it in gradually.

## Running it locally

No build step needed. Just open `index.html` in a browser, or for a cleaner local
server run (from this folder):

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Putting it online for free

Never done this before? Here's the slow, no-assumptions version using GitHub Pages
(free, no credit card, and it's the option most people land on for this).

### Step 1: Create a GitHub account

1. Go to [github.com](https://github.com) and click **Sign up** (top right).
2. Enter an email, a password, and pick a username. This username is public and
   will end up in your website's URL, so pick something you don't mind showing
   (e.g. `janedoe`, not `janedoe1987xyz`).
3. Verify your email if GitHub asks you to.

### Step 2: Create a new repository

A "repository" (or "repo") is just a project folder that lives on GitHub.

1. Once logged in, click the **+** icon in the top-right corner → **New repository**.
2. Under **Repository name**, type `song-a-day`.
3. Leave it set to **Public**.
4. Do **not** check "Add a README file" — you already have one.
5. Click the green **Create repository** button.

You'll land on an empty repo page with some setup instructions — ignore those, you don't need git for this.

### Step 3: Upload your files

1. On that empty repo page, click **uploading an existing file** (it's a blue link
   in the middle of the page).
2. Now go to the `song-a-day` folder on your computer (the one you downloaded)
   and open it so you can see `index.html`, `day.html`, `README.md`, and the
   `css` and `js` folders inside it.
3. Select **everything inside that folder** — `index.html`, `day.html`,
   `README.md`, `css`, and `js` — and drag all of it into the browser window
   at once, onto the area that says "Drag files here to add them to your repository."
   - Important: drag the *contents* of the folder, not the `song-a-day` folder
     itself. If you drag the folder itself, GitHub will nest everything one level
     too deep and the site won't load correctly.
   - Dragging the `css` and `js` folders in as folders is fine — GitHub keeps
     their contents and structure intact.
4. Scroll down and click the green **Commit changes** button. Keep the default
   message, that's fine.
5. Wait a few seconds — you should now see `index.html`, `day.html`, `css`, and
   `js` listed as files/folders in your repo.

### Step 4: Turn on GitHub Pages

1. In your repo, click the **Settings** tab (top menu, gear-shaped area of the nav).
2. In the left sidebar, click **Pages**.
3. Under "Build and deployment" → **Source**, make sure it's set to
   **Deploy from a branch**.
4. Just below that, under **Branch**, use the dropdown to pick `main`, leave
   the folder as `/ (root)`, then click **Save**.
5. Wait about 1–2 minutes. Refresh the page — a green box should appear near
   the top saying your site is live, with a link that looks like:
   `https://your-username.github.io/song-a-day/`
6. Click that link. That's your website, live and public.

### Updating the site later (adding more songs)

1. In your repo, click into the `js` folder, then click on `data.js`.
2. Click the pencil/edit icon (top right of the file view).
3. Add your new song entries the same way as in the "Adding a song" section above.
4. Scroll down, click **Commit changes**. The live site updates automatically
   within a minute or so — no need to redo the Pages setup.

### If something looks broken

- **Blank page or 404**: double check the files are directly inside the repo
  (not inside an extra `song-a-day/song-a-day/` subfolder from Step 3).
- **Calendar loads but songs don't show**: check `js/data.js` for a typo like a
  missing comma or quotation mark — one small typo there can break the whole file.
- Changes not showing up yet: GitHub Pages can take a minute or two after each
  commit, and your browser may be showing a cached version — try a hard refresh
  (Ctrl+Shift+R / Cmd+Shift+R).

**Alternatives, if you'd rather skip accounts entirely for a quick test:**
- [Netlify Drop](https://app.netlify.com/drop) — drag the whole `song-a-day`
  folder onto the page, get a live link in seconds. No account needed, though
  the link is temporary unless you sign up.
- [Cloudflare Pages](https://pages.cloudflare.com/) — connect a GitHub repo,
  auto-deploys on every change, similar setup to GitHub Pages.

Any of these gives you a real public URL with no cost. If you later want a custom
domain (like `yourname.com` instead of `yourname.github.io`), that's a separate
~$10–15/year purchase from a registrar — optional, not required.

## Ideas for later

- Add a "shuffle" button that jumps to a random day
- Color-code days by genre or mood
- Add Open Graph meta tags per day so shared links preview nicely on social media
- Keep a running note/journal — this doubles nicely as a music diary
