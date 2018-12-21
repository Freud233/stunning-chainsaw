$(function () {
    let url = new URLSearchParams(location.search);
    let id = url.get("id");
    let data = {};

    // 判断是编辑还是添加功能进入
    if (id) {
        urlAjax = "/address/updateAddress";
        data.id = id;
        $.ajax({
            type: "get",
            url: "/address/queryAddress",
            success: function(res){
                for (let index = 0; index < res.length; index++) {
                    const element = res[index];
                    if(element.id == id){
                        let html = template("addressDetail",element);
                        $(".mui-content").html(html);
                    }                    
                }                
            }
        })
    } else {
        urlAjax = "/address/addAddress";
        let html = template("addressDetail",);
        $(".mui-content").html(html);
    }
  
    var picker = new mui.PopPicker({
        layer: 3
    });
    picker.setData(cityData);
    $("#selectCity").on("click", function () {
        picker.show(function (selectItems) {
            $("#selectCity").val(selectItems[0].text + selectItems[1].text + selectItems[2].text);
        })
    })
    $(".mui-poppicker-btn-ok").on("click", function () {
        picker.hide();
    })
    $(".mui-content").on("click","#addAddress", function () {
        let address = $.trim($("[name=city]").val());
        let addressDetail = $.trim($("[name=detail]").val());
        let recipients = $.trim($("[name=username]").val());
        let postcode = $.trim($("[name=postCode]").val());
        console.log(postcode);
        
        if (!recipients) {
            mui.toast("用户名错误");
            return;
        }
        if (!postcode) {
            mui.toast("邮编错误");
            return;
        }
        if (!address || !addressDetail) {
            mui.toast("地址错误");
            return;
        }
        data.address = address;
        data.addressDetail = addressDetail;
        data.recipients = recipients;
        data.postcode = postcode;
        $.ajax({
            type: "post",
            url: urlAjax,
            data: data,
            success: function (res) {
                console.log(res);
                if (res.success) {
                    mui.toast("地址操作成功");
                    setTimeout(() => {
                        location.href = "address.html";
                    }, 2000)
                }
            }
        })
    })
})