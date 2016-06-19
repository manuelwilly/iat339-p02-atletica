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

	$('input[name="searchString"]').on('input',function(){
		$('#predictiveSearchResults').css('display','block');
		if($('input[name="searchString"]').val().length == 0){
			$('#predictiveSearchResults').css('display','none');
		}
		
	});
	$(window).click(function() {
		$('#predictiveSearchResults').css('display','none');
	});

	$('#predictiveSearchResults').click(function(event){
	    event.stopPropagation();
	});


});

