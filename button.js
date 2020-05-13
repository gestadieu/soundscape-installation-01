const { RaspiIO } = require("raspi-io");
const five = require("johnny-five");

const board = new five.Board({
  io: new RaspiIO(),
});

board.on("ready", () => {
  // GPIO18 - Physical Pin P1-12 - Wiring Pi 1
  const button = new five.Button({
    pin: "P1-18",
    isPullup: true,
  });

  // const led = new five.Led("P1-16");
  // led.strobe();

  button.on("down", () => {
    console.log("down...");
  });

  // button.on("up", () => {
  //   console.log("up...");
  // });

  // button.on("hold", () => {
  //   console.log("hold...");
  // });

  // this.repl.inject({
  //   on: () => {
  //     led.on();
  //   },
  //   off: () => {
  //     led.stop().off();
  //   },
  //   strobe: () => {
  //     led.stop().off();
  //     led.strobe();
  //   },
  //   blink: () => {
  //     led.stop().off();
  //     led.blink(500);
  //   },
  // });
  // When this script is stopped, turn the LED off
  // This is just for convenience
  board.on("exit", function () {
    // led.stop().off();
  });
});
