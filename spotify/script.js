// var play=document.querySelector("#playsong");
// var songs=document.querySelectorAll("audio");

// var jhanda=0;


// play.addEventListener('click',function(){
    
//     if(jhanda===0){
        
//         songs.play();
//         jhanda=1;
//         play.style.backgroundImage="url(pauseimg.png)";
    
//     }
//     else{

//         songs[0].pause();
//         jhanda=0;
//         play.style.backgroundImage="url(playimg.png)";
//     }
    
// })

// var abcd=document.querySelector("#abcd");
// var arr=['a','b','c','d'];
// var template=``;
// arr.forEach(function(val){
//     template +=`<i> ${val} <i>`;
// })

// abcd.innerHTML=template; 

var arr=[12,22,34];

var template=``;
arr.forEach(function(val){
    template += `<p>${val+3} </p>`;
})
console.log(template);
console.log("hey");