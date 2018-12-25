$(function () {
    let page = 1;
    let pageSize = 10;
    let fileUploadUrl = null;
    $.ajax({
        type: "get",
        url: "/category/queryTopCategoryPaging",
        data: {
            page: page,
            pageSize: pageSize
        },
        success: function (res) {
            $.ajax({
                type: "get",
                url: "/category/queryTopCategoryPaging",
                data: {
                    page: page,
                    pageSize: res.total
                },
                success: function (response) {
                    let html = template("categoryFirstTpl", response);
                    $("#categoryFirstBox").html(html);
                }
            })
        }
    })
    $.ajax({
        type: "get",
        url: "/category/querySecondCategoryPaging",
        data: {
            page: page,
            pageSize: pageSize
        },
        success: function(res){
            let html = template("categorySecondTpl", res);
            $("#categorySecondBox").html(html);
        }
    })
    $("#fileUpload").fileupload({
        dataType: 'json',
        done: function (e, data) {
            console.log(data);
            fileUploadUrl = data.result.picAddr;
            // console.log(data.result.picAddr);
            // $("#showBrand").attr("src",fileUploadUrl);
        }
    })
    $("#save").on("click", function () {
        let brandName = $("[name='brandName']").val();
        let categoryId = $("#categoryFirstBox").val();
        $.ajax({
            type: "post",
            url: "/category/addSecondCategory",
            data: {
                brandName: brandName,
                categoryId: categoryId,
                brandLogo: fileUploadUrl,
                hot: 1
            },
            success: function(res){
                location.reload();
            }
        })
    })
})