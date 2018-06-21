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
        $(this).toggleClass("blue");
        if($(".col1 .carre").hasClass("blue")) {
          $(".col1 .rond").addClass("blue");
        }

        else if($(".col2 .carre").hasClass("blue")) {
          $(".col2 .rond").addClass("blue");
        }
        else if($(".col3 .losange").hasClass("blue")) {
          $(".col3 .rond").addClass("blue");
        }
        else if($(".col4 .carre").hasClass("blue")) {
          $(".col4 .rond").addClass("blue");
        }
        else if($(".col5 .carre").hasClass("blue")) {
          $(".col5 .rond").addClass("blue");
        }
        else {
          $(".rond").removeClass("blue");
        }

    });


    $(".losange").click(function(){
        $(this).toggleClass("blue");
        if($(".col3 .losange").hasClass("blue")) {
          $(".col3 .rond").addClass("blue");
          $(".col1").children().eq(2).addClass("blue");
          $(".col2").children().eq(2).addClass("blue");
          $(".col4").children().eq(2).addClass("blue");
          $(".col5").children().eq(2).addClass("blue");
        }
        else {
          $(".rond").removeClass("blue");
        }

    });

});
