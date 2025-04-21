let score = 0;
let hittedEvent = 0;
document.querySelector('#pbtm').addEventListener('click', function(dets){
  let clickedNumber = Number(dets.target.textContent)
  if(clickedNumber === hittedEvent){
    CurrentScore();
    bubbles();
    getHit();
  }
})
function bubbles(){
   let clutter = "";
   for(let i = 0; i<250; i++){
     clutter += `<div id="bubble" class="h-10 w-10 bg-[rgb(74,103,73)] m-4 rounded-full text-white flex justify-center items-center font-bold text-2xlz cursor-pointer">
                ${Math.floor(Math.random()*10)}
             </div>`
   }
   document.querySelector('#pbtm').innerHTML = clutter;
   
}
function timer(){
   var timer = 10;
  let timerval =  setInterval(function(){
    if(timer>0){
      timer--;
      document.querySelector('#timersId').textContent = timer;
    }
    else{
      clearInterval(timerval)
      document.querySelector('#pbtm').innerHTML = `<h1>Game Over</h1>`;
    }
   },1000)
}
function getHit(){
  hittedEvent =  Math.floor(Math.random()*10)
   document.querySelector('#HitsId').innerHTML = hittedEvent;
}
function CurrentScore(){
 score +=10;
  document.querySelector('#scoreId').textContent = score;
}

bubbles();
timer();
getHit();


