$(function(){
    let page = 1;
    let pageSize = 10;
    let pageTotal = null;
    function getData(){
        $.ajax({
            type: "get",
            url: "/category/queryTopCategoryPaging",
            data: {
                page: page,
                pageSize: pageSize
            },
            success: function(res){
                pageTotal = Math.ceil(res.total / pageSize);
                let html = template("category", res);
                $("#categoryFirstBox").html(html);
            }
        })
    }
    getData();
    $(".btn-group").on("click", "#next", function(){
        page++;
        if(page > pageTotal){
            page = pageTotal;
            return;
        }
        getData();
    })
    $(".btn-group").on("click", "#prev", function(){
        page--;
        if(page < 1){
            page = 1;
            return;
        }
        getData();
    })
})