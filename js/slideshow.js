/**
 * home JS - separated because homepages usually use a lot of stuff the rest of the site doesn't need
 */
/* define $ as jQuery just in case */
( function( $ )
{
	/* slideshow - my custom plugin */
	$.fn.slideshow = function( ) {
	
		/* set vars */
		var slideshow 	= this;
		var slides		= slideshow.find( '.slide' );
		var controls	= slideshow.find( '.control' );
		var slide_speed	= 6000;
		var timer;
		
		/* animate the slideshow every XX seconds */
		$( window ).load( function( ) 
		{
			var timer = setInterval( show_next_slide, slide_speed );
		});
		
		/* navigator */
		slideshow.on( 'click', '.control', function( e ) 
		{
			/* reset the timer */
			window.clearInterval( timer );

			/* set the vars */
			var target_index	= $( this ).index( );
			var target_slide 	= slideshow.find( '.slide:eq(' + target_index + ')' );
			
			/* show the right slide */
			slides.removeClass( 'current' ).hide( );
			target_slide.show( ).addClass( 'current' );
			
			/* change the control nav to active */
			controls.removeClass( 'current' );
			$( this ).addClass( 'current' );
			e.preventDefault( );
		});
		
		/* animate slides */
		function show_next_slide( )
		{
			/* set the vars */
			var slides			= slideshow.find( '.slide' );
			var curr_slide 		= slideshow.find( '.slide.current' );
			var curr_index		= curr_slide.index( );
			var next_index 		= parseInt( curr_index + 1 );
			if ( next_index > slides.length - 1 )
			{
				var next_index = 0;
			}
			var target_el = slideshow.find( '.slide:eq(' + next_index + ')' );
			var target_control = slideshow.find( '.control:eq(' + next_index + ')' );
			
			/* show the next slide */
			slides.hide( ).removeClass( 'current' );
			target_el.show( ).addClass( 'current' );
			
			/* change the control nav to active */
			controls.removeClass( 'current' );
			target_control.addClass( 'current' );
		}
		

	}
	
})( jQuery );