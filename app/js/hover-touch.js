var Hover_Touch = {
	els: [],
	class: 'hover-touch',

	init: function() {
		this.getElements();
		this.setupListeners();
	},

	getElements: function() {
		this.els = document.getElementsByClassName(this.class);
	},
	
	setupListeners: function() {
		var _self = this;
		for (var i = 0; i < this.els.length; i++) {
			this.els[i].addEventListener('touchstart', this.activateTouch.bind(null, _self, i), {passive: true} );
			this.els[i].addEventListener('mouseleave', this.deactivateTouch.bind(null, _self, i));
		}
	},
	
	activateTouch: function(self, index, event) {
		for (var i = 0; i < self.els.length; i++) {
			self.els[i].classList.remove('hovered');
		}

		self.els[index].classList.add('hovered');
	},

	deactivateTouch: function(self, index, event) {
		self.els[index].classList.remove('hovered');
	}
}