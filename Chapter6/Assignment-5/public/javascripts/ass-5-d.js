/**
 * Created by Pankil on 3/21/2016.
 */
var win = 0;
var losses = 0;
$("#head").click(function() {
    var data = JSON.stringify({'call': "head"});

    $.ajax({
            method: "POST",
            url: "http://localhost:3000/flip",
            dataType: "json",
			contentType:"application/json",
            data: data
        })
        .done(function(msg) {
            $("#result").html(msg);
        });
});

$("#tail").click(function() {

    var data = JSON.stringify({'call': "tail"});
	
    $.ajax({
            method: "POST",
            url: "http://localhost:3000/flip",
            dataType: "json",
			contentType:"application/json",
            data: data
        })
        .done(function(msg) {
            $("#result").html(msg);
        });
});


$("#stats").click(function() {
    $.ajax({
        method: "GET",
        url: "http://localhost:9999/stats",
		contentType:"application/json",
        dataType: "json"
    }).done(function(msg) {
        $("#result").html(msg);
    });

});