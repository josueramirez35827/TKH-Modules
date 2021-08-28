let car = {
	brand: "Tesla",
	windows: "Tinted",
	drive: "4 wheeled drive",
	get drive() {
		return this.drive;
	}
};

car.drive

let car = {
	brand: "Tesla",
	windows: "Tinted",
	drive: "",
	set drive(drive){
		this.drive = drive;
	}
};

car.drive = "4 wheeled drive"



let sport = {
	team = "Brooklyn Nets",
	location = "Barclays Center",
	association = "NBA"
	get association() {
		return this.association
	}
};

let sport = {
	team = "Brooklyn Nets",
	location = "Barclays Center",
	association = "",
	set association() {
		this.association = association;
	}
};

sport.association = "NBA"



let animal = {
	speices = "Bird",
	type = "Emperor Penguin",
	location = "Antarctica",
	get location() {
		return this.location;
	}
};

let animal = {
	speices = "Bird",
	type = "Emperor Penguin",
	location = "",
	set location() {
		this.location = location;
	}
};

animal.location = "Antarctica";