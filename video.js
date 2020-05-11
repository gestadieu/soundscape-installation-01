"use strict";
exports.__esModule = true;
var omxplayer_node_1 = require("omxplayer-node");
var omxplayer = omxplayer_node_1["default"]({
    display: omxplayer_node_1.VideoOutput.HDMI0,
    audio: omxplayer_node_1.AudioOutput.jack
});
omxplayer.open({
    source: "videos/1-01.mp4",
    audio: omxplayer_node_1.AudioOutput.HDMI,
    osd: true
});
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
