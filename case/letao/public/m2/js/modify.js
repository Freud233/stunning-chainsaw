$(function () {
    $("#modify-btn").on("click", function () {
        let originPass = $("[name=originPass]").val();
        let newPass = $("[name=newPass]").val();
        let confirmNewPass = $("[name=confirmNewPass]").val();
        let vCode = $("[name=vCode]").val();
        console.log(originPass);

        if (!originPass) {
            mui.toast("请输入原始密码");
            return;
        }
        if (!newPass) {
            mui.toast("请输入新密码");
            return;
        }
        if (confirmNewPass != newPass) {
            mui.toast("两次密码输入不一样");
            return;
        }
        if (vCode.length != 6) {
            mui.toast("验证码输入错误");
            return;
        }
        $.ajax({
            type: "post",
            url: "/user/updatePassword",
            data: {
                oldPassword: originPass,
                newPassword: newPass,
                vCode: vCode
            },
            success: function (res) {
                if (res.success == true) {
                    setTimeout(() => {
                        location.href = "login.html";
                    }, 2000)
                }
            }
        })
    });
    $("#getCode").on("click", function () {

        $.ajax({
            type: "get",
            url: "/user/vCodeForUpdatePassword",
            success: function (res) {
                console.log(res.vCode);
            }
        })
    })
})