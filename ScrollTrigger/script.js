gsap.from("#box1",{
    scale:0,
    delay:1,
    duration:2,
    rotation:360,
    scollTrigger:"#box1"
})

gsap.from('#box2',{
    scale:0,
    duration:2,
    rotation:360,
    scrollTrigger:{
        trigger:"#box2",
        scroller:"body",
       
        start:"top 40%"
    }
})

gsap.from('#h1',{
    opacity:0,
    x:300,
    scrollTrigger:{
        trigger:"#box2",
        scroller:"body",
        
        start:"top 30%"
    }
})

gsap.from("h2",{
    opacity:0,
    x:300,
    scrollTrigger:{
        trigger:"#box3",
        scroller:"body",
        markers:true,
        start:"top 30%"
    }
})