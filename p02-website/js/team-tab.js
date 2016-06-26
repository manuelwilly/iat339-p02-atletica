$(document).ready(function(){
	$(".mancity").addClass("button-clicked");
	
	// when a tab is pressed
	$(".mancity").click(function(){		
		$(".banner-mancity").animate({left: "0"});
		$(".banner-manutd").animate({left: "-100%"});
		$(".banner-chelsea").animate({left: "-100%"});
		$(".banner-arsenal").animate({left: "-100%"});
		$(".mancity-container").animate({left: "0"});
		$(".manutd-container").animate({left: "-100%"});
		$(".chelsea-container").animate({left: "-100%"});
		$(".arsenal-container").animate({left: "-100%"});
		$(".mancity").addClass("button-clicked");
		$(".manutd").removeClass("button-clicked");
		$(".chelsea").removeClass("button-clicked");
		$(".arsenal").removeClass("button-clicked");
	});
	
	$(".manutd").click(function(){
		$(".banner-mancity").animate({left: "-100%"});
		$(".banner-manutd").animate({left: "0"});
		$(".banner-chelsea").animate({left: "-100%"});
		$(".banner-arsenal").animate({left: "-100%"});
		$(".mancity-container").animate({left: "-100%"});
		$(".manutd-container").animate({left: "0"});
		$(".chelsea-container").animate({left: "-100%"});
		$(".arsenal-container").animate({left: "-100%"});
		$(".manutd").addClass("button-clicked");
		$(".mancity").removeClass("button-clicked");
		$(".chelsea").removeClass("button-clicked");
		$(".arsenal").removeClass("button-clicked");
	});

	$(".chelsea").click(function(){
		$(".banner-mancity").animate({left: "-100%"});
		$(".banner-manutd").animate({left: "-100%"});
		$(".banner-chelsea").animate({left: "0"});
		$(".banner-arsenal").animate({left: "-100%"});
		$(".mancity-container").animate({left: "-100%"});
		$(".manutd-container").animate({left: "-100%"});
		$(".chelsea-container").animate({left: "0"});
		$(".arsenal-container").animate({left: "-100%"});
		$(".chelsea").addClass("button-clicked");
		$(".mancity").removeClass("button-clicked");
		$(".manutd").removeClass("button-clicked");
		$(".arsenal").removeClass("button-clicked");
	});

	$(".arsenal").click(function(){
		$(".banner-mancity").animate({left: "-100%"});
		$(".banner-manutd").animate({left: "-100%"});
		$(".banner-chelsea").animate({left: "-100%"});
		$(".banner-arsenal").animate({left: "0"});
		$(".mancity-container").animate({left: "-100%"});
		$(".manutd-container").animate({left: "-100%"});
		$(".chelsea-container").animate({left: "-100%"});
		$(".arsenal-container").animate({left: "0"});
		$(".arsenal").addClass("button-clicked");
		$(".mancity").removeClass("button-clicked");
		$(".manutd").removeClass("button-clicked");
		$(".chelsea").removeClass("button-clicked");
	});
});