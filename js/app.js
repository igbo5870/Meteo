


(function main(){
// Obtention data meteo

	$('#selec').click(function(){


		var city = $('#ville').val();
		var lien =  "http://api.openweathermap.org/data/2.5/weather?q=" + city;


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
		$('#name').html(name);
		$('.vent').html(vent + ' m/s');
		$('.humidite').html(humidite + ' %');
		$('.coordonees').html(lattitude + ' lat ' + longitude + ' long ');


		var ajouterVille = localStorage.getItem;
		localStorage.setItem(localStorage.length, city);

		var select = $('#selectVille');
			for (i = 1; i < localStorage.length; i++){
			select.append('<option value=' + i + '>' + localStorage.getItem(i) + '</option>');
			
			}
			 
		});
		//localStorage.clear();

	
	});
  
})();