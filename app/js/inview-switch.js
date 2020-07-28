var Inview_Switch = function(args) {
	var _self = this;

	this.id = args.id;
	this.container = undefined;
	this.switch = false;
	
	this.topPosition;
	this.bottomPosition;

	this.topDistance;
	this.bottomDistance;
	
	this.init = function() {
		_self.container = document.getElementById(args.id);
		_self.setListener();
		
		// Activate once
		_self.duringScroll();
	}


	this.getPositions = function(){
		_self.topPosition = _self.container.getBoundingClientRect().top;
		_self.bottomPosition = _self.container.getBoundingClientRect().bottom;

		this.topDistance = _self.topPosition - (window.innerHeight);
		this.bottomDistance = _self.bottomPosition - (window.innerHeight);
	}

	this.setListener = function() {
		window.addEventListener("scroll", throttle(_self.duringScroll, 300), {passive: true});
	}

	this.duringScroll = function() {
		_self.getPositions();

		if(_self.topDistance < 0 && _self.bottomDistance > - window.innerHeight) {
			if (!_self.switch) {
				_self.turnOn();
			}
		} else {
			if (_self.switch) {
				_self.turnOff();
			}
		}
	}

	this.turnOn = function() {
		_self.switch = true;
		_self.container.classList.add('inview');

		if(args.OnCallback) args.OnCallback();
	}
	this.turnOff = function() {
		_self.switch = false;
		_self.container.classList.remove('inview');

		if(args.OffCallback) args.OffCallback();
	}
}