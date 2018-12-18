$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    // 一级分类请求
    $.ajax({
        url: "http://localhost:3000/category/queryTopCategory",
        type: "get",
        success: function(result){
            let html = template("category_list", {obj:result.rows});
            let id = result.rows[0].id;
            $(".category_left_ul").html(html);
            if(result.rows.length){
            getCategory(id);
            }
        }
    })
    // 获取二级分类函数
    function getCategory(id){
       $.ajax({
            type: "get",
            url: "http://localhost:3000/category/querySecondCategory",
            data: {
                "id":id
            },
            success: function(result){
                let html = template("category_list_content", {obj:result.rows});
                $(".category_right_ul").html(html);
            }
        })  
    }
    // 点击请求二级分类
    $(".category_left_ul").on("click","a",function(){        
        let id = $(this).data("id");
        getCategory(id);
    })
})