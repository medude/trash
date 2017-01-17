var weightButton;
var bagButton;

var flipCard;

$(function() {
	weightButton = $("#byWeight");
	bagButton = $("#byBags");
	
	flipCard = $("#flipCard");
	flipCard.flip({
		trigger: "manual",
		autosize: true
	});
	
	bagButton.prop("checked", true);
	
	bagButton.on("click", function() {
		flipCard.flip(false);
		var newHeight = $("#bagsContentWrapper").innerHeight();
		flipCard.height(newHeight);
	});
	
	weightButton.on("click", function() {
		flipCard.flip(true);
		var newHeight = $("#weightContentWrapper").innerHeight();
		flipCard.height(newHeight);
	});
});