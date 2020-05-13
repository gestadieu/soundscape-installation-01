const PlayerController = require("media-player-controller");

// var player = new PlayerController({ app: "mpv" });
var player = new PlayerController({ app: "vlc" });
/* Path to file or link. Can be changed anytime without creating new player objects */
player.opts.media =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
//videos/2-01.mp4
player.launch((err) => {
  if (err) {
    console.error(err.message);
  }
});

player.on("playback", console.log);

// .load(mediaPath)             // Load new media file (without closing player)
// .setVolume(value)            // Adjust player volume (value 0-100)
// .setFullscreen(isEnabled)    // Enable or disable fullscreen (true or false)
// .keepOpen(isEnabled)         // Keep player open after playback (true or false)

// .on('app-launch')            // Emited on media player app launch
// .on('playback', data)        // Data object with current playback event
// .on('app-exit', code)

// import createVideoPlayer, { AudioOutput, VideoOutput } from "omxplayer-node";
// const OMX = require("omxplayer-node");

// const omxplayer = OMX({
//   display: OMX.VideoOutput.HDMI0,
//   audio: OMX.AudioOutput.jack,
// });

// const omxplayer = createVideoPlayer({
//   display: VideoOutput.HDMI0,
//   audio: AudioOutput.jack,
// });

// omxplayer.open({
//   source: "videos/1-01.mp4",
//   audio: OMX.AudioOutput.HDMI,
//   osd: true,
// });

// from typescript
// "use strict";
// exports.__esModule = true;
// var omxplayer_node_1 = require("omxplayer-node");
// var omxplayer = omxplayer_node_1["default"]({
//   display: omxplayer_node_1.VideoOutput.HDMI0,
//   audio: omxplayer_node_1.AudioOutput.jack,
// });
// omxplayer.open({
//   source: "videos/1-01.mp4",
//   audio: omxplayer_node_1.AudioOutput.HDMI,
//   osd: true,
// });

// omxplayer.pause();
// omxplayer.volUp();
// omxplayer.quit();

// const omx = require("node-omxplayer");
// const player = omx();
// player.newSource("videos/2-01.mp4");

// let player = omx('videos/1-01.mp4');

// player.play();
// player.quit();

// setTimeout(() => {
//   player.quit();
// }, 5000);
