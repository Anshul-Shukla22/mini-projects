var arr=[{img:'https://images.unsplash.com/photo-1631341229857-718ffd2b7e1d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60,like:0'
,like:0},
{img:'https://images.unsplash.com/photo-1631473126856-d1fdf3bf9c4f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
,like:0},
{img:'https://images.unsplash.com/photo-1631414836323-ad2f6963061c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
,like:0}
]

function  showimg(){
    var temp=``;
    arr.forEach(function(val,index){
        temp+=`<div id="img">
        <img src="${val.img}" alt="">
        <button id='${index}'>like+</button>
        <span>${val.like} likes <span>
     </div>`
     })
     document.querySelector('#main').innerHTML=temp;
}

showimg();

document.querySelector('#main').addEventListener('click',function(elem){
    arr[elem.target.id].like++;
    showimg();
    // console.log(elem.target.id);
})


