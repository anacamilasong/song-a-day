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
  },

  "08-03": {
    title: "Dancing in the Moonlight",
    artist: "Toploader",
    spotifyId: "1OzY7RRZh3EcIKn7VKZUTx",
    note: ""
  },
  "08-04": {
    title: "Hey There Delilah",
    artist: "Plain White T's",
    spotifyId: "4RCWB3V8V0dignt99LZ8vH",
    note: ""
  },
  "08-05": {
    title: "American Pie",
    artist: "Don McLean",
    spotifyId: "6kHqtT3fNwPyhpUQedeT9N",
    note: ""
  },
  "08-06": {
    title: "Shotgun",
    artist: "George Ezra",
    spotifyId: "4ofwffwvvnbSkrMSCKQDaC",
    note: ""
  },
  "08-07": {
    title: "Friday I'm in Love",
    artist: "The Cure",
    spotifyId: "0lxt6J01WBpovNFVF87Yqa",
    note: ""
  },
  "08-08": {
    title: "Can I Call You Tonight?",
    artist: "Dayglow",
    spotifyId: "61OJxhoY3Ix50rYVKo8zRK",
    note: ""
  },
  "08-09": {
    title: "Don't Look Back in Anger",
    artist: "Oasis",
    spotifyId: "7ppPZa3TRUSGKaks9wH7VT",
    note: ""
  },
  "08-10": {
    title: "Moves Like Jagger",
    artist: "Maroon 5 & Christina Aguilera",
    spotifyId: "2IDDy8kQ6MFlzAbuRSy0xJ",
    note: ""
  },
  "08-11": {
    title: "Africa",
    artist: "Toto",
    spotifyId: "2374M0fQpWi3dLnB54qaLX",
    note: ""
  },
  "08-12": {
    title: "Burning Love",
    artist: "Elvis Presley",
    spotifyId: "7zMUCLm1TN9o9JlLISztxO",
    note: ""
  },
  "08-13": {
    title: "Sweet Caroline",
    artist: "Neil Diamond",
    spotifyId: "6PHf8qq1n8mWplJ9nEZ9ED",
    note: ""
  },
  "08-14": {
    title: "Should I Stay or Should I Go",
    artist: "The Clash",
    spotifyId: "39shmbIHICJ2Wxnk1fPSdz",
    note: ""
  },
  "08-15": {
    title: "Human Nature",
    artist: "Michael Jackson",
    spotifyId: "3tzdhGenyb8qTTWSEMH3en",
    note: ""
  },
  "08-16": {
    title: "You Get What You Give",
    artist: "New Radicals",
    spotifyId: "4lU7ZRgUSPLYFG9QMfmbYx",
    note: ""
  },
  "08-17": {
    title: "Budapest",
    artist: "George Ezra",
    spotifyId: "3vcOnsXtkKL9SziNHfIIMx",
    note: ""
  },
  "08-18": {
    title: "Man in the Mirror",
    artist: "Michael Jackson",
    spotifyId: "09rGxharZHL2E027qAUtZj",
    note: ""
  },
  "08-19": {
    title: "Mr. Blue Sky",
    artist: "Electric Light Orchestra",
    spotifyId: "7EuIxTciQMbMAOb4r468bX",
    note: ""
  },
  "08-20": {
    title: "Heroes",
    artist: "David Bowie",
    spotifyId: "7Jh1bpe76CNTCgdgAdBw4Z",
    note: ""
  },
  "08-21": {
    title: "Juramento Eterno de Sal",
    artist: "Álvaro De Luna",
    spotifyId: "23E53f3C9SJ9MqBh1f6hEw",
    note: ""
  },
  "08-22": {
    title: "Use Somebody",
    artist: "Kings of Leon",
    spotifyId: "5VGlqQANWDKJFl0MBG3sg2",
    note: ""
  },
  "08-23": {
    title: "Last Train to London",
    artist: "Electric Light Orchestra",
    spotifyId: "3kglRq6t6F0ZUs1SO5jKFf",
    note: ""
  },
  "08-24": {
    title: "Lemon Tree",
    artist: "Fool's Garden",
    spotifyId: "4fXGWiVhlOLdhwRDP6pIFG",
    note: ""
  },
  "08-25": {
    title: "WHERE IS MY HUSBAND!",
    artist: "RAYE",
    spotifyId: "55lijDD6OAjLFFUHU9tcDm",
    note: ""
  },
  "08-26": {
    title: "Payphone",
    artist: "Maroon 5 ft. Wiz Khalifa",
    spotifyId: "6f5HCpC3euwFQIVO4eTx2k",
    note: ""
  },
  "08-27": {
    title: "Footloose",
    artist: "Kenny Loggins",
    spotifyId: "1WjcKanuC01nPJv5vACzEz",
    note: ""
  },
  "08-28": {
    title: "Cheri Cheri Lady",
    artist: "Modern Talking",
    spotifyId: "2aEuA8PSqLa17Y4hKPj5rr",
    note: ""
  },
  "08-29": {
    title: "Bitter Sweet Symphony",
    artist: "The Verve",
    spotifyId: "5yEPxDjbbzUzyauGtnmVEC",
    note: ""
  },
  "08-30": {
    title: "Sunday Morning",
    artist: "Maroon 5",
    spotifyId: "5qII2n90lVdPDcgXEEVHNy",
    note: ""
  },
  "08-31": {
    title: "Mr. Loverman",
    artist: "Shabba Ranks & Deborah Glasgow",
    spotifyId: "5IYvn5BMdZ4Or8HV3N8rCQ",
    note: ""
  }
};
