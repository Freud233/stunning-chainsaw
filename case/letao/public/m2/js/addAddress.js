$(function(){
    $.ajax({
        type: "post",
        url: "/address/addAddress",
        success: function(res){
            console.log(res);
            
        }
    })
})