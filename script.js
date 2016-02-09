$( document ).ready(function() {
    startTime();


});


var callbackFunction = function(data) {
    var forecast = data.query.results.channel.item.condition;
    generateWeatherDOM(forecast);
};

function generateWeatherDOM(forecast){
$( document ).ready(function() {
    info = forecast.temp + " " + forecast.text;
    $("#weather").append(info);
});
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

