$(document).ready(function() {
  $response = $.ajax({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Key", "ADSCNygIvgmshwg2H0zYSQwf8joyp1rtXAjjsnkzdEiNEFjwUv");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.setRequestHeader("Accept", "application/json");
    },
    dataType: "json"
  })
  .done(function(data) {
    console.log(data);
    console.log(data[3]);
    $("button").click(function() {
       $("#quote").text(data["quote"]);
       $("#author").text("— " + data["author"]);
    });
  });
});
