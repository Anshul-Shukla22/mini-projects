var interval;
var width = 1;

function move() {
  var elem = document.querySelector("#prg");
 
  clearInterval(interval);
  interval = setInterval(frame, 100);

  function frame() {
    if (width >= 100) {
      width = 1;
      clearInterval(interval);
    } else {
      width++;
      elem.style.width = width + '%';
      document.querySelector('#txt').innerHTML=width+'%';
    }
  }
}

function pause() {
  clearInterval(interval);
}

document.querySelector('#play').addEventListener('click',function(){
    move();

})
document.querySelector('#pause').addEventListener('click',function(){
    pause();
})


