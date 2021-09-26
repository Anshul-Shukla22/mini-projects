document.querySelector('button').addEventListener('click',function(){
    // console.log(Math.floor(Math.random()*250),Math.floor(Math.random()*250),Math.floor(Math.random()*250));
    var r=Math.floor(Math.random()*250);
    var g=Math.floor(Math.random()*250);
    var b=Math.floor(Math.random()*250);
    document.querySelector('#color').style.backgroundColor=`rgb(${r},${g},${b})`;
    
})