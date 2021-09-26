var arr=[
    {name:'Aditi', status:"It's hard to keep moving when no-one is clapping for you",image:'pp (1).jpg'},
    {name:'Flash',status:"I LOVE EVERYTHING",image:'pp (2).jpg'},
    {name:'Yash',status:"I live inside my own world of make-believe",image:'pp.jpg'}
]


var msg=['hey','hows u','what u doing','where u at','u got plans?????']

function profiles(){
    var temp=``;
    arr.forEach(function(val){
        var status =val.status.length >25?val.status.substring(0,25)+"...":val.status;
        temp+=` <div id="template" class="nt">
        <div id="circle">
        <img src="${val.image}" alt="">
        </div>
        <h3>${val.name}</h3>
        <h4>${status}</h4>
    </div>`
    })
    document.querySelector('#main').innerHTML=temp;
}


function showchats(val){
    var template=``;
    var count=0;
    msg.forEach(function(dets){
       if(val[count]!==undefined){
        template+=`<div id="rgttemp">
        <h4 class="chat">${val[count]} <br></h4>
        <br>
        
    </div>`
       }
       
    count++;
    document.querySelector("#chats").innerHTML=template;
    })
}


var input=document.querySelector('input');

input.addEventListener('input', function(){
    var arr2 = [];

    msg.forEach(function(data){
        if(data.indexOf(input.value) !== -1){
            arr2.push(data);
        }
    });

    console.log(arr2);
    showchats(arr2);
});

profiles();
showchats(msg);
// search_chat();

gsap.from('.nt',{
    y:-10,
    opacity:0,
    duration:2,
    ease: Expo.easeInOut,
    stagger:0.3
})