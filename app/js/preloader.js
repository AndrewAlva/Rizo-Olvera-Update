var Preloader = {
	el: document.getElementById('preloader'),

	init: function(){
		var _self = this;

		document.body.classList.add('loaded');

		setTimeout(function(){
			_self.el.parentNode.removeChild(_self.el);
		}, 1000)
	},
}