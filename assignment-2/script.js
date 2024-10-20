$("#section1-img1").click(function () {
  $(this).toggleClass("flipped");

  setTimeout(() => {
    $(this).css("visibility", "hidden");
    $("#section1-img2").css("visibility", "visible").addClass("flipped");
  }, 300);
});

$("#section1-img2").click(function () {
  $(this).removeClass("flipped");

  setTimeout(() => {
    $(this).css("visibility", "hidden");
    $("#section1-img1").css("visibility", "visible").removeClass("flipped");
  }, 300);
});
