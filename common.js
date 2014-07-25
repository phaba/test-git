$(document).ready(function() {
	var slider = $('#slider'),
		content = slider.find('.content'),
		prev = slider.find('.prev'),
		next = slider.find('.next'),
		slide_width = slider.find('.slide').eq(0).outerWidth(),
		current = 0,
		count = slider.find('.slide').length;

	prev.on('click', function() {
		if(current !== 0) {
			current--;
			content.animate({scrollLeft: (current * slide_width)}, 1000);
		}
	});

	next.on('click', function() {
		if(current <= count) {
			current++;
			content.animate({scrollLeft: current * slide_width}, 1000);
		}
	});
});