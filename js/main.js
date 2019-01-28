$(document).ready( function() {
    $('.sliderFlats').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.footer__slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.footer__sliderPrev',
        nextArrow: '.footer__sliderNext'
    });
});

$('[type="radio"]').click(function(){
    if ($("input[id='chooseFlats__tenants']").is(':checked')){
        $('.chooseFlats__filter').css('display', 'none').slideDown(500);
        $('.chooseFlats__filter').css('display', 'none');
    }else if ($("input[id='chooseFlats__oweners']").is(':checked')){
        $('.chooseFlats__filter').css('display', 'none').slideDown(500);
        $('.chooseFlats__filter').css('display', 'none');
    }
});