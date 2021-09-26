var arr=[{profile:1,story:4},
    {profile:2,story:5},
    {profile:3,story:6},];

    var temp=``;
arr.forEach(function(dets,index){
    // document.querySelector('#circle').innerHTML=dets.profile;
   temp+=`<div class="circle" id="${index}">
             ${dets.profile}
   </div>`
   document.querySelector('#panel').innerHTML=temp;
})

document.querySelector('#panel').addEventListener('click',function(dets){
    console.log(Number(dets.target.id))
    var elem=arr[Number(dets.target.id)].story;
    document.querySelector('#bg').style.display="initial";
    var r=Math.floor(Math.random()*250);
    var g=Math.floor(Math.random()*250);
    var b=Math.floor(Math.random()*250);
    document.querySelector('#bg').style.backgroundColor=`rgb(${r},${g},${b})`;

})
document.querySelector('button').addEventListener('click',function(){
    document.querySelector('#bg').style.display="none";
})