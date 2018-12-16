$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    $.ajax({
        url: "http://localhost:3000/category/queryTopCategory",
        type: "get",
        success: function(result){
            let html = template("category_list", {obj:result.rows});
            $(".category_left_ul").html(html);
        }
    })
    $(".category_left_ul").on("click","a",function(){        
        let id = $(this).data("id");
        $.ajax({
            type: "get",
            url: "http://localhost:3000/category/querySecondCategory",
            data: {
                "id":id
            },
            success: function(result){
                console.log(result);
                
                let html = template("category_list_content", {obj:result.rows});
                $(".category_right_ul").html(html);
            }
        })
    })
})