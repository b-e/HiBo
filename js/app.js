$(document).ready(function() {
    $(".content").children('section').each(function(i, section) {
        $(section).css("min-height", $(window).height());
    })

    $('#accordion_ambiti').accordion();
    $('#accordion_servizi').accordion();

    $('.bxslider').bxSlider();

    var topMenu = $("#navbar"),
        topMenuHeight = topMenu.outerHeight()+15,
    // All list items
        menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    // Bind to scroll
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
        // Set/remove active class
        menuItems
            .parent().removeClass("selected")
            .end().filter("[href=#"+id+"]").parent().addClass("selected");
    });

});

$(window).resize(function() {
    $(".content").children('section').each(function(i, section) {
        $(section).css("min-height", $(window).height());
    })
})

$('nav a').click(function(e) {
    $('li.selected').removeClass("selected");
    $(e.target).parent().addClass("selected");
})

