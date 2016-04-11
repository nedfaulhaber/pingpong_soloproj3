//business logic

var ping = "Ping";
var pong = "Pong";
var pingPongArray = [];

var pingPong = function(number) {
	for (index = 1; index <= countTo; index += 1) {

		if ((index % 3 === 0) && (index % 5 === 0))  {
		    pingPongArray.push(ping + pong);
		}
     else if (index % 3 === 0){
	  	pingPongArray.push(ping);
		}

    else if (index % 5 === 0){
				pingPongArray.push(pong);
		}

    else {
			pingPongArray.push(index);
	  }


	}
};

//user interface logic

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    var countTo = parseInt($("#countTo").val());

    pingPong(countTo);

    pingPongArray.forEach(function(number) {
      $("#result").append("<li>" + number + "</li>");
    });



  });
});
