$(function () {
    let url = new URLSearchParams(location.search);
    let data = url.get("keyword");
    let page = 1;
    let html = "";
    let that = null;
    let priceBoolean = 1;
    let salesBoolean = 1;
    function getData() {
        that = this;
        $.ajax({
            url: "/product/queryProduct",
            type: "get",
            data: {
                page: page++,
                pageSize: 2,
                price: priceBoolean,
                num:salesBoolean
            },
            success: function (result) {
                console.log(result);
                if(result.data.length > 0){
                    html += template("product_list", result);
                    $("#search-box").html(html);
                    that.endPullupToRefresh(false);
                } else {
                    that.endPullupToRefresh(true);
                }
            }
        })
    }
    getData();

    mui.init({
        pullRefresh: {
            container: ".product", //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
            up: {
                height: 30, //可选.默认50.触发上拉加载拖动距离
                auto: false, //可选,默认false.自动上拉加载一次
                contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
                contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
                callback: getData //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
            }
        }
    });

    //   点击价格
    $("#priceSort").on("tap", function () {
        priceBoolean = priceBoolean == 1 ? 2 : 1;
        mui('.product').pullRefresh().refresh(true);
        html = '';
        page = 1;
        getData();
    })

    $("#sales").on("tap", function () {
        salesBoolean = salesBoolean == 1 ? 2 : 1;
        mui('.product').pullRefresh().refresh(true);
        html = '';
        page = 1;
        getData();
    })

})