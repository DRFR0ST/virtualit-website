$(document).ready(function() {
	$('.parallax').parallax();

	$('.scrollspy').scrollSpy({scrollOffset: 0});

	$('.modal').modal();

	$('.button-collapse').sideNav({
	  menuWidth: 300, // Default is 300
	  edge: 'right', // Choose the horizontal origin
	  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
	  draggable: true // Choose whether you can drag to open on touch screens,
	}
	);

	var options = [
		{selector: '#services-section', offset: 200, callback: function() {
		  $('#services-section-content').css("opacity", 1);
		  $('#services-section .scale-transition').addClass("scale-in");
		} },
	];
	Materialize.scrollFire(options);
});