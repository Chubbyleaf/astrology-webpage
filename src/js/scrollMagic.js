// // init controller
// var controller = new ScrollMagic.Controller();

// {
//     // 第一个介绍段
//     new ScrollMagic.Scene({
//         triggerElement: "#trigger01",
//         triggerHook: 0.3,
//         duration: "40%",
//         offset: 250
//     })
//         .setClassToggle("#animation-div", "visible")
//         // .addIndicators() 
//         .addTo(controller)


// }

// // init
// var controller = new ScrollMagic.Controller();

// // define movement of panels
// var wipeAnimation = new TimelineMax()
//     .fromTo("section#explore02", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })  // in from right

// // create scene to pin and link animation
// new ScrollMagic.Scene({
//     triggerElement: "#pinContainer",
//     triggerHook: "onLeave",
//     duration: "300%"
// })
//     .setPin("#pinContainer")
//     .setTween(wipeAnimation)
//     .addIndicators() // add indicators (requires plugin)
//     .addTo(controller);