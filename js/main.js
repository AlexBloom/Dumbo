$(document).ready(function() {
	// $('.stickyheader').waypoint('sticky', {
// 	  wrapper: '<div class="sticky-wrapper" />',
// 	  stuckClass: 'stuck',
// 	  offset:50
// 	});
	
	// $('.stickylogo').waypoint('sticky', {
// 	  wrapper: '<div class="sticky-wrapper" />',
// 	  stuckClass: 'stuck',
// 	  offset:50
// 	});
	
	//$('.stickylogo').waypoint('sticky');
	


	$('.sticky-wrapper').waypoint(
		   function(direction) {   
		     /* This div is level with the top */  
		     if(direction == 'down'){
			   // console.log($(this), '0')
			     $(this).find('.stickyheader').addClass('stuck');
		     } 
		       else $(this).find('.stickyheader').removeClass('stuck');
		   },
		   {
		     offset: 0
		   }
		 );   

	
});


