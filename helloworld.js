var five = require("johnny-five");
const { RaspiIO } = require("raspi-io");

const board = new five.Board({
  io: new RaspiIO(),
});

board.on("ready", function() {

  var led = new five.Led('P1-7');

  // "blink" the led in 500ms
  // on-off phase periods
  //led.blink(500);

  this.repl.inject({
    led
  })
});