var timer = 10;
var score = 0;
var hitrn;
var clickedVal;
document.querySelector(".elem #highVal").innerHTML =localStorage.getItem("high");


function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 108; i++) {
        clutter = clutter + `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {

    var timerInt = setInterval(function () {

        if (timer >= 0) {
            document.querySelector('#timerValue').innerHTML = timer;
            timer--;
        }
        else {
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `
            <h2>Score = ${score - 10}</h2>`;     
            if (localStorage.getItem("high")<(score-10)) {
                localStorage.setItem("high",score-10);
            }    
            document.querySelector(".elem #highVal").innerHTML =localStorage.getItem("high");   
        }

    }, 1000)
}

function getNewHit() {
    hitrn = `${Math.floor(Math.random() * 10)}`;
    document.querySelector('#hitVal').innerHTML = hitrn;
}

function increaseScore() {
    document.querySelector('#scoreVal').textContent = score;
    score = score + 10;
}
document.querySelector('#pbtm').addEventListener('click',function (dets){
    clickedVal = Number(dets.target.textContent);
    if(clickedVal == hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
    
})


increaseScore();
runTimer();
makeBubble();
getNewHit();
