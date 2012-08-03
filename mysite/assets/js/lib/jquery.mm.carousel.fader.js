
function setImagesToScreenWidth(imgWidth, imgHeight) {
    var newHeight = this.calculateNewHeight(imgWidth, imgHeight);
    $('#slideshow').width = $(window).width();
    $('#slideshow').css("height", newHeight + "px");
    $('#slideshow DIV.active').css("height", newHeight + "px");
    $('#slideshow DIV.active').css("width", $(window).width() + "px");
    //$('#slideshow DIV.active IMG').css("width",  $(window).width() + "px");
    $('#slideshow DIV IMG').css("width", $(window).width() + "px");
}

function calculateNewHeight(imgWidth, imgHeight) {
    // Calculate Aspect ratio 
    var newImgHeight = 0;

    // Calculate Aspect ratio
    var newImgWidth = $(window).width(); ;
    var newImgHeight = Math.round((imgHeight / imgWidth) * newImgWidth);

    return newImgHeight;
}

function slideSwitch() {
    var $active = $('#slideshow DIV.active');
    if ($active.length == 0) $active = $('#slideshow DIV:last');
    var $next = $active.next().length ? $active.next() : $('#slideshow DIV:first');
    $active.addClass('last-active');
    $next.css({ opacity: 0.0 })
        .addClass('active')
        .animate({ opacity: 1.0 }, 1000, function () {
            $active.removeClass('active last-active');
        });
}
