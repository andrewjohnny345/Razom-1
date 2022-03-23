/* ----------------- Start Document ----------------- */
(function($){
	$(document).ready(function(){
		'use strict';

/*----------------------------------------------------*/
/*	Foundation Magic
/*----------------------------------------------------*/

	$(document).foundation();


/*----------------------------------------------------*/
/*	WOW Animation
/*----------------------------------------------------*/

	new WOW().init();

/* ------------------ End Document ------------------ */
jQuery(function(){
      
      jQuery('input, textarea').each(function(){
            var placeholder = jQuery(this).attr('placeholder');
            jQuery(this).focus(function(){ jQuery(this).attr('placeholder', ''); return false;});
            jQuery(this).focusout(function(){               
                  jQuery(this).attr('placeholder', placeholder); 
                  return false;
            });
      });
      
      jQuery('.js-icon-nav').click(function(){jQuery('.js-main-nav').slideToggle(), jQuery(this).toggleClass('active'); return false;});
      jQuery(document).click(function(e){
            if (jQuery(e.target).parents().filter('.js-main-nav:visible').length != 1) {
                  jQuery('.js-main-nav').hide();
            }
      });


});

var handler = function(){
      
      var height_footer = jQuery('footer').height();
      jQuery('.content').css({'padding-bottom':height_footer+32});     
      
}
jQuery(window).bind('load', handler);
jQuery(window).bind('resize', handler);
});
	
})(this.jQuery);