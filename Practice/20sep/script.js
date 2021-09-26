var m=document.querySelectorAll('audio');

window.addEventListener('keypress',function(dets){
    if(dets.key==="a")
     m[0].play();
     m[0].currentTime=0;
     if(dets.key==="l")
     m[1].play();
     m[1].currentTime=0;
     if(dets.key==="b")
     m[2].play();
     m[2].currentTime=0;
     if(dets.key===" ")
     m[2].play();
     m[2].currentTime=0;
})