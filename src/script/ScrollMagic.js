// init controller
var controller = new ScrollMagic.Controller();

{
    // 第一个介绍段
    new ScrollMagic.Scene({
        triggerElement: "#trigger01",
        triggerHook: 0.3,
        duration: "40%",
        offset: 250
    })
        .setClassToggle("#animation-div", "visible")
        // .addIndicators() 
        .addTo(controller)


}