$(function () {
    let page = 1;
    let pageSize = 5;
    $.ajax({
        url: "/user/queryUser",
        type: "get",
        data: {
            page: page,
            pageSize: pageSize
        },
        success: function (res) {
            $.ajax({
                url: "/user/queryUser",
                type: "get",
                data: {
                    page: page,
                    pageSize: res.total
                },
                success: function (res) {
                    let html = template("userList", res);
                    $("#user-box").html(html);
                }
            })
        }
    })
    $(".body").on("click", "#status-btn", function () {
        let isDelete = $(this).data("isdelete") == 1 ? 0 : 1;
        $.ajax({
            type: "post",
            url: "/user/updateUser",
            data: {
                id: $(this).data("id"),
                isDelete: isDelete
            },
            success: function (res) {
                if (res.success) {
                    location.reload();
                }
            }
        })
    })
})