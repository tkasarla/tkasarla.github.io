$(document).ready(function() {
    $('abstract').click(function() {
        $(find("abstract hidden").toggleClass('open'));
    });
    $('bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
});
