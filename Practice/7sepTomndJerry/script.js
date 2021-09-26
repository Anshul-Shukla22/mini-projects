var arr=[
    {name:'Tom',breed:'Cat',image:'tom.png'},
    {name:'jerry',breed:'Mouse',image:'jerry.png'},
    {name:'Nibbles',breed:'Mouse',image:'nibbles.png'},
]

var temp=``;

document.querySelector('button').addEventListener('click',function(){
    data();
})

function data(){
    arr.forEach(function(val){
        temp+=` <div id="card">
        <div id="circle">
        <img src="${val.image}" alt="">
        </div>
        <h3>${val.name}</h3>
            <h4>${val.breed}</h4>
    </div>`
    })
    document.querySelector('#main').innerHTML=temp;
}

