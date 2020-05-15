const five = require("johnny-five");
const { RaspiIO } = require("raspi-io");

const board = new five.Board({
  io: new RaspiIO(),
});

// let pigpio = require("pigpio");
// pigpio.configureSocketPort(8889);

board.on("ready", () => {
  // GPIO18 - Physical Pin P1-12 - Wiring Pi 1
  const button = new five.Button({
    pin: "P1-18",
    isPullup: true,
  });

  const b2 = new five.Button({
    pin: "P1-16",
    isPullup: true
  })

  const led = new five.Led("P1-7");
  

  button.on("down", () => {
    console.log("down...");
    led.toggle();
  });

  b2.on('down', () => {
    console.log('b2 down...')
    led.toggle()
  })

  // button.on("up", () => {
  //   console.log("up...");
  // });

  // button.on("hold", () => {
  //   console.log("hold...");
  // });

  board.on("exit", function () {
    led.stop().off();
  });

  board.repl.inject({
    led
  });
});
