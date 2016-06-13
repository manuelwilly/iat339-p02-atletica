$(document).ready(function(){
	$(".mancity").addClass("button-clicked");
	
	// when a tab is pressed
	$(".mancity").click(function(){		
		$(".hero-mancity").animate({left: "0"});
		$(".hero-manutd").animate({left: "100%"});
		$(".mancity-container").animate({left: "0"});
		$(".manutd-container").animate({left: "100%"});
		$(".mancity").addClass("button-clicked");
		$(".manutd").removeClass("button-clicked");
	});
	
	$(".manutd").click(function(){
		$(".hero-mancity").animate({left: "-100%"});
		$(".hero-manutd").animate({left: "0"});
		$(".mancity-container").animate({left: "-100%"});
		$(".manutd-container").animate({left: "0"});
		$(".manutd").addClass("button-clicked");
		$(".mancity").removeClass("button-clicked");
	});
});