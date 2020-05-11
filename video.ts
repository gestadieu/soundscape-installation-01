import createVideoPlayer, { AudioOutput, VideoOutput } from "omxplayer-node";

const omxplayer = createVideoPlayer({
  display: VideoOutput.HDMI0,
  audio: AudioOutput.jack,
});

omxplayer.open({
  source: "videos/1-01.mp4",
  audio: AudioOutput.HDMI,
  osd: true,
});

// omxplayer.pause();
// omxplayer.volUp();
// omxplayer.quit();

const omx = require("node-omxplayer");
const player = omx();
player.newSource("videos/2-01.mp4");

// let player = omx('videos/1-01.mp4');

// player.play();
// player.quit();

setTimeout(() => {
  player.quit();
}, 5000);
