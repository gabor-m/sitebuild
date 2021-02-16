// header dropdown menu
$('[data-dropdown]').hover(function () {
    $('[data-dropdown-menu]').slideDown('medium');
}, function(){
    $('[data-dropdown-menu]').slideUp('medium');
});

// mobile menu
$('[data-mobile-menu-btn]').click(function () {
    if(!$(this).hasClass("active")){
        $(this).addClass("active");
        $('[data-slide-menu]').slideDown();
    } else {
        $(this).removeClass("active");
        $('[data-slide-menu]').slideUp();
    }
});

// slider
$('[data-indicator]').click(function () {
    var index = $(this).data("indicator");        
    $('[data-slide]').each(function () {
        $(this).removeClass("active");
    });

    $('[data-indicator]').each(function () {
        $(this).removeClass("active");
    });

    $(this).addClass("active");

    var slide = $("[data-slides]").find('[data-slide="' + String(index) + '"]');
    slide.addClass('active');
});

// placeholders
(function () {
    function updatePlaceholder() {
        var $input = $(this);
        var $label = $input.closest(".input-row").find("label");
        if ($input.val().trim() || $input.is(':focus')) {
            $label.addClass("placeholder-moved");
        } else {
            $label.removeClass("placeholder-moved");
        }
    }
    
    $("[data-fancy-placeholder]").focus(updatePlaceholder);
    $("[data-fancy-placeholder]").focusout(updatePlaceholder);
    $("[data-fancy-placeholder]").on("input", updatePlaceholder);
}());

// count characters
$("[data-textarea]").on('input', function () {
    var max = 200;
    $(this).attr('maxlength', String(max));
    var length = $(this).val().length;
    $('[data-characters-left]').text(max - length);
});


