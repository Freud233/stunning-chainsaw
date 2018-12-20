$(function(){
    $("#login-btn").on("click", function(){
        let userName = $.trim($("[name=username]").val());
        let passWord = $.trim($("[name=password]").val());
        if(!userName){
            mui.toast("请输入用户名");
            return;
        }
        if(!passWord){
            mui.toast("请输入密码");
            return;
        }
        $.ajax({
            type: "post",
            url: "/user/login",
            data: $(".mui-input-group").serialize(),
            success: function(res){
                if(res.success){
                    mui.toast("登陆成功");
                    setTimeout(()=>{
                        location.href = "user.html";
                    },2000);
                    return;
                }else {
                    mui.toast(res.message);
                }
            }
        })
    })
})