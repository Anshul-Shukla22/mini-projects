var tl=gsap.timeline();

tl
.from('#main',{
    x:'-100%',
    opacity:0,
    duration:3,
    ease:Expo.easeInOut,
    
})
.from('.chacha',{
    y:-10,
    opacity:0,
 duration:2,
    ease: Expo.easeInOut,
    stagger:0.3
},"-=1")
.from('.lakeer',{
    width:0,
    opacity:0,
    duration:2,
    ease:Expo.easeInOut
},"-=2.5")
.to('#r1img',{
   x:'100%',
//    opacity:0,
    duration:2,
    ease:Expo.easeInOut
},"-=3.5")
.to('#r2img',{
    x:'100%',
 //    opacity:0,
     duration:2,
     ease:Expo.easeInOut
 },"-=3.5");
