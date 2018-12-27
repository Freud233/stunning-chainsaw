$(function () {
    let page = 1;
    let pageSize = 5;
    fetch(`/user/queryUser?page=${page}&pageSize=${pageSize}`,{
    }).then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data); 
        let html = template("userList", data);
        $("#user-box").html(html);
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