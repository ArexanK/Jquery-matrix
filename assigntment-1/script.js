$("#navbar").mouseenter(function () {
  $(this).css({
    background: "pink",
  });
});

let $this = $(this);
setTimeout(function () {
  $this.css(
    {
      background: "blue",
    },
    3000
  );
});

$("button").click(function () {
  alert("Wow,this button works");
});

$("img").click(function () {
  $(this).fadeOut();
});

$(".card").click(function () {
  $(this).css({
    transform: "scale(1.05)",
  });
});

$("h1").mouseenter(function () {
  $(this).css({
    transform: "scale(2.05)",
    border: "1px solid black",
  });
});

let textAvailable = true;
$("p").mouseenter(function () {
  if ($(this).text().trim().length > 0) {
    $(this).hide();
  } else {
    $(this).show();
  }
});
