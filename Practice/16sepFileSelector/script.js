document.querySelector('button').addEventListener('click',function(){
    document.querySelector('input').click();
})

document.querySelector('input').addEventListener('change',function(dets){
   console.log(dets.target.files.length);
var len=dets.target.files.length;
   
   
   if(len===1){
    document.querySelector('span').textContent=dets.target.files[0].name;
   }
   else{
    //  badhao();
     document.querySelector('span').textContent=dets.target.files.length; 
   }
})
// count=0;
// function badhao(){
//     count++;
//     document.querySelector('span').textContent=count;
// }