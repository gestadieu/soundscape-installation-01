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
// setTimeout(() => {
//   player.quit();
// }, 5000);
