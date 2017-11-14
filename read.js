
var jsonfile = require('jsonfile');
var file = 'data.json';
var TestResults = jsonfile.readFileSync(file);

function AverageDownload(){
    var avg = 0;
    for(var i = 0; i < TestResults.length;i++){
        avg += TestResults[i].Download;
    }
    avg = avg/TestResults.length;
    return avg;
}

function AverageUpload(){
    var avg = 0;
    for(var i = 0; i < TestResults.length;i++){
        avg += TestResults[i].Upload;
    }
    avg = avg/TestResults.length;
    return avg;
}

function AveragePing(){
    var avg = 0;
    for(var i = 0; i < TestResults.length;i++){
        avg += TestResults[i].Ping;
    }
    avg = avg/TestResults.length;
    return avg;
}



console.log("Average download speed is " + AverageDownload() + " Mbps");
console.log("Average upload speed is " + AverageUpload() + " Mbps");
console.log("Average ping is " + AveragePing() + " milliseconds");