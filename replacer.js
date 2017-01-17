function Replacer(value, locations) {
	this.value = value;
	this.locations = locations;
	
	this.replace = function() {
		this.locations.empty();

		this.locations.append(this.value.toString());
	}
}