(function main(){

		$('#selec').on('click', function(){

			var city = $('#ville').val();
			var KeyAPI = '5fe735476d87c79b7f242f8f480d72a0';
			var link = 'https://api.openweathermap.org/data/2.5/weather?q=' + city;

// Récupérer Le JSON qui correspond au lien.
			$.getJSON(link + ',fr&lang=fr&units=metric&appid=' + KeyAPI)
				.then(function(data){

						var cityName = data.name;
						console.log(cityName);
						var coord = data.coord.lon;
						console.log(coord);
						var coord2 = data.coord.lat;
						console.log(coord2);
						var windspeed = data.wind.speed;
						console.log(windspeed);
						var hum = data.main.humidity;
						console.log(hum);
						var pressure = data.main.pressure;
						console.log(pressure);
						var tempMain = data.main.temp;
						console.log(tempMain);
						// var tempMin = main.temp_min;
						// console.log(tempMin);
						// var tempMax = main.temp_max;
						// console.log(tempMax);

					})
			});


})();
