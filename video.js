
// node-omxplayer
// ------------------------------------------- 

const omx = require("node-omxplayer");
// const player = omx();
// player.newSource("videos/2-01.mp4");

// setTimeout(() => {
//   player.quit();
// }, 5000);

// media-player-controller (MPV or VLC)
// --------------------------------------
const PlayerController = require('media-player-controller');

var player = new PlayerController({
  app: 'mpv',
  media: "videos/black.mp4",
  args: ['--fullscreen=yes','--keep-open=yes']
});


player.launch(err => {
  if(err) {
    return console.error(err.message);
  } else {
    player.load('videos/2-01.mp4')
    console.log('video loaded...')
  }
});

player.on('playback-started', () => {
//   player.pause();
// player.setFullscreen(true);
// player.setVolume(50);
//   setTimeout(() => player.play(), 5000);
console.log('playback-started')
});

player.on('playback', (msg) => {
  console.log(msg)
  if (msg.name == 'eof-reached' && msg.value) {
    console.log('loading new video...')
    player.load('videos/1-01.mp4')
  }
});

player.on("app-launch", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('app-launch...')
  }
});

player.on("app-exit", (err) => {
  if (err) {
    console.error(err);
  }
  console.log("exiting now...");
});

player.on('close', () => { 
  console.log('closing...')
})


