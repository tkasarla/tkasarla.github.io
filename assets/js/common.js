$(document).ready(function(){
  $(".abstract").click(function(){
    $(this).find(".abs-hidden").toggle();
  });
   $('.bibtex').click(function() {
     $(this).(".bibtex-hidden").toggleClass();
  });
});

