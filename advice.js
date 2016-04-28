$(document).ready(function() {
  $.getJSON("http://api.adviceslip.com/advice", function(json) {
      $(".quote").html(json.slip.advice);
  });
  $("#getMessage").on("click", function() {
    $.getJSON("http://api.adviceslip.com/advice", function(json) {
      $(".quote").html(json.slip.advice);
    });
  });
});
