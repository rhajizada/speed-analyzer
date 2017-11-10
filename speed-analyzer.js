const Repeat = require('repeat');
const repeatTime = 15;

function SpeedTest() {
  const time = require('date-time'); // Instance of date-time class
  const speedTest = require('speedtest-net'); // Instance of speedtest-net class
  const test = speedTest({
    // Method for testing speed
    maxTime: 5000
  });
  test.on('data', data => {
    var download = data.speeds.download; // Download speed in Mbps
    var upload = data.speeds.upload; // Upload speed in Mbps
    var downInBits = data.speeds.originalDownload; // Download speed in Bps
    var upInBits = data.speeds.originalUpload; //
    var ping = data.server.ping; // Ping time to the test server in milliseconds
    var globalTime = time().split(' '); // Current date and time
    var currentDate = globalTime[0]; // Date
    var currentTime = globalTime[1]; // Time
    console.log(currentTime + " Download: " + download + " Mbp/s, Upload: " + upload + " Mpb/s, Ping: " + ping + " ms")
  });
  test.on('error', err => {
    console.error(err);
  });
}

Repeat(SpeedTest).every(repeatTime, 'sec').for(5, 'minutes').start.in(1, 'sec');
