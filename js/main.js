$(document).ready( function() {
    $('.sliderFlats').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});

$('[type="radio"]').click(function(){   //таб статей в сайдбаре
    if ($("input[id='chooseFlats__tenants']").is(':checked')){
        $('#sidebar-recent').css('display', 'none').slideDown(1000);
        $('#sidebar-popular').css('display', 'none');
    }else if ($("input[id='chooseFlats__oweners']").is(':checked')){
        $('#sidebar-popular').css('display', 'none').slideDown(1000);
        $('#sidebar-recent').css('display', 'none');
    }
});