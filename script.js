let timer = 60;
let score = 0;
let hitrn = 0;

// Jispe click karoge wo element per event raise hoga or event litern na milne per event element ke parent per litener dhundhega waha per bhi na milne per parent ke parent ke parent pr listner dundhega


function increcScore(){
    score += 10;

    document.querySelector("#scoreval").textContent = score; 

}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function createBubble(){
let cullter = "";
for(i=1; i<=70; i++){
    let rn = Math.floor(Math.random()*10);
    cullter +=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbottom").innerHTML = cullter;

}

function runTimer(){
     let clearInt = setInterval(()=>{
        if(timer > 0){
        timer--;
        document.querySelector("#timerCounter").textContent = timer;
        }
        else{
            clearInterval(clearInt);
            document.querySelector("#pbottom").innerHTML = `<h1 id="GameOver">Game Over !</h1>
                                                              <h2 id = "GameScore"> Your Score is ${score}</h2>`
        }
    }, 1000)
}

document.querySelector("#pbottom")
.addEventListener("click", (details)=>{
 clickedNum = Number(details.target.textContent);  
 if(clickedNum === hitrn){
    increcScore();
    createBubble();
    getNewHit();
 } 

});

getNewHit();
runTimer();
createBubble();
