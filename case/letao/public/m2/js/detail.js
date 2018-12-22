$(function () {
    let url = location.href.substr(location.href.indexOf("?") + 1);
    let id = url.split("=")[1];
    let size = null;
    let productId = null;
    $.ajax({
        type: "get",
        url: "/product/queryProductDetail",
        data: {
            id: id
        },
        async:false,
        success: function (res) {
            console.log(res);
            
            let html = template("detailSlide", res)
            productId = res.pic.productId;
            console.log(res.pic[0].productId);

            $(".slideshow").html(html);
            var gallery = mui('.mui-slider');
            gallery.slider({
                interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；
            });
        }
    })
    $(".mui-content").on("click", ".size", function () {
        $(this).addClass("active").siblings().removeClass("active");
        size = $(this).html();
    })
    mui(".mui-numbox").numbox();
    
    $(".mui-content").on("click", ".addShopping", function () {
        if(!size){
            mui.toast("请选择尺码");
            return;
        }
        $.ajax({
            type: "post",
            url: "/cart/addCart",
            data: {
                productId: productId,
                num: mui(".mui-numbox").numbox().getValue(),
                size: size
            },
            success: function(res){
                if(res.success){
                    mui.toast("加入购物车成功");
                    // setTimeout(()=>{
                    //     location.href = "cart.html";
                    // },2000)
                }
            }
        })
    })
})