$(document).ready(function () {
  $("#toggle").click(function () {
    var elem = $("#toggle").text();
    if (elem == "مشاهده بیشتر") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("بستن");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("مشاهده بیشتر");
      $("#text").slideUp();
    }
  });
});
