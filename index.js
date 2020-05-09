const { RaspiIO } = require("raspi-io");
const five = require("johnny-five");

const board = new five.Board({
  io: new RaspiIO()
});

const omx = require("node-omxplayer");
let player = omx();

board.on("ready", () => {
  // GPIO18 - Physical Pin P1-12 - Wiring Pi 1
  button = new five.Button({
    pin: 1,
    isPullup: true,
  });

  button.on("down", () => {
    console.log("down...");
    playVideo(1);
  });

  board.on("exit", () => {
    console.log("leaving now...");
    if (player.running) {
      player.quit();
    }
  });
});

function playVideo(nb) {
  console.log("playing video now...");
  // if (player.running) {
  //   player.pause();
  // }
  player.newSource('videos/2-01.mp4');
  //player.newSource("/home/pi/soundscape-01/1-01.mp4");
  // player.play();

//   setTimeout(() => {
//     player.quit();
// }, 2000)
}
