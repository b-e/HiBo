$(document).ready(function() {
    $(".content").children('div').each(function(i, div) {
        $(div).css("min-height", $(window).height());
    })

    $('#accordion_ambiti').accordion();
    $('#accordion_servizi').accordion();

    var manageAccordion = function(ul, targetToShow) {
        $(ul).children('li').each(function(i, li){
        })
    };

    $('.bxslider').bxSlider();

});

$(window).resize(function() {
    $(".content").children('div').each(function(i, div) {
        $(div).css("min-height", $(window).height());
    })
})

$('nav a').click(function(e) {
    $('li.selected').removeClass("selected");
    $(e.target).parent().addClass("selected");
})

