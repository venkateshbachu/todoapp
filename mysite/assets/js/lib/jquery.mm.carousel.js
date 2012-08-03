/* Begin Slider Dots Object */
function SliderDots() {
    this.selectedDotIndex = 0;
}
SliderDots.prototype.ClearDots = function () {
    $('#indicator_dots img').each(function (img) {
        img.src = pathPrefix + '/img/indicator.png';
    });
}
SliderDots.prototype.selectByIndex = function (index) {
    this.ClearDots();
    $("#indicator_dots img")[this.selectedDotIndex].src = pathPrefix + '/img/indicator.png';
    $("#indicator_dots img")[index].src = pathPrefix + '/img/indicator_selected.png';
    this.selectedDotIndex = index;
}
SliderDots.prototype.positionDots = function () {
    var left = ($(window).width() - 120) / 2;
    $('#indicator_dots').css('left', left + 'px');
}


/* Begin ImageSlider Object */
function ImageSlider(numberOfImages, photoContainer, imageElements, contentElements) {
    this.selectedIndex = 0;
    this.imageWidth = $(window).width();
    this.numberOfImages = numberOfImages;
    this.photoContainer = photoContainer;
    this.imageElements = imageElements;
    this.contentElements = contentElements;
}
ImageSlider.prototype.selectByIndex = function (index) {
    var currentX = this.selectedIndex * this.imageWidth;
    var destinationX = (index * this.imageWidth) - currentX;
    var distance = 0;
    if (destinationX < 0) {
        distance = "-=" + Math.abs(destinationX);
    } else {
        distance = "+=" + Math.abs(destinationX)
    }
    this.selectedIndex = index;
    this.photoContainer.animate({
        right: distance, easing: 'easeOutBounce'
    }, 700);
}
ImageSlider.prototype.gotoIndex = function (index) {
    var currentX = this.selectedIndex * this.imageWidth;
    var destinationX = (index * this.imageWidth) - currentX;
    var distance = 0;
    if (destinationX < 0) {
        distance = "-=" + Math.abs(destinationX);
    } else {
        distance = "+=" + Math.abs(destinationX)
    }
    this.selectedIndex = index;
    this.photoContainer.animate({
        right: distance, easing: 'easeOutBounce'
    }, 500);
}
ImageSlider.prototype.gotoNextSlide = function () {
    var nextId = this.selectedIndex + 1;
    if (nextId <= this.numberOfImages - 1) {
        this.selectByIndex(nextId);
        return nextId;
    }
}
ImageSlider.prototype.gotoPreviousSlide = function () {
    var nextId = this.selectedIndex - 1;
    if (nextId >= 0) {
        this.selectByIndex(nextId);
        return nextId;
    }
}
ImageSlider.prototype.setImagesToScreenWidth = function () {
    this.imageWidth = $(window).width();
    this.imageElements.css("width", this.imageWidth + 'px');
    try {
        this.contentElements.css("width", this.imageWidth - 36 + 'px');
    } catch (e) { }
    this.photoContainer.css('right', (this.imageWidth * this.selectedIndex) + 'px')
}
