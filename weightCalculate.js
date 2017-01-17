// Button that gets clicked
var weightCalculateButton;

// Objects that will replace things with the proper class
var trashWeightReplacer;
var trashVolumeReplacer;
var weightUnitsReplacer;
var volumeUnitsReplacer;

// Elements that hold the trash's weight
var trashWeightElement;
var weightUnitsElement;

// The results, so that we can show them
var results;

$(initCalc);

function initCalc() {
	getElements();
	
	weightCalculateButton.on("click", setUpReplacers);
}

function getElements() {
	weightCalculateButton = $("#weightCalculate");
	trashWeightElement = $("#weightInput");
	weightUnitsElement = $("#weightUnitInput");
	results = $("#result");
}

function setUpReplacers() {
	var trashWeight = trashWeightElement.val();
	var weightUnits = weightUnitsElement.val();
	
	var density = (weightUnits == "kg." ? 164 : 361.6);
	var trashVolume = trashWeight / density;
	
	trashWeightReplacer = new Replacer(trashWeight, $(".trashWeight"));
	trashWeightReplacer.replace();
	
	weightUnitsReplacer = new Replacer(weightUnits, $(".weightUnits"));
	weightUnitsReplacer.replace();
	
	trashVolumeReplacer = new Replacer(trashVolume, $(".trashVolume"));
	trashVolumeReplacer.replace();
	
	results.removeClass("hidden");
}