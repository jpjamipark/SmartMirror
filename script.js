$( document ).ready(function() {
    startTime();


});


var callbackFunction = function(data) {
    var forecast = data.query.results.channel.item.forecast;
    generateWeatherDOM(forecast);
};

function generateWeatherDOM(forecast){
for (var i = 0; i < forecast.length; i++) {
	$( document ).ready(function() {
	text = forecast[i].text;
	console.log(text);
	console.log(day);
    $( "#weather" ).append( "<div>" + day + "</div>" );
	});
}
}




function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

	dd = checkTime(dd);
	mm = checkTime(mm);

    m = checkTime(m);
    s = checkTime(s);
    $('#date').html(mm + "/" + dd +"/" + yyyy); 

    $('#time').html(h + ":" + m); 
    console.log("ay");
    var t = setTimeout(startTime, 30000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

