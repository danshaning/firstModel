$(document).ready(function(){

    var $carrousel = $('.carrousel'), // on cible le bloc du carrousel
    $img = $('.carrousel img'),
    indexImg = $img.length - 1,
    i = 0, // on initialise un compteur
    $currentImg = $img.eq(i);
    $img.css('display', 'none');
    $currentImg.css('display', 'block');


});