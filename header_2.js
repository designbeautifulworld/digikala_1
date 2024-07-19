document.querySelectorAll(".sub2menu li").forEach(function (item) {
  item.addEventListener("mouseover", function () {
    // Show sub-menu on hover
    this.querySelector(".sub3menu").style.display = "block";
  });
  item.addEventListener("mouseout", function () {
    // Hide sub-menu on mouse out
    this.querySelector(".sub3menu").style.display = "none";
  });
});
