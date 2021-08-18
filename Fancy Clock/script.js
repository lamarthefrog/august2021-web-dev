const output = document.getElementById('output');
var colorFlag = "grey";

function getTime() {
    var currentTime = new Date().toLocaleTimeString();
    
    // select each time denomination
    var seconds = currentTime.slice(-5, -3);
    var minutes = currentTime.slice(-8, -6);
    var hours = currentTime.slice(0, 1);
    var ampm = currentTime.slice(8,11);

    // apply color selection functions
    var secondsColor = getSecondsColor(seconds);
    var minutesColor = getSecondsColor(minutes);
    var hoursColor = getSecondsColor(hours);

    // generate final output and update dom
    var finalTime = `<span style="color: ${hoursColor}">${hours}</span>
                     <span style="color: #f5d9ff">:</span>
                     <span style="color: ${minutesColor}">${minutes}</span>
                     <span style="color: #f5d9ff">:</span>
                     <span style="color: ${secondsColor};">${seconds}</span> 
                     <span style="color: ${secondsColor}">${ampm}</span>`;
    //output.style.color = 'red';
    output.innerHTML = finalTime;
}

// applies a hexcode color based on seconds value
    // PLACEHOLDER COLORS
function getSecondsColor(seconds) {
    var secondsColor = "";
    if (parseInt(seconds) >= 0 && parseInt(seconds) < 15) {
        secondsColor = "#f5d9ff";      
    } else if (parseInt(seconds) >= 15 && parseInt(seconds) < 30) {
        secondsColor = "#efc2ff";
    } else if (parseInt(seconds) >= 30 && parseInt(seconds) < 45) {
        secondsColor = "#ebb8ff";
    } else {
        secondsColor = "#ebb8ff";
    }
    return secondsColor;
}

function backgroundChange() {
    if (colorFlag == "grey") {
        document.body.style.transition = "background-image ease";
        document.body.style.backgroundImage = "linear-gradient(#000000, #000000)";
        colorFlag = "black";
    } else if (colorFlag == "black") {
        document.body.style.backgroundImage = "linear-gradient(#000000, #353535)";
        colorFlag = "grey";
    }
    return colorFlag;
}

getTime();
// note to self: apparently the function for setInterval must be in quotes if defined elsewhere
setInterval("getTime()", 1000);
//setInterval("backgroundChange()", 15000);