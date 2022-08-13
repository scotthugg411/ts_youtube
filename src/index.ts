import open from "open";
console.log("Starting App...");

type SongInfo = { name: string; band: string; url: string };

const playlist: SongInfo[] = [
  {
    name: "Sometime Around Midnight",
    band: "The Airborne Toxic Event",
    url: "https://www.youtube.com/watch?v=UYPoMjR6-Ao&list=RDucX9hVCQT_U&index=36",
  },
  {
    name: "Move Along",
    band: "The All-American Rejects",
    url: "https://www.youtube.com/watch?v=XleOkGsYgO8&list=RDucX9hVCQT_U&index=13",
  },
  {
    name: "Tongue Tied",
    band: "Grouplove",
    url: "https://www.youtube.com/watch?v=1x1wjGKHjBI&list=RDucX9hVCQT_U&index=15",
  },
];

const why = playlist[0];
const openNewTab = async (song: SongInfo) => {
  // deconstruct playlist[ { } ]
  // const { name, band, url } = song;
  // randomize playlist[index]
  const randomIndex = Math.floor(Math.random() * playlist.length);
  // open playlist random url in default browser
  open(playlist[randomIndex].url);
  console.log(
    `Opening ${playlist[randomIndex].name} by ${playlist[randomIndex].band}`,
  );
};
openNewTab(why);
