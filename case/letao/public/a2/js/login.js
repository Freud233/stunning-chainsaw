$.ajax({
    type: "get",
    url: "/employee/checkRootLogin",
    async:false,
    success: function(res){
        if(res.success){
            location.href = "user.html";
        }
    }
})
$(function(){
    $("[type='button']").on("click", function(){
        $.ajax({
            type: "post",
            url: "/employee/employeeLogin",
            data: $("form").serialize(),
            success: function(res){
                console.log(res);
                
                if(res.success){
                    location.href = "user.html";
                }else {
                    alert("账号或密码错误");
                }
            }
        })
    })
})