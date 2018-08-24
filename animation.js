;(function(window) {
	var docElem = document.documentElement,
	header = document.querySelector('.cbp-af-header'),
	changeDownOn = 300,
	changeUpOn = 100;

	if(docElem.clientWidth <= 320) { // for phone
		changeDownOn = 150;
	}

	console.log(changeDownOn);

	function init() {
		window.addEventListener('scroll', function() {
			setTimeout(scrollPage, 200);
		})

	}

	function scrollPage() {
		var position = scrollY();
		if(position >= changeDownOn) {
			header.classList.add('cbp-af-header-shirk');
		} else if(position <= changeUpOn) {
			header.classList.remove('cbp-af-header-shirk');
		} 
	}

	function scrollY() {
		return docElem.scrollTop || window.pageYOffset;
	}

	init();
})(window);
