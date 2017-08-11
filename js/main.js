$("html").addClass("js");

$(".menu-link").on("click", function(e) {
  $(".menu-link").toggleClass("active");
  $("#menu").toggleClass("active");
  e.preventDefault();
});