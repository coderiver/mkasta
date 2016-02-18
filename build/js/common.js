$(document).ready(function() {
	$('.js-more').on('click', function(e){
		e.preventDefault();
		$('.card').toggleClass('is-visible');
		$('.bonus').css({
			"display": "none"
		})
	});
});