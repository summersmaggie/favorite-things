$(document).ready(function() {
  $("#formOne").submit(function(event) {
  var favorites = ["food", "color", "season", "music"];

  favorites.forEach(function(favorite) {
    var userInput = $("input#" + favorite).val();
    $("." + favorite).text(userInput);
  });

  $("#result").show();

  event.preventDefault();
  });
});
