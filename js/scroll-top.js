window.onload = function(){
    $(".up-arrow").click(function(){
        $("html,body").animate({scrollTop:0},800);
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 550){
            $(".up-arrow").fadeIn();
        }
        if($(this).scrollTop() < 550){
            $(".up-arrow").fadeOut();
        }
    });
}