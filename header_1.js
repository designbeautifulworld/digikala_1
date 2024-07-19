// Add event listener to main menu items
document.querySelectorAll(".bottom_bottom li").forEach(function (item) {
  item.addEventListener("mouseover", function () {
    // Show sub-menu on hover
    this.querySelector(".submenu").style.display = "block";
  });
  item.addEventListener("mouseout", function () {
    // Hide sub-menu on mouse out
    this.querySelector(".submenu").style.display = "none";
  });
});
