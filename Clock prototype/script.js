const output = document.getElementById('output');

function getTime() {
    var currentTime = new Date().toLocaleTimeString();
    output.innerText = currentTime;
}

getTime();
// note to self: apparently the function for setInterval must be in quotes if defined elsewhere
setInterval("getTime()", 1000);