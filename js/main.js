// $(function(){
//     let hideShow =$('h1, .call-to-ass').hide(2500);
//     $('h1, .call-to-ass').show(2500);
// });

$(document).ready(function() {
    $('.face, .back, .figure-correction').mouseenter(function() {
        $(this).animate({
            width: '+=50px',  
            height: '+=50px'  
        }, 'fast'); // 'fast' - скорость анимации
    }).mouseleave(function() {
        $(this).animate({
            width: '384px', 
            height: '673px'   
        }, 'fast'); // 'fast' - скорость анимации
    });
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

$(document).ready(function () {
    $('.burger-menu').click(function () {
        $('.sidebar').addClass('active');
    });

    $('.close-btn').click(function () {
        $('.sidebar').removeClass('active');
    });

    // Закрытие меню при клике на ссылку
    $('.sidebar ul li a').click(function () {
        $('.sidebar').removeClass('active');
    });
});