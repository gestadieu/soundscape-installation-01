const { RaspiIO } = require("raspi-io");
const five = require("johnny-five");
const omx = require("node-omxplayer");

var pigpio=require('pigpio');
    pigpio.configureSocketPort(8890);
    // var Gpio=pigpio.Gpio;

let player = omx();
player.on('close', () => {
  if (player.running) {
  player.quit();
  }
})

let level1 = 0,
  level2 = 0;

const board = new five.Board({
  io: new RaspiIO(),
});


board.on("ready", () => {
  // Button Pre-Pandemic
  // GPIO18 - Physical Pin P1-12 - Wiring Pi 1
  const button1 = new five.Button({
    pin: 'P1-18',
    isPullup: true,
  });

  // Button During Pandemic
  // const button2 = new five.Button({
  //   pin: 'P1-16',
  //   isPullup: true,
  // });

  button1.on("down", () => {
    level1 = 1;
    playVideo();
  });

  // button2.on("down", () => {
  //   level1 = 2;
  //   playVideo();
  // });

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
  // if (level1 && level2) {
  //   player.newSource(`videos/${level1}-0${level2}.mp4`);
  //   level1 = level2 = 0;
  // }

  player.newSource('videos/1-01.mp4')

  // setTimeout(() => {
  //   player.quit();
  // }, 5000)
}
