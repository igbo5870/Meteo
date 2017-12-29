<<<<<<< HEAD
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
		$('.vent').html(vent * 3.6 + ' km/h');
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
=======
	});
	//localStorage.clear(); // vider le cache 
});

})();












// (function main(){
// var xhr=createXHR();	
// $('#mybtn').on('click',function(){
// 	//getJson();
// 	getJqAjax();
// })
// function getJqAjax(){
// 	var mylat = $('#mylat').val();
// 	var mylng = $('#mylng').val();
// 	$.ajax({
// 		url:"https://www.prevision-meteo.ch/services/json/lat="+ mylat +"lng="+mylng+"",
// 		datatype:'json',
// 		success: function(data){
// 			console.log("success");
// 			console.log(data.fcst_day_0.condition)
// 		},
// 		error: function(){
// 			console.log("no way, i'm fucked");
// 		}
// 	})
// }
// function getJson(){
// 	var mylat = $('#mylat').val();
// 	var mylng = $('#mylng').val();

// 	var myurl = "https://www.prevision-meteo.ch/services/json/lat="+ mylat +"lng="+mylng;
// 	//var myurl = "http://www.geobi.fr/dev/googleplace/places.php?lat="+ mylat +"&lon="+mylng+"&type=pharmacy&radius=10000";
// 	//"http://www.geobi.fr/dev/googleplace/places.php?lat=44.334862&lon=2.435056&type=pharmacy&radius=10000"
// 	var objJSON;
	
// 	xhr.open("GET", myurl,true);

// 	xhr.onreadystatechange=function()
// 	{
				
// 		if (xhr.readyState == 4) 
// 		{
// 			if (xhr.status != 404) 
// 			{
// 				var maMeteo=eval("(" + xhr.responseText + ")");
// 				var myDiv = $('#meteo');
// 				var contenu ="";
// 				//var contenu = maMeteo.
// 				var myCondition = maMeteo.fcst_day_0.condition;
// 				alert(mycondition);
// 			}
// 		}
// 	}
// 	xhr.send(null);
// }

// function createXHR() 
// {
//     var request = false;
//         try {
//             request = new ActiveXObject('Msxml2.XMLHTTP');
//         }
//         catch (err2) {
//             try {
//                 request = new ActiveXObject('Microsoft.XMLHTTP');
//             }
//             catch (err3) {
// 		try {
// 			request = new XMLHttpRequest();
// 		}
// 		catch (err1) 
// 		{
// 			request = false;
// 		}
//             }
//         }
//     return request;
// }
// })();
>>>>>>> chris
