$(function () {
    let arrContent = localStorage.getItem("arr");
    arrContent = JSON.parse(arrContent);
    if (arrContent) {
        let html = template("historyTpl", {
            result: arrContent
        })
        $("#history-box").html(html);
    } else {
        arrContent = [];
    }
    $("#search-btn").on("tap", function () {
        let arr1 = $("#search-text").val()
        arrContent.push(arr1);
        localStorage.setItem("arr", JSON.stringify(arrContent));
        location.href = "search-result.html"+"?keyword="+arr1;
    })
    $(".mui-pull-right").on("tap", function(){
        localStorage.removeItem("arr");
    })
})