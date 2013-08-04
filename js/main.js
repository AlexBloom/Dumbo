$(document).ready(function() {

	
	/* Initiate Local Scroll Animation */
	$.localScroll();


	// This example adds a duration to the tweens so they are synced to the scroll position

	var controller = $.superscrollorama();
	
	// amount of scrolling over which the tween takes place (in pixels)
	var scrollDuration = 50; 

	// individual element tween examples
	controller.addTween('#intro-img-1', TweenMax.to( $('#intro-img-1'), 0.5, {css:{bottom:'0px'}, ease:Quad.easeInOut}), scrollDuration);
	controller.addTween('#intro-img-2', TweenMax.to( $('#intro-img-2'), 1, {css:{bottom:'0px'}, ease:Quad.easeInOut}), scrollDuration);
	controller.addTween('#intro-img-3', TweenMax.to( $('#intro-img-3'), 1.5, {css:{bottom:'20px',left:'15px'}, ease:Quad.easeInOut}), scrollDuration);
	controller.addTween('#intro-img-4', TweenMax.to( $('#intro-img-4'), 2, {css:{bottom:'405px',left:'237px'}, ease:Quad.easeInOut}), scrollDuration);

	controller.addTween('#approach-img-2', TweenMax.from( $('#approach-img-2'), 4, {css:{left:'-1200px'}, ease:Quad.easeInOut}), scrollDuration);
	controller.addTween('#approach-text-2', TweenMax.from( $('#approach-text-2'), .5, {css:{opacity: 0}}), scrollDuration);
	
	

	controller.addTween('#cred-1', TweenMax.from( $('#cred-1'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#cred-2', TweenMax.from( $('#cred-2'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#cred-3', TweenMax.from( $('#cred-3'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#cred-4', TweenMax.from( $('#cred-4'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#cred-5', TweenMax.from( $('#cred-5'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#cred-6', TweenMax.from( $('#cred-6'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#cred-7', TweenMax.from( $('#cred-7'), .5, {css:{opacity: 0}}), scrollDuration);
	
	
	

	controller.addTween('#scale-it', TweenMax.fromTo( $('#scale-it'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'240px'}, ease:Quad.easeInOut}), scrollDuration);


	
});


