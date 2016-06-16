// console.log("ready2go!")

$(document).on("ready", function(e) {

// ======== Sticky Nav
	var fixedNavBar = $('#navbar').offset().top;

	var fixedNavigation = function(){
		var scrollTop = $(window).scrollTop();
		      
		if (scrollTop > fixedNavBar) { 
		    $('#navbar').addClass('fixed');
		} else {
		    $('#navbar').removeClass('fixed'); 
		}
	};
	 
	fixedNavigation();
	$(window).scroll(fixedNavigation);


// ======== ScrollTo


	$("#navbar a").click(function(){
		$.scrollTo(this.hash, 300, { easing:'swing'});
		return false;
	});
	$(".what a").click(function(){
		$.scrollTo(this.hash, 300, { easing:'swing'});
		return false;
	});







})