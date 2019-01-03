$(document).ready(function() {
    $('links').click(function() {
        $(find("abstract hidden").toggleClass('open'));
    });
    $('bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
});
