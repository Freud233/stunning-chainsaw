$(window).on("resize",function(){
   width=$("html").width();
   fontSize=width/640*100;
   $("html").css("font-size",fontSize)
}).trigger("resize");