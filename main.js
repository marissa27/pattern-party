$( document ).ready(function() {
  console.log('jquery is set')
})

$(".menu").click(function() {
  $(this).toggleClass('on');
  $(".new-menu").toggleClass("active");
});
