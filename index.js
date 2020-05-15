const { RaspiIO } = require("raspi-io");
const five = require("johnny-five");
const omx = require("node-omxplayer");
const PlayerController = require("media-player-controller");

// let pigpio = require("pigpio");
// pigpio.configureSocketPort(8889);

// let player = omx();
// player.on("close", () => {
//   if (player.running) {
//     player.quit();
//   }
// });

let player = new PlayerController({ app: "mpv" });

let level1 = 0,
  level2 = 0;

const board = new five.Board({
  io: new RaspiIO(),
});

board.on("ready", () => {
  const led = new five.Led("P1-7");

  // Button Pre-Pandemic
  // GPIO18 - Physical Pin P1-12 - Wiring Pi 1
  const button1 = new five.Button({
    pin: "P1-18",
    isPullup: true
  });

  // Button During Pandemic
  const button2 = new five.Button({
    pin: 'P1-16',
    isPullup: true
  });

  button1.on("down", () => {
    led.toggle()
    level1 = 1;
    playVideo();
  });

  button2.on("down", () => {
    led.toggle()
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

  // OMX player
  // if (preValue < value) { player.volUp(); }
  // else { player.volDown(); }

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
    led.stop().off();
    if (player.running) {
      player.quit();
      
    }
  });

  board.repl.inject({
    led,
    player
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

  if (level1 == 1) {
    player.opts.media = "videos/2-02.mp4";
    // player.newSource("videos/1-01.mp4");
    level1 = 0;
  }
  if (level1 == 2) {
    // player.newSource("videos/2-01.mp4");
    level1 = 0;
    process.exit(0)
  }
}

player.launch((err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("everything is fine so far....");
  }
});

player.on("playback", console.log);

player.on("app-launch", (err) => {
  if (err) {
    console.error(err.message);
  }
});

player.on("app-exit", (err) => {
  if (err) {
    console.error(err);
  }
  console.log("exiting now...");
});