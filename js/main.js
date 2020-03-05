$(document).ready(function() {
  $(".show").on("click", function() {

    $(".more-img")
      .slideToggle(700, function() {
        if ($(".show").text() === "Show") {
          $(".show").text("Hide");
        } else {
          $(".show").text("Show");
        }
      });
  });
});
