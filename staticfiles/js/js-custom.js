$(document).ready( function() { //Fires when DOM is loaded
    getImageSizes();
    $(window).resize(function() { //Fires when window is resized
        getImageSizes();
    });


     $(".inner-wrap .sortproduct ul li a").click(function(){

      // 1. store data-type attribute
      var color = $(this).attr("data-filter"); 

      // 2. hide all matched elements
      $(this).parents('.sortproduct').next().find('ul li').hide(); 

      // 3. if 'color' is not defined hide/show all elements ("show all" button), if color IS defined show elemtnts that match color variable
      if(color == 'all'){
        $(this).parents('.sortproduct').next().find('ul li').fadeIn(625);  
      }else{
        $(this).parents('.sortproduct').next().find('li[data-type="' + color + '"]').fadeIn(625);
      }

        

      // classes for nav buttons
      $(this).parents('ul').find('a').removeClass('active'); 
      $(this).addClass('active'); 

    });

    //Input boxs

   $('.inputxt').on('focus', function() {
        // On first focus, check to see if we have the default text saved
        // If not, save current value to data()
        if (!$(this).data('defaultText')) $(this).data('defaultText', $(this).val());

        // check to see if the input currently equals the default before clearing it
        if ($(this).val()==$(this).data('defaultText')) $(this).val('');


        if($(this).is('.nt')){
           TweenMax.to($(this).next(),1, { autoAlpha:1,marginLeft:'-3.5%', display:'inline', yoyo:true, ease: Linear.easeOut})
        }
    });
    $('.inputxt').on('blur', function() {
        // on blur, if there is no value, set the defaultText
        if ($(this).val()=='') $(this).val($(this).data('defaultText')); 

        if($(this).is('.nt') && $(this).val()==$(this).data('defaultText')){
          TweenMax.to($(this).next(),0.5, { autoAlpha:0,marginLeft:'-4%', display:'none', yoyo:true, ease: Linear.easeOut})
        }

    });


    /*Product tab*/
    $('.inner-wrap .filter ul li a').on('click',function(){
       $('.inner-wrap .filter ul li a').removeClass('active');
       $(this).addClass('active');

       var idx = $(this).parent().index();

       $('.inner-wrap .tabwrap .tabcontent').hide().removeClass('active');
       $('.inner-wrap .tabwrap .tabcontent').eq(idx).fadeIn().addClass('active')
       

    })

  






function getImageSizes() {
    $(".home-footer").each(function() {
        var $this = $(this);
        console.log( $this.height() );
    });
}
	
	
	var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.inner-banner.about .imgs img').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

 $(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
   var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();


$('.product-container .wrap .reusable').hover(function(){
    var src = $(this).find('.leaf img').attr('src');
    var datasrc = $(this).find('.leaf img').attr('data-set')
    $(this).find('.leaf img').attr('data-set', src)
    $(this).find('.leaf img').attr('src', datasrc)
},function(){
    var src = $(this).find('.leaf img').attr('src');
    var datasrc = $(this).find('.leaf img').attr('data-set')
    $(this).find('.leaf img').attr('data-set', src)
    $(this).find('.leaf img').attr('src', datasrc)
});


});






/*Menu*/

  $('.navbar ul.nav.navbar-nav').clone().appendTo('.menu.mm')

  if( 'ontouchstart' in window ){ var click = 'touchstart'; }
  else { var click = 'click'; }


  $('div.burger').on(click, function(){

      if( !$(this).hasClass('open') ){ openMenu(); } 
      else { closeMenu(); }

  });
  

  // $('div.menu ul li a').on(click, function(e){
  //  // e.preventDefault();
  //  closeMenu();
  // });   


  function openMenu(){
    $('body').addClass('mobile')
    $('div.circle').addClass('expand');
          
    $('div.burger').addClass('open'); 
    $('div.x, div.y, div.z').addClass('collapse');
    $('.menu li').addClass('animate');
    
    setTimeout(function(){ 
      $('div.y').hide(); 
      $('div.x').addClass('rotate30'); 
      $('div.z').addClass('rotate150'); 
    }, 70);
    setTimeout(function(){
      $('div.x').addClass('rotate45'); 
      $('div.z').addClass('rotate135');  
    }, 120);
    
    

  }
  
  function closeMenu(){
    $('body').removeClass('mobile')
    $('div.burger').removeClass('open');  
    $('div.x').removeClass('rotate45').addClass('rotate30'); 
    $('div.z').removeClass('rotate135').addClass('rotate150');        
    $('div.circle').removeClass('expand');
    $('.menu li').removeClass('animate');
    
    setTimeout(function(){      
      $('div.x').removeClass('rotate30'); 
      $('div.z').removeClass('rotate150');      
    }, 50);
    setTimeout(function(){
      $('div.y').show(); 
      $('div.x, div.y, div.z').removeClass('collapse');
    }, 70);                         
    
  }