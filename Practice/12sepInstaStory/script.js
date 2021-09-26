var arr=[
    {profile:'https://images.unsplash.com/photo-1631161558218-b59c3aec9bc5?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    story:'https://images.unsplash.com/photo-1631261178062-83006e6256f3?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'},
    {profile:'https://images.unsplash.com/photo-1631340346121-6abc9fb6bf7b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    story:'https://images.unsplash.com/photo-1631277974569-5b571f9f5707?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'},
    {profile:'https://images.unsplash.com/photo-1631355900166-e2974bbf2ab7?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    story:'https://images.unsplash.com/photo-1631291885373-bf06f629cc3c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}
]

var temp=``;    
var displaystory=document.querySelector("#displaystory");
var bg=document.querySelector("#bg");

function showprofiles(){
    arr.forEach(function(val,index){
        temp+=`<div class="story">
        <img id="${index}" src="${val.profile}" alt="">
        </div>`
    })
    document.querySelector('#stories').innerHTML=temp;
}

function showstories(){
    document.querySelector('#stories').addEventListener('click',function(dets){
        //  console.log( arr[dets.target.id].story);
         
         displaystory.style.display='initial';
         bg.style.display='initial';
         var elem=arr[dets.target.id].story;
         displaystory.style.backgroundImage=`url(${elem})`;
    })
    
}

function closestories(){
    document.querySelector('button').addEventListener('click',function(){
        displaystory.style.display='none';
        document.querySelector('#bg').style.display='none';
    })
}



showprofiles();
showstories();
closestories();