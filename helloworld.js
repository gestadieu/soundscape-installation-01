const {RaspiIO} = require('raspi-io');
const five = require('johnny-five');

const board = new five.Board({
    io: new RaspiIO()
});

board.on('ready', () => {
    const led = new five.Led('P1-7');
    led.strobe(500);
})