$(function () {

    let slider = $('.block-slider.slider-promo-content .slider-holder');
  
    if ( slider.length > 0 ) {
        let dots_enabled = true;
        if ( $('.slider-item', slider).length < 2 ) {
            dots_enabled = false;
        }

        slider.on('init', function() {
            setTimeout(function(){
                // block_promo.removeClass('loading');
                $(window).trigger('resize'); // trigger slick reponsive changes if any
            }, 500);
        });

        slider.slick({
            arrows: false,
            dots: dots_enabled,
            vertical: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            fade: false,
            cssEase: 'ease',
            adaptiveHeight: false,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true
        });
    }
});