(function main(){
	
	$("#selec").on("click", function(){

		// Variable globale 
		//******************************************************************************************
		var city = $("#ville").val();
		var keyApi = "5fe735476d87c79b7f242f8f480d72a0";
		var lien = 'https://api.openweathermap.org/data/2.5/weather?q=' + city ;

		// Récupère le fichier JSON qui se trouve sur le lien.
		//*******************************************************************************************
		$.getJSON(lien +',fr&lang=fr&units=metric&appid=' + keyApi)
  		.then(function (data) {

  			// Récupération des données spécifique 
  			//*****************************************************
  			var name = data.name;
     		var temp = data.main.temp_min;
     		var humidite = data.main.humidity;
     		var lattitude = data.coord.lat;// coordonnée
     		var longitude = data.coord.lon;
     		var coord = data.coord;
     		// vitesse vent
     		var vent = data.wind.speed;
     		// pression
     		var pression = data.main.pressure; 
     		// affihcage des donées 

     		$('.temperature').append(temp);
     		console.log(temp + "°C");
     		console.log(humidite);
     		console.log(name);
     		console.log(lattitude);
     		console.log(longitude);
     		console.log(vent);
     		console.log(pression);
     		console.log(coord);
		});

	});

})();