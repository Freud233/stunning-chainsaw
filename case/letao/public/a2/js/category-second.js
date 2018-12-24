$(function(){
    let page = 1;
    let pageSize = 10;
        $.ajax({
            type: "get",
            url: "/category/queryTopCategoryPaging",
            data: {
                page: page,
                pageSize: pageSize
            },
            success: function(res){
                $.ajax({
                    type: "get",
                    url: "/category/queryTopCategoryPaging",
                    data: {
                        page: page,
                        pageSize: res.total
                    },
                    success: function(response){
                        let html = template("categoryFirstTpl", response);
                        $("#categoryFirstBox").html(html);
                    }
                })
            }
        })
    
})