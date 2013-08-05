$(document).ready(function() {

	
	/* Initiate Local Scroll Animation */
	$.localScroll();


	// This example adds a duration to the tweens so they are synced to the scroll position

	var controller = $.superscrollorama();
	
	// amount of scrolling over which the tween takes place (in pixels)
	var scrollDuration = 50; 

	// individual element tween examples
	controller.addTween('#intro-text-1', TweenMax.from( $('#intro-text-1'), 1.5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#intro-text-2', TweenMax.from( $('#intro-text-2'), 1.5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#intro-text-3', TweenMax.from( $('#intro-text-3'), 1.5, {css:{opacity: 0}}), scrollDuration);
	
	controller.addTween('#intro-img-1', TweenMax.to( $('#intro-img-1'), 0.5, {css:{bottom:'0px'}, ease:Quad.easeInOut}), scrollDuration);
	//controller.addTween('#intro-img-2', TweenMax.to( $('#intro-img-2'), 1, {css:{bottom:'0px',left:'50px'}, ease:Quad.easeInOut}), scrollDuration);
	controller.addTween('#intro-img-3', TweenMax.to( $('#intro-img-3'), 1.5, {css:{bottom:'20px',left:'39px'}, ease:Quad.easeInOut}), scrollDuration);
	controller.addTween('#intro-img-4', TweenMax.to( $('#intro-img-4'), 2, {css:{bottom:'403px',left:'261px'}, ease:Quad.easeInOut}), scrollDuration);

	controller.addTween('#approach-img-2', TweenMax.from( $('#approach-img-2'), 1.5, {css:{left:'-1000px'}, ease:Quad.easeInOut}), scrollDuration);
	controller.addTween('#approach-text-2', TweenMax.from( $('#approach-text-2'), 1.5, {css:{opacity: 0}}), scrollDuration);
	
	
	controller.addTween('#credentials-list', TweenMax.from( $('#credentials-list'), .5, {css:{opacity: 0}}), scrollDuration);
	
	controller.addTween('#cred-1', TweenMax.from( $('#cred-1'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#cred-2', TweenMax.from( $('#cred-2'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#cred-3', TweenMax.from( $('#cred-3'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#cred-4', TweenMax.from( $('#cred-4'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#cred-5', TweenMax.from( $('#cred-5'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#cred-6', TweenMax.from( $('#cred-6'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#cred-7', TweenMax.from( $('#cred-7'), .5, {css:{opacity: 0}}), scrollDuration);
	
	controller.addTween('#credentials-img-1', TweenMax.from( $('#credentials-img-1'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#credentials-img-2', TweenMax.from( $('#credentials-img-2'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#credentials-img-3', TweenMax.from( $('#credentials-img-3'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#credentials-img-4', TweenMax.from( $('#credentials-img-4'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#credentials-img-5', TweenMax.from( $('#credentials-img-5'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#credentials-img-6', TweenMax.from( $('#credentials-img-6'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#credentials-img-7', TweenMax.from( $('#credentials-img-7'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#credentials-img-8', TweenMax.from( $('#credentials-img-8'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#credentials-img-9', TweenMax.from( $('#credentials-img-9'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('#credentials-img-10', TweenMax.from( $('#credentials-img-10'), .5, {css:{opacity: 0}}), scrollDuration);

	controller.addTween('#credentials-text-2', TweenMax.from( $('#credentials-text-2'), 1.5, {css:{opacity: 0}}), scrollDuration);
	
	controller.addTween('#closing-img-2', TweenMax.to( $('#closing-img-2'), 1.5, {css:{left:'53px'}, ease:Quad.easeInOut}), scrollDuration);
	controller.addTween('#closing-img-3', TweenMax.to( $('#closing-img-3'), 1.5, {css:{bottom:'15px',left:'180px'}, ease:Quad.easeInOut}), scrollDuration);

	
});


