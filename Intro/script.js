// go to the x 800 in duration of 3 sec with a delay 3
gsap.to("#box",{
    x:800,
    duration:3,
    delay:3,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    scale:0.5,
})

// x and y cordinates are similer the the transformx , transformy 

// start from 800 go to the defalut css property 
gsap.from("#box",{
    x:800,
    duration:2,
    delay:1,
    repeat:-1,
    yoyo:true,
})


gsap.from("h1",{
    color:"red",
    opacity:0,
    y:30,
    duration:2,
    delay:1,
    stagger:1,
    // stagger have the valud of 1 to 5 and -1 to render it in revers 
    repeat:-1 // it will render twice, if -1 it will render it infinate time 
})

// stagger helps to render the list of element one by one 

// timeline 


var tl = gsap.timeline()

tl.from('#box1',{
    color:"red",
    opacity:0,
    y:30,
    duration:2,
})

tl.from('#box2',{
    color:"blue",
    opacity:0,
    y:30,
    duration:2,
})

tl.from('#Hello',{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.2,
})