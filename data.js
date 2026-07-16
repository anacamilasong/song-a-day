/*
  SONGS
  -----
  One entry per calendar day, keyed "MM-DD" (always two digits, zero-padded).
  This is the ONLY file you need to touch to add your 365 songs.

  Fields:
    title      - song title (shown on the day page)
    artist     - artist name
    spotifyId  - the code at the end of a Spotify track link.
                 e.g. https://open.spotify.com/track/4ZtFanR9U6ndgddUvNcjcG
                 -> spotifyId is "4ZtFanR9U6ndgddUvNcjcG"
                 To get this: open the song in Spotify -> Share -> Copy Song Link.
    note       - optional. A line about why you picked it. Leave "" if you don't want one.

  A day with no entry here will simply show "No song yet" on the site,
  so you can fill this in gradually — the site works fine half-empty.
*/

const SONGS = {
  "01-01": {
    title: "Here Comes the Sun",
    artist: "The Beatles",
    spotifyId: "45yEy5WJywhJ3sDI28ajTm",
    note: "A new year deserves a song about things getting better."
  },
  "02-14": {
    title: "good 4 u",
    artist: "Olivia Rodrigo",
    spotifyId: "4ZtFanR9U6ndgddUvNcjcG",
    note: "Not every Valentine's song has to be sweet."
  },
  "07-16": {
    title: "Blinding Lights",
    artist: "The Weeknd",
    spotifyId: "0VjIjW4GlUZAMYd2vXMi3b",
    note: "Today's pick — synth-pop perfection."
  },
  "10-31": {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    spotifyId: "7tFiyTwD0nx5a1eklYtX2J",
    note: "Six minutes is a long time for a Halloween song, but this one earns it."
  }
};
