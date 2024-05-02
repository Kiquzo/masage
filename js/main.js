$(function(){
    let hideShow =$('h1, .call-to-ass').hide(2500);
    $('h1, .call-to-ass').show(2500);
});

$(document).ready(function() {
    $('.colors').on({
        mouseenter: function() {
            $(this).css("color", "#F0B479");
            
        },
        mouseleave: function() {
            $(this).css("color", "white");
        }
    });
});