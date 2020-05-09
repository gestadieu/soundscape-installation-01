const {RaspiIO} = require('raspi-io');
const five = require('johnny-five');

const board = new five.Board({
    io: new RaspiIO()
});

board.on('ready', () => {
    // GPIO18 - Physical Pin P1-12 - Wiring Pi 1
    const led = new five.Led('P1-12');
    led.strobe(500);



    bumper = new five.Button(7);
    led = new five.Led(13);
    button = new five.Button(2);
    // Button Event API

  // "down" the button is pressed
  button.on("down", function() {
    console.log("down");
  });

  // "hold" the button is pressed for specified time.
  //        defaults to 500ms (1/2 second)
  //        set
  button.on("hold", function() {
    console.log("hold");
  });

  // "up" the button is released
  button.on("up", function() {
    console.log("up");
  });


  bumper.on("hit", function() {

    led.on();

  }).on("release", function() {

    led.off();

  });
})