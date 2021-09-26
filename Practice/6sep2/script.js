var arr=[
    {name:'phone',category:1,images:'phone.webp'},
    {name:'laptop',category:1,images:'laptop.jpg'},
    {name:'tablet',category:2,images:'tab.jpg'},
    {name:'tv',category:2,images:'tv.webp'}
]

    var cat1=arr.filter(function(elem){
        return elem.category===1;
        
    })

    var cat2=arr.filter(function(elem){
        return elem.category===2;
        
    })
    
    function template1(){
        var temp=``;

        cat1.forEach(function(elem){
            temp+=`<div id="object">
            <h4>${elem.name}</h4>
            <h5>${elem.category}</h5>
            <div id="circle">
            <img src="${elem.images}" alt="">
            </div>
        </div>`
        })
       document.querySelector("#panel").innerHTML=temp;
    }
    
    function template2(){
        var temp=``;

        cat2.forEach(function(elem){
            temp+=`<div id="object">
        
            <h4>${elem.name}</h4>
            <h5>${elem.category}</h5>
            <div id="circle">
            <img src="${elem.images}" alt="">
            </div>
        </div>`
        })
       document.querySelector("#panel").innerHTML=temp;
    }

    document.querySelector("#btn1").addEventListener('click',function(){
        
       template1();
    })

    document.querySelector("#btn2").addEventListener('click',function(){
        
        template2();
    })


