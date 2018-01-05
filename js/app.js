(function main(){

	$('.btn1').click(function(){
	var nb = $(".fred").val();
	var interval = setInterval(timer,1000);	/* 1000 = 1 seconde */

	function timer(){
		nb = nb - 1;
		$('.Rebours').html(nb);
		if(nb===0){
			clearInterval(interval);
		}

};
});
})();




	