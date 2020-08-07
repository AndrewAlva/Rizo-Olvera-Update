var Hero_Slider = {
	switch: true,
	counter: 0,

	container: document.getElementById('hero-slider'),
	slides: document.getElementsByClassName('slide-wrap'),
	totalSlides: 0,

	interval: null,
	intervalSpeed: 3000,

	init: function(){
		this.totalSlides = this.slides.length;
	},
	
	startInterval: function(){
		// console.log("Hero Slider: Interval started");
		this.interval = setInterval(this.switchSlides.bind(this), this.intervalSpeed);
	},
	
	stopInterval: function(){
		// console.log("Hero Slider: Interval stopped");
		clearInterval(this.interval);
	},
	
	switchSlides: function(){
		// console.log('Switching slides');
		this.updateCounter();
		
		for (var i = 0; i < this.slides.length; i++) {
			this.slides[i].classList.remove('active');
		}

		this.slides[this.counter].classList.add('active');
	},

	updateCounter: function(){
		this.counter += 1;
		if (this.counter >= this.totalSlides) this.counter = 0;

	}

}
