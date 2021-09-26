var arr=[
    {name:"laptop",category:"electronics",image:"lap.jpg"},
    {name:"Blazer",category:"clothing",image:"lap.jpg"},
    {name:"Burger",category:"Food",image:"lap.jpg"}
]

var temp=``;

arr.forEach(function(val){
    temp+=`<div id="card">
    <div id="circle">
    <img src="${val.image}" alt="">
    </div>
    <div id="text">
            <h4>${val.name}</h4>
            <h5>${val.category}</h5>
   </div>
   <div id="icon">
       <a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg></a>
   </div>
</div>`

document.querySelector('#cards').innerHTML=temp;
})