Template.revSlider.onRendered(function() {
    WaitJQueryPlugin('revolution', () => {
        $('.tp-banner').revolution({
            delay:9000,
            startwidth:1170,
            startheight:500,
            //hideThumbs:10
        });
    })
})