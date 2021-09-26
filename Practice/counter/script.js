var count=0;

function inc(){
   count++;
}
function dec(){
    count--;
}
function reset(){
    count=0;
}
document.querySelector('#inc').addEventListener('click',function(){
     inc();
     document.querySelector('#no').textContent=count;
})
document.querySelector('#dec').addEventListener('click',function(){
    dec();
    document.querySelector('#no').textContent=count;
})
document.querySelector('#res').addEventListener('click',function(){
    reset();
    document.querySelector('#no').textContent=count;
})