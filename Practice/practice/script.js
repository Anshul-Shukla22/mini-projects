

document.querySelector('button').addEventListener('click',function(){
    document.querySelector('input').click();
    
})
document.querySelector('input').addEventListener('change',function(dets){
    var elem=dets.target.files[0].name;
    document.querySelector('#txt').innerHTML=elem;
    console.log(dets);
})