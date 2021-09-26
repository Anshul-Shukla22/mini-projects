
function pg1timeline(){

let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#videos",
      pin: true,   // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=400", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      markers:true
    }
  });
  tl.addLabel("abcd")
  .to('.cv',{
     width:"100%",  
     ease: Expo.easeInOut,
     duration:2
  },"abcd")

  .to('#smv1',{
      x:'-130%',
      duration:4,
      opacity:0
  },"abcd") 

  .to('#smv2',{
    x:'130%',
    duration:4,
    opacity:0
  },"abcd")

  .to('#mv1',{ 
    x:'-130%',
    duration:3,
    opacity:0
  },"abcd")

 .to('#mv2',{
    x:'130%',
    duration:3,
    opacity:0
},"abcd")
}

function headtext(){
  $('#head1').textillate({
    selector: '.texts',
    loop: false,
    minDisplayTime: 2000,
    initialDelay: 0,
    autoStart: true,
    inEffects: [],
    outEffects: ['hinge'],
    in: {
      effect: 'fadeInUp',
      delayScale: 1,
      delay: 30,
      sync: false,
      shuffle: false,
      reverse: false,
    },
    callback: function () {},
    type: 'char'
  });
  
} 

function pg2timeline(){
  
  var tl2 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    
    OnStart: function(){
      $('.a').textillate({
        selector: '.texts',
        loop: false,
        minDisplayTime: 2000,
        initialDelay: 0,
        autoStart: true,
        inEffects: [],
        outEffects: ['hinge'],
        in: {
          effect: 'fadeInUp',
          delayScale: 1,
          delay: 30,
          sync: false,
          shuffle: false,
          reverse: false,
        },
        callback: function () {},
        type: 'char'
      })
    },
    scrollTrigger: {

      trigger: "#nxtpg",
        // pin the trigger element while active
      start: "top 50%", // when the top of the trigger hits the top of the viewport
      // end: "+=400",  // end after scrolling 500px beyond the start
       // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      markers:true
    }

  });
}

pg1timeline();
headtext();
pg2timeline();
pg2head();


