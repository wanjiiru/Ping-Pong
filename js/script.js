
var output = "";

function getResponse(play){
    if (play % 5 ===0 && play % 3 === 0) {
        output = "Ping pong "
    } else if (play % 5 === 0) {
        output = "Pong"
    } else if (play % 3 === 0) {
        output = "Ping"
    } else {
        output = play;}
    return output;
}

$(document).ready(function () {
    $("form#get-results").submit(function (event) {
        $("ul#list-1").text('');
        event.preventDefault();
        var num = $("#user-input").val();
        console.log(num);
        for(var counter =1;counter <=num; counter ++ ) {
            var result = getResponse(counter);
            console.log(result);
            $("ul#list-1").append("<li class='myList'>"+result+"</li>")
        }
        $("#user-input").val("");

    });

});


