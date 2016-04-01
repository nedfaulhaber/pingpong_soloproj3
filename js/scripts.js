
// if (number % 3 === 0) {     //failed code 3
//   return "ping"
// }






$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    var countTo = parseInt($("input#countTo").val());
    // var number = index;  (part of failed code 3)
    // var pingList = "";  (part of failed code 2)
    for (var index = 1; index <= countTo; index +=1) {
      // if (index % 3 === 0) {   //failed code 1
      //   return "ping"
      // }

      // if (index % 3 === 0) {   //failed code 2
      //   pingList += "ping";
      // }

      $("#result").append(index + ", ")
    };

    $("#result").show();

  });
});
