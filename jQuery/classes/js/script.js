$(document).ready(function(){
    $(".but").click(function(){
        $(".carre, .rond, .losange").addClass("blue");
});

$(".rond").click(function(){
    $(this).toggleClass("blue");
});


        $(".butt").click(function(){
            $(".carre, .rond, .losange").removeClass("blue");

    });

    $(".carre").click(function(){
        $(this).parent().children().toggleClass("blue");
    });

    $(".losange").click(function(){
        $(this).parent().children().toggleClass("blue");
        $(".col1").children().eq(2).toggleClass("blue");
        $(".col2").children().eq(2).toggleClass("blue");
        $(".col4").children().eq(2).toggleClass("blue");
        $(".col5").children().eq(2).toggleClass("blue");

    });

});
