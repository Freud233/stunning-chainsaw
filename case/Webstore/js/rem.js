// $(window).on("resize",function(){
//     /* 1、获取屏幕的宽度 */
//    width=$("html").width();
//    console.log(width,666)
   
//    /* 2、计算font-size */
//    fontSize=width/640*100;
//    $("html").css("font-size",fontSize)
//    // $("html").css({"font-size":fontSize})
// }).trigger("resize");
$(function(){
    $(window).on("resize",function(){
        var  width=$(window).width();
        var  fontSize=width/640*100;
        if(width>=640){
            fontSize=100
        }else if(width<=320){
            fontSize=50
        }
        $("html").css("font-size",fontSize)
    }).trigger("resize");
})