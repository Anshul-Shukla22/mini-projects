
var width=0;
var myvar;
document.querySelector('#start').addEventListener('click',function(){    

    clearInterval(myvar);
    myvar=setInterval(gg,50)


    function gg(){
    width++;
    document.querySelector('#prg').style.width=width+'%';
   }
  
   

})

document.querySelector('#stop').addEventListener('click',function(){
clearInterval(myvar);
})
