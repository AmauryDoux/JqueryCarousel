var carousel = {

    nbSlide: 0,
    nbCurrent: 1,
    elemCurrent: null,
    elem: null,

    init: function() {
        this.nbSlide = elem.find(".slide").length;
    }
}

$ (function() {
    carousel.init("#carousel");
    alert(carousel.nbSlide);
});
