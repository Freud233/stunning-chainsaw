$(function(){
    let items = $(".carousel-inner .item");
    $(window).on("resize", function(){
        let width = $("html").width();
        if(width >= 768){
            items.each(function(index, value){
                let imgSrc = $(this).data("largeImg"); 
               $(this).html($("<a href='javascript:;' class='pcImg'></a>").css("backgroundImage",`url(${imgSrc})`));
            })
        }else {
            items.each(function(index, value){
                let imgSrc = $(this).data("smallImg"); 
               $(this).html($("<img src='" + imgSrc + "'>"));
            })
        }
    }).trigger("resize");
})