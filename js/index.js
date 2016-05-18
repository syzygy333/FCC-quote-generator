$(document).ready(function() {
  $.ajax({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Key", "ADSCNygIvgmshwg2H0zYSQwf8joyp1rtXAjjsnkzdEiNEFjwUv");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.setRequestHeader("Accept", "application/json");
    },
    dataType: "json"
  })
  .done(function(data) {
    var tweet = data["quote"] + " — " + data["author"];
    $("#quote").text(data["quote"]);
    $("#author").text("— " + data["author"]);
    $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" + tweet);
  });

  $("button").click(function() {
    $.ajax({
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Key", "ADSCNygIvgmshwg2H0zYSQwf8joyp1rtXAjjsnkzdEiNEFjwUv");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Accept", "application/json");
      },
      dataType: "json"
    })
    .done(function(data) {
      var tweet = data["quote"] + " — " + data["author"];
      $("#quote").text(data["quote"]);
      $("#author").text("— " + data["author"]);
      $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" + tweet);
    });
  });
});
