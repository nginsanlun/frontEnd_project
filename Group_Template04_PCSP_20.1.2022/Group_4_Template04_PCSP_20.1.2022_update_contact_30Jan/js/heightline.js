//HeightLine JS
$(document).ready(function () {

    //HOME PAGE 
    $(".mivico-column").heightLine({
        fontSizeCheck: true
    });
    if (window.matchMedia('(max-width: 640px)').matches) {
        $(".mivico-column").heightLine("destroy");
    }

    //ABOUT US PAGE
    //指定なし
    $(".box0>div").heightLine();
    //destroy
    $(".destroy").click(function () {
        $(".box0>div").heightLine("destroy");
    });
    //コンテンツの中身が変わる場合
    $(".changeContent").click(function () {
        $(".box0>div").text(function () {
            return $(this).text() + $(this).text();
        })
    });
    //refresh
    $(".refresh").click(function () {
        $(".box0>div").heightLine("refresh");
    })

    //maxWidth:640
    $(".box1>div").heightLine({
        maxWidth: 640
    });
    //minWidth:640
    $(".box2>div").heightLine({
        minWidth: 640
    });
    //maxWidth:500 / minWidth:700
    $(".box3>div").heightLine({
        maxWidth: 700,
        minWidth: 500
    });

    //fontSizeCheck
    $(".box4>div").heightLine({
        fontSizeCheck: true
    });

    $(window).resize(function () {
        $(".width").text("横幅:" + $(window).width());
    }).resize();


    //CONTACT US PAGE
    if (window.matchMedia('(min-width: 768px)').matches) {
        $(".contact, .office").heightLine({
            fontSizeCheck: true
        });
    } else {
        $(".contact, .office").heightLine("destroy");
    }

});