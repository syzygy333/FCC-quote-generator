$(document).ready(function() {
  var quotes = $.get( "http://www.stands4.com/services/v2/quotes.php?uid=5001&tokenid=AkaaeZoxqJY9vI7R&searchtype=RANDOM", function(data) {
    $("button").click(function() {
       $("#quote").text(data["quote"]);
       $("#author").text("— " + data["author"]);
    });
  });
});