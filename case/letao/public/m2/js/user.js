let usersInfo = null; 
$.ajax({
    type: "get",
    url: "/user/queryUserMessage",
    async:false,
    success: function (res) {
        if (res.error) {
            location.href = "login.html";
        } 
        // 保存用户信息
        usersInfo = res; 
    }
})
$(function () {
    let html = template("userInfo", usersInfo);
    $("#userInfoBox").html(html);

    $("#logout").on("click", function () {
        $.ajax({
            type: "get",
            url: "/user/logout",
            success: function (res) {
                if (res.success) {
                    mui.toast("登出成功");
                    setTimeout(() => {
                        location.href = "login.html";
                    }, 2000)
                } else {
                    mui.toast(res.message);
                }
            }
        })
    })
})