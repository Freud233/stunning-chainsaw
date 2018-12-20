$(function () {
    // 注册按钮点击
    $("#register-btn").on("click", function () {
        let userName = $.trim($("[name=username]").val());
        let mobile = $.trim($("[name=mobile]").val());
        let password = $.trim($("[name=password]").val());
        let againPass = $.trim($("[name=againPass]").val());
        let vCode = $.trim($("[name=vCode]").val());
        if (!userName) {
            mui.toast("请输入正确用户名");
            return;
        }
        if (!(/^1[4563]\d{9}$/.test(mobile))){
            mui.toast("请输入正确手机号");
            return;
        }
        if (!password) {
            mui.toast("请输入密码");
            return;
        }
        if (againPass != password) {
            mui.toast("两次密码输入不一致");
            return;
        }
        if (vCode.length != 6) {
            mui.toast("验证码格式错误");
            return;
        }
        $.ajax({
            type: "post",
            url: "/user/register",
            data: {
                originPass: originPass,
                newPass: newPass,
                vCode: vCode
            },
            success: function (res) {
                if(res.success){
                    mui.toast("登录成功");
                    setTimeout(()=>{
                        location.href = "login.html";
                    },2000)
                }else {
                    mui.toast(res.message);
                }
            }
        })
    })
    // 获取验证码
    $(".getCode").on("click", function () {
        $.ajax({
            type: "get",
            url: "/user/vCode",
            success: function (res) {
                console.log(res.vCode);
            }
        })
    })
})