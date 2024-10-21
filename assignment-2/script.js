function flipImages(sectionImg1, sectionImg2) {
  $(sectionImg1).click(function () {
    $(this).addClass("flipped");
    $(sectionImg2).removeClass("flipped");
  });

  $(sectionImg2).click(function () {
    $(this).addClass("flipped");
    $(sectionImg1).removeClass("flipped");
  });
}

flipImages("#section1-img1", "#section1-img2");
flipImages("#section2-img1", "#section2-img2");
flipImages("#section3-img1", "#section3-img2");
