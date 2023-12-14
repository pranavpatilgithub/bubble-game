var timer = 30;
var rnum = 0;
var score = 0;

function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 102; i++) {
        var a = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${a}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = clutter;
}
makeBubble();

function runTiner() {
    var timerinterval= setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }
        else{
            clearInterval(timerinterval);
            document.querySelector("#pbottom").innerHTML = `<h1>Game over</h1>`;
        }
    }, 1000);
}
runTiner();

function getNewhit(){
    rnum = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rnum;
}
getNewhit();

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbottom").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === rnum){
        increaseScore();
        makeBubble();
        getNewhit();
    }
})
