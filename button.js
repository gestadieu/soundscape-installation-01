const {RaspiIO} = require('raspi-io');
const five = require('johnny-five');

const board = new five.Board({
  io: new RaspiIO()
});

board.on('ready', () => {
  // GPIO18 - Physical Pin P1-12 - Wiring Pi 1
  button = new five.Button({
    pin: 'P1-12',
    isPullup: true
  });

  button.on('down', () => {
    console.log('down...')
  })

  button.on('up', () => {
    console.log('up...')
  })

  button.on('hold', () => {
    console.log('hold...')
  })

  board.on('exit', ()=> {
    console.log('bye...')
  })
  
})
