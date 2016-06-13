$(document).ready(function(){
	// toggle the nav
	$('.menu-icon').click( function() { 
		$('.menu').toggleClass('not-hidden');
	});

	// if you click the comment link in the blog
	$('.comment-button').click( function() { 
		$(this).siblings('.comment-form').slideToggle();
	});

	// if you click the cancel button in blog comment form
	$('.comment-form').find('.button-reset').click( function() { 
		$(this).parents('.comment-form').slideUp();
	});

	// if you click the submit button in blog comment form
	$('.comment-form').find('.button-default').click( function() { 
		$(this).parents('.comment-form').slideUp();
	});
});