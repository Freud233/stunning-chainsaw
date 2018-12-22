$(function(){
    let page = 1;
    let pageSize = 3;
    $.ajax({
        type: "get",
        url: "/cart/queryCart",   
        success:function(res){
            if(res.error == 400){
                location.href = "login.html";
            }
            console.log(res);
            
            let html = template("shoppingList", {obj:res});
            $(".gowuche").html(html);
        }
    })
})