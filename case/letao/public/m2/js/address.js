$(function () {
    $.ajax({
        type: "get",
        url: "/address/queryAddress",
        success: function (res) {
            let html = template("addressList", {
                obj: res
            });
            $(".addressBox").html(html);
        }
    })
    $(".mui-content").on("click", ".removeAddress", function () {
        let li = this.parentNode.parentNode;
        let id = $(this).data("id");
        mui.confirm("警告", "确定要删除吗", function (e) {
            if (e.index == 0) {
                mui.swipeoutClose(li);
            } else if (e.index == 1) {
                $.ajax({
                    type: "post",
                    url: "/address/deleteAddress",
                    data: {
                        id: id
                    },
                    success: function (res) {
                        if (res.success) {
                            mui.toast("删除成功");
                            mui.swipeoutClose(li);
                            setTimeout(() => {
                                location.href = "address.html";
                            }, 1000)
                        }
                    }
                })
            }
        });
    })
})