// const PlayerController = require("media-player-controller");

// // var player = new PlayerController({ app: "mpv" });
// var player = new PlayerController({ app: "vlc" });
// // player.setFullscreen(true).keepOpen(true);

// player.opts.media =
//   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
// //player.opts.media = "videos/2-01.mp4";
// // player.load("videos/1-01.mp4");

// player.launch((err) => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.log("everything is fine so far....");
//   }
// });

// player.on("playback", console.log);

// player.on("app-launch", (err) => {
//   if (err) {
//     console.error(err.message);
//   }
// });

// player.on("app-exit", (err) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log("exiting now...");
// });

const omx = require("node-omxplayer");
const player = omx();
player.newSource("videos/2-01.mp4");

// let player = omx('videos/1-01.mp4');

// player.play();
// player.quit();

// setTimeout(() => {
//   player.quit();
// }, 5000);
