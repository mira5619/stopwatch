//global variables
var time = 0.00;
var started = false;
var interval;


//executing functions

//event listeners
window.onload = init;
function init(){
var startBtn = document.getElementById("start");
startBtn.addEventListener("click", startTimer);

var resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", reset);

var recordBtn = document.getElementById("recordTime");
recordBtn.addEventListener("click", record);

var keyInputs = document.addEventListener("keydown", handleKeyInput);

var showtimer = document.getElementById("showTimer");
showtimer.innerHTML = time.toFixed(2);
}
//function definitions

function handleKeyInput(){
    console.log(event.key);
    if(event.key === "s"){
        startTimer();
    }
    else if(event.key ==="r"){
        reset();
    }
    else if(event.key=== "t"){
        record();
    }
}

function startTimer(){
    if(started == false){

        interval = setInterval(function(){
        time = time + 0.01;
        //console.log(time);
        showtimer = document.getElementById("showTimer");
        showtimer.innerHTML = time.toFixed(2);
        },100); //executes callback every 100 msecond
        started = true;
    } else {
        clearInterval(interval);
        started = false;
    }
        return time;
}

function reset(){
    location.reload();
}

function record(){
    var rec = document.getElementById("records");
    rec.innerHTML += '<li>'+  time.toFixed(2) + '</li>';
}
