var five = require('johnny-five');
var mqtt = require('mqtt');
var led;

var board = new five.Board({port: "COM5"});

board.on("ready", () => {
    led = new five.Led(13);
    led.blink(200);
});


