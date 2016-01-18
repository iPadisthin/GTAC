$(document).ready(function () {
    
    /* hover handler for main nav */
    $(".modules-select").hover(function () {
        $(this).find("ul").removeClass("visuallyhidden");
    }, function () {
        $(this).find("ul").addClass("visuallyhidden");
    });
});