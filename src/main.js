var five = require("johnny-five");
var board = new five.Board({ port: "COM5" });

board.on("ready", function () {

  var led = new five.Led(13);  // define led on Digital Pin 3
  var button = new five.Button(8);  // Define a button on Analog Pin A0
  var pressed = true;  // record the state of the button
  var counter = 0;     // record the number of presses

  button.on('press', function() {
    counter++;  // increment the counter by 1 each time
    console.log('you pressed the button ' +
                 counter + ' times!');  // send message to console
    // check if the button is pressed
    if ( pressed )
      led.on();  // turn the LED on
    else
      led.off();  // turn the LED off
      pressed = !pressed;  // toggle the pressed variable
  });
});
