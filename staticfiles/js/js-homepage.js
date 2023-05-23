
window.addEventListener("load", vid, false);

function vid(){
    setTimeout(function(){		
        $("#vid-sec").parent('.ls-wrapper.ls-in-out').addClass("vids");        
        $('.ls-v5 span.ls-bottom-slidebuttons a').on('click',function(){
            $("#vid-sec").parent('.ls-wrapper.ls-in-out').addClass("vids");
        })    
        
        
    },5000)
    
}

var complete = function () {
    $('.tea-container img.filled').animate({opacity: 1},2000);
};

// init controller
var controller = new ScrollMagic.Controller();

        var headerTween1 = new TimelineMax()
         .add([
            TweenMax.to(".hand",2, {top: -16, ease: Linear.easeOut}),
            TweenMax.to(".tag",1, {right: -7, ease: Linear.easeOut}),  
            TweenMax.to(".bg1", 20,{ backgroundPosition: "left 100%", ease: Linear.easeNone}),
            TweenMax.to(".bg", 20,{ backgroundPosition: "center -100%", ease: Linear.easeNone}),
            TweenMax.to(".bg2", 20,{ backgroundPosition: "right 100%", ease: Linear.easeNone}),
            TweenMax.to(".side-teabag",1, {left: -30, ease: Linear.easeOut}),
            TweenMax.to(".tea-txt",1, {left: '21%', ease: Linear.easeOut}),
            TweenMax.to(".txt-101",1, {right: '24%', ease: Linear.easeOut}),   
            TweenMax.to(".tea-container .tea:first-child",2, {duration:8,opacity: 0, ease: Linear.easeOut}), 
            TweenMax.to(".tea-container .tea.filled",8, {duration:8,opacity: 0.7, ease: Linear.easeOut}),

          ])

// create a scene
var scene1 = new ScrollMagic.Scene({
    triggerElement: ".tea-animation-wrap",
    triggerHook: 0.2,
    reverse: true,
    duration: '200%',  // the scene should last for a scroll distance of 100px
    offset: 1500   // start this scene after scrolling for 50px
  })
  .setTween(headerTween1)
  .setPin(".tea-animation-wrap") // pins the element for the the scene's duration
  .addTo(controller); // assign the scene to the controller







 var plane = new TimelineMax()
         .add([
            TweenMax.to(".plane, .layer",6, {x: 1200, yoyo:true, ease: Linear.easeOut}),
            //TweenMax.to(".layer",6, {left: '100%', yoyo:true, ease: Linear.easeOut}),
          ])


var scene2 = new ScrollMagic.Scene({
    triggerElement: ".ls-overflow-visible",
    triggerHook: 0.5,
    reverse: true,
    duration: '40%',  // the scene should last for a scroll distance of 100px
    offset: 100    // start this scene after scrolling for 50px
  })
  .setTween(plane)
  //.setPin(".offer-banner") // pins the element for the the scene's duration
  .addTo(controller); // assign the scene to the controller


var lsjQuery = jQuery;
lsjQuery(document).ready(function() {
if(typeof lsjQuery.fn.layerSlider == "undefined") {
if( window._layerSlider && window._layerSlider.showNotice) { 
window._layerSlider.showNotice('layerslider_13','jquery');
}
} else {
lsjQuery("#layerslider_13").layerSlider({sliderVersion: '6.1.0', type: 'fullwidth', responsiveUnder: 1280, autoStart: true, showCircleTimer: false, maxRatio: 1, parallaxCenterLayers: 'top', parallaxScrollReverse: false, hideUnder: 0, pauseOnHover: false, hideOver: 100000, navPrevNext:false, delayin: 6000,
  skin: 'v5', thumbnailNavigation: 'disabled', skinsPath: 'https://www.twiningsindia.com/css/skin.css',});
 
	
 $('#layerslider_13').on('slideChangeDidStart', function(event, slider) {
       $("#vid-sec").parent('.ls-wrapper.ls-in-out').addClass("vids");  
    });	
	
  TweenMax.fromTo('.teabag', 1,
    {
      rotation: 3,
      ease:Linear.easeNone
    },
    {
       rotation: -3,
       repeat: -1, /* Aka infinite amount of repeats */
       yoyo: true,

    }
  );

 


}
});
