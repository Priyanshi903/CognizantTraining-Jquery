
$(document).ready(function () {
    $("p").css({ "font-size": 20, "width": 500, "color": "green", "margin": 5 });


    
    $("p").html(function () {
        var cont = [];
        return "<span>" + $(this).text().split(" ").join("</span> <span>") + "</span>";
    })
    $("span").mouseover(function () {
        $(this).css({ "background-color": "bisque" });
    });
    $("span").mouseout(function () {
        $(this).css({ "background-color": "white" });
    });
    $("span").html(function () {

        if ($(this).text().includes("th")) {
            $(this).css({
                "font-style": "italic", "text-shadow": "2px 2px pink", "font-weight": "bolder"
            });
        }

    });
});