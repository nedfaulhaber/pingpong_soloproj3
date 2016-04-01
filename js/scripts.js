







$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    var countTo = parseInt($("input#countTo").val());

    for (var index = 1; index <= countTo; index +=1) {
      $("#result").append(index + ", ")
    };

    $("#result").show();

  });
});
