//COMMON JS
$(document).ready(function () {

    var click = false;
    $(".menu-trigger").click(function () {
        //check click condition
        if (!click) {
            $(".menu-trigger").addClass("active"); // css active class
            click = true; //change click condition
            $("nav").css({
                "right": "0"
            });
        } else {
            $(".menu-trigger").removeClass("active"); // css active class
            click = false; //change click condition
            $("nav").css({
                "right": "-767px"
            });
        }
    });

    // COMMON HEIGHTLINE 

    $(".footer-main-col>div").heightLine({
        minWidth: 1025
    });

    $(".footer-main-col>div").heightLine({
        minWidth: 767.9
    });

    //MANUFACTURING PAGE START JS
    $(".regular").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 300,
        // slidesToShow: 1,
        centerMode: false,
        variableWidth: true
    });

    if ($(window).width() <= 767.9) {
        $('#manufacture_tab > ul > li > a').eq(0).addClass("selectedTwo");
        $('#manufacture_tab > div > article').eq(0).css('display', 'block');

        $('#manufacture_tab > ul').click(function (e) {

            if ($(e.target).is("a")) {
                $('#manufacture_tab  ul  li  a').removeClass("selectedTwo");
                $(e.target).addClass("selectedTwo");

                var clicked_index = $("a", this).index(e.target);

                $('#manufacture_tab  div  article').css('display', 'none');
                if (clicked_index === 4) {
                    $('#manufacture_tab div article').eq(0).fadeIn();
                } else if (clicked_index === 5) {
                    $('#manufacture_tab div article').eq(1).fadeIn();
                } else if (clicked_index === 6) {
                    $('#manufacture_tab div article').eq(2).fadeIn();
                } else if (clicked_index === 7) {
                    $('#manufacture_tab div article').eq(3).fadeIn();
                } else if (clicked_index === 8) {
                    $('#manufacture_tab div article').eq(4).fadeIn();
                } else if (clicked_index === 9) {
                    $('#manufacture_tab div article').eq(5).fadeIn();
                } else {
                    console.log("Sorry You Got ERROR!");
                }
                console.log(clicked_index);
            }
            $(this).blur();
            return false;
        });

        $(".manufacture-tabs").slick({
            slidesToShow: 4,
            slidesToScroll: 1
        });

        console.log("start working!");
    } else {
        $('#manufacture_tab > ul > li > a').eq(0).addClass("selected");
        $('#manufacture_tab > div > article').eq(0).css('display', 'block');

        $('#manufacture_tab > ul').click(function (e) {
            if ($(e.target).is("a")) {
                $('#manufacture_tab > ul > li > a').removeClass("selected");
                $(e.target).addClass("selected");

                var clicked_index = $("a", this).index(e.target);
                console.log(clicked_index);
                $('#manufacture_tab > div > article').css('display', 'none');
                $('#manufacture_tab > div > article').eq(clicked_index).fadeIn();
            }
            $(this).blur();
            return false;
        });
    }
    //MANUFACTURING PAGE END JS
});