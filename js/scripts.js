







$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    var countTo = parseInt($("input#countTo").val());
    var pingList = "";
    for (var index = 1; index <= countTo; index +=1) {
      if (index % 3 === 0) {
        pingList += "ping";
      }
      $("#result").append(index + ", ")
    };

    $("#result").show();

  });
});
