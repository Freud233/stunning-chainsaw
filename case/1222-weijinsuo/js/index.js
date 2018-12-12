$(function(){
    FastClick.attach(document.body);   //fastclick 初始化
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

    //推荐投资tab切换
    let divs = $(".wsj_product_wrap .wjs_product");
    $(".product_list").on("click", "li", function(){
       divs.each(function(index, value){
            value.classList.remove("wjs_product_active");
       })
       divs.eq($(this).data("liIndex") - 1).addClass("wjs_product_active");
    })
})