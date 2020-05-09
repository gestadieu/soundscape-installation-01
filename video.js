// import createVideoPlayer, {AudioOutput, VideoOutput} from 'omxplayer-node'
const vPlayer = require('omxplayer-node');

// const player = createVideoPlayer({
//     display: VideoOutput.HDMI0,
//     audio: AudioOutput.jack
// })

// player.open({
//     source: '/home/pi/soudscape-01/videos/1-01.mp4',
//     audio: AudioOutput.HDMI,
//     osd: true
// })

// player.pause();
// player.volUp();
// player.quit();

const omx = require('node-omxplayer');
let player = omx();
player.newSource('videos/2-01.mp4');

// let player = omx('videos/1-01.mp4');

// player.play();
// player.quit();

setTimeout(() => {
    player.quit();
}, 5000)