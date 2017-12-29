
(function main(){
	$('#selec').click(function(){

		var city = $('#ville').val();
		var lien =  "https://api.openweathermap.org/data/2.5/weather?q=" + city;

		$.getJSON(lien + ',fr&lang=fr&units=metric&appid=5fe735476d87c79b7f242f8f480d72a0')
		.then(function(data){
			console.log(data);
			var temp =  data.main.temp;
			var pressure = data.main.pressure;
			var temp_max = data.main.temp_max;
			var temp_min = data.main.temp_min;
			var humidite = data.main.humidity;
			var lattitude = data.coord.lat;
			var longitude = data.coord.lon;
			var vent = data.wind.speed;
			var name = data.name;

			$('.temp').html(temp + ' °C');
			$('.pressure').html(pressure + ' hPa');
			$('.temp_max').html(temp_max + ' °C');
			$('.temp_min').html(temp_min + ' °C');
			$('.name').html(name);
			$('.vent').html(Math.round(vent * 3.6) + ' km/h');
			$('.humidite').html(humidite + ' %');
			$('.coordonees').html(lattitude + ' lat ' + longitude + ' long ');
			$('.icone_meteo').html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon  + ".png' alt='icone meteo' />");

			// Carte 
			//********************************************************
			 var mymap = L.map('mapid').setView([lattitude, longitude], 13);

    	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
    	}).addTo(mymap);


			var ajouterVille = localStorage.getItem;
			localStorage.setItem(localStorage.length, city);
			console.log(ajouterVille)
			var select = $('#selectVille');
			for (i = 1; i < localStorage.length; i++){
			select.append('<option value=' + i + '>' + localStorage.getItem(i) + '</option>');

			}
		});
    });

})();

