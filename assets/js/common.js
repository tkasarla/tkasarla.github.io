$(document).ready(function() {
    $('span.abstract').click(function() {
        $("span.abstract-hidden").toggleClass('open');
    });
    $('span.bibtex').click(function() {
        $("span.bibtex-hidden").toggleClass('open');
    });
});

