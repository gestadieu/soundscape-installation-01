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

// setTimeout(() => {
//   player.quit();
// }, 5000);
