var app = new Vue({
	el: '#app',
	data: {
		message: '',
		info: {},
		loading: false,
		urlSuffix: '',
		displayInfo: [],
		numElements: 0,
	},
	methods: {
		sgApi: function() {
			this.loading = true;
			fetch('https://ghibliapi.herokuapp.com' + this.urlSuffix).then(response => {
				return response.json();
			}).then(json => {
				this.info = json;
				this.displayInfo = [];
				this.getData();
				this.loading = false;
			}).catch(err => {
				this.message = "Sorry, an error occurred."
			});
		},
		buttonClick: function(value) {
			this.urlSuffix = value;
			this.sgApi();
		},
		getData: function() {
			console.log(this.info);
			this.numElements = this.info.length;
			if (this.urlSuffix === '/films') {
				this.message = 'Films';
				for (var i = 0; i < this.info.length; i++) {
					let title = "Title: " + this.info[i].title;
					let filmDescription = "Description: " + this.info[i].description;
					let director = "Director: " + this.info[i].director;
					let producer = "Producer: " + this.info[i].producer;
					let releaseDate = "Release Date: " + this.info[i].release_date;
					let rtScore = "Rotten Tomatoes: " + this.info[i].rt_score + "%";
					var object = [];
					object.push(title);
					object.push(filmDescription);
					object.push(director);
					object.push(producer);
					object.push(releaseDate);
					object.push(rtScore);
					this.displayInfo.push(object);
				}
				console.log(this.displayInfo);
			}
			else if (this.urlSuffix === '/people') {
				this.message = 'People';
				for (var i = 0; i < this.info.length; i++) {
					let personName = "Name: " + this.info[i].name;
					let age = "Age: " + this.info[i].age;
					let eyeColor = "Eye Color: " + this.info[i].eye_color;
					let gender = "Gender: " + this.info[i].gender;
					let hairColor = "Hair Color: " + this.info[i].hair_color;
					var object = [];
					object.push(personName);
					object.push(age);
					object.push(eyeColor);
					object.push(gender);
					object.push(hairColor);
					this.displayInfo.push(object);
				}
			}
			else if (this.urlSuffix === '/locations') {
				this.message = 'Locations';
				for (var i = 0; i < this.info.length; i++) {
					let climate = "Climate: " + this.info[i].climate;
					let locationName = "Name: " + this.info[i].name;
					let terrain = "Terrain: " + this.info[i].terrain;
					var object = [];
					object.push(locationName);
					object.push(climate);
					object.push(terrain);
					this.displayInfo.push(object);
				}
			}
			else if (this.urlSuffix === '/species') {
				this.message = 'Species';
				for (var i = 0; i < this.info.length; i++) {
					let speciesName = "Name: " + this.info[i].name;
					let classification = "Classification: " + this.info[i].classification;
					let eyeColors = "Eye Colors: " + this.info[i].eye_colors;
					let hairColors = "Hair Colors: " + this.info[i].hair_colors;
					var object = [];
					object.push(speciesName);
					object.push(classification);
					object.push(eyeColors);
					object.push(hairColors);
					this.displayInfo.push(object);
				}
			}
			else {
				this.message = 'Vehicles';
				for (var i = 0; i < this.info.length; i++) {
					let vehicleName = "Name: " + this.info[i].name;
					let vehicleDescription = "Description: " + this.info[i].description;
					let length = "Length: " + this.info[i].length + "ft"
					let vehicleClass = "Class: " + this.info[i].vehicle_class;
					var object = [];
					object.push(vehicleName);
					object.push(vehicleDescription);
					object.push(length);
					object.push(vehicleClass);
					this.displayInfo.push(object);
				}
			}
		}
	}
});