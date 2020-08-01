var HeroSlider_Interval_Switch, LScroll;

document.addEventListener('DOMContentLoaded', function() {
	// Do something
	HeroSlider_Interval_Switch = new Inview_Switch({
		id:'hero-slider',
		
		OnCallback: function(){
			Hero_Slider.switch = true;
			Hero_Slider.startInterval();
		},
		
		OffCallback: function(){
			Hero_Slider.switch = false;
			Hero_Slider.stopInterval();
		}
	});

	// Enable hover animation triggered by touch on mobile devices
	Hover_Touch.init();

	// Enable Locomotive Scroll
	LScroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true,
		lerp: 0.08
	});
});


// Trigger functions after page is completely loaded
window.onload = function() {
	// Do something, remove preloader perhaps
	console.log("Page fully loaded.");
	console.log("Initialize.js");

	Hero_Slider.init();
	HeroSlider_Interval_Switch.init();


	// Remove preloader
	Preloader.init();
}