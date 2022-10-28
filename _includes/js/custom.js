
$(document).ready(function(){
  $(".bibtex-hidden").hide()
  $(".abstract-hidden").hide()
  $(".abstract").click(function(){
    $(this).parent().find(".bibtex-hidden").hide();
    $(this).parent().find(".abstract-hidden").toggle();
  });
   $('.bibtex').click(function() {
    $(this).parent().find(".abstract-hidden").hide();
    $(this).parent().find(".bibtex-hidden").toggle();
  });
});
