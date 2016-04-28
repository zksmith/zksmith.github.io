$(document).ready(function() {
  $.getJSON("http://api.adviceslip.com/advice", function(json) {
    $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text="+json.slip.advice);
    $(".quote").html(json.slip.advice);
  });
  $("#getMessage").on("click", function() {
    
    $.getJSON("http://api.adviceslip.com/advice", function(json) {
      $(".quote").html(json.slip.advice);
      $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text="+json.slip.advice);
    });
    $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text="+json.slip.advice);
  });
});
