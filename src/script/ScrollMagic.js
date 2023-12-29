// init controller
var controller = new ScrollMagic.Controller();

{
    // 第一个介绍段
    new ScrollMagic.Scene({
        triggerElement: "#trigger01",
        triggerHook: 0.9, 
        duration: "80%",
        offset: 250
    })
    .setClassToggle("#intro-wrap", "visible") 
    // .addIndicators() 
    .addTo(controller)

    // 繁星点点，你我其名
    new ScrollMagic.Scene({
        triggerElement: "#trigger02",
        triggerHook: 0.1, 
        duration: "80%",
        offset: -100
    })
    .setClassToggle("#headline-wrap01", "visible") 
    // .addIndicators()
    .addTo(controller);

}