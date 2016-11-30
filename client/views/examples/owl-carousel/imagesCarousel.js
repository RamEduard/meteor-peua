Template.imagesCarousel.onRendered(function() {
    WaitJQueryPlugin('owlCarousel', () => {
        // Init Owl Carousel
        $("#owl-demo").owlCarousel({
            autoPlay: 3000,
            items : 4,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3],
            //transitionStyle : "fade" // Optional transitions fade|backSlide|goDown|fadeUp
        });
    })
})