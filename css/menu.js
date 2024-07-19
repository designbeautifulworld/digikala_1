// Add event listener to main menu items
document.querySelectorAll(".main-nav li").forEach(function (item) {
  item.addEventListener("mouseover", function () {
    // Show sub-menu on hover
    this.querySelector(".sub-menu").style.display = "block";
  });
  item.addEventListener("mouseout", function () {
    // Hide sub-menu on mouse out
    this.querySelector(".sub-menu").style.display = "none";
  });
});
