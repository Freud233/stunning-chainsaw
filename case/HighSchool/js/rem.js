$(window).on("resize", function(){
   let width = $("html").width();
   let fontSize = width / 640 * 100;
   $("html").css("fontSize", fontSize);
}).trigger("resize");