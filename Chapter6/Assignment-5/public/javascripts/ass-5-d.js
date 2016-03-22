/**
 * Created by Pankil on 3/21/2016.
 */
var win = 0;
var losses = 0;
$("#head").click(function() {
    var data = {
        "call": "head"
    };

    $.ajax({
            method: "POST",
            url: "http://localhost:9999/flip",
            dataType: "json",
            data: {
                call: "head"
            }
        })
        .done(function(msg) {
            $("#result").html(msg);
        });
});

$("#tail").click(function() {

    var data = {
        call: "tail"
    };

    $.ajax({
            method: "POST",
            url: "http://localhost:9999/flip",
            dataType: "json",
            data: {
                call: "tail"
            }
        })
        .done(function(msg) {
            $("#result").html(msg);
        });
});


$("#stats").click(function() {
    $.ajax({
        method: "GET",
        url: "http://localhost:9999/stats",
        dataType: "json"
    }).done(function(msg) {
        $("#result").html(msg);
    });

});