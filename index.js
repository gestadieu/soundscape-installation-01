const { RaspiIO } = require("raspi-io");

const { five, Expander, Sensor } = require("johnny-five");

const board = new five.Board({
  io: new RaspiIO(),
});

const omx = require("node-omxplayer");
let player = omx();

let level1 = 0,
  level2 = 0;

board.on("ready", () => {
  // Button Pre-Pandemic
  // GPIO18 - Physical Pin P1-12 - Wiring Pi 1
  const button1 = new five.Button({
    pin: 1,
    isPullup: true,
  });

  // Button During Pandemic
  const button2 = new five.Button({
    pin: 2,
    isPullup: true,
  });

  button1.on("down", () => {
    level1 = 1;
    playVideo();
  });

  button2.on("down", () => {
    level1 = 2;
    playVideo();
  });

  // ADC Chip
  // const adc = new five.Board.Virtual(
  //   new Expander("PCF8591")
  // );

  // Potentiometer to control volume
  // const pot = new Sensor({
  //   pin: "A0",
  //   board: adc
  // });

  // pot.on("change", () => {
  //   const {
  //     value,
  //     raw
  //   } = pot;
  //   console.log("Sensor: ");
  //   console.log("  value  : ", value);
  //   console.log("  raw    : ", raw);
  //   console.log("-----------------");
  // five.Fn.map(500, 0, 1000, 0, 255); // --> 127
  // if (preValue < value) { player.volUp(); }
  // else { player.volDown(); }
  // });

  // Joystick
  // const joystick = new five.Joystick({
  //   pins: ['A0', 'A1'],
  //   board: adc
  // })

  // joystick.on('change', () => {
  //   console.log(this.x, this.y);
  //   level2 = this.x;
  //   playVideo();
  // })

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
  if (level1 && level2) {
    player.newSource(`videos/${level1}-0${level2}.mp4`);
    level1 = level2 = 0;
  }

  //   setTimeout(() => {
  //     player.quit();
  // }, 2000)
}
