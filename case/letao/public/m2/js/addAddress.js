$(function(){
    var picker = new mui.PopPicker({ layer: 3}); 
    picker.setData(cityData);
    $("#selectCity").on("click", function(){
        picker.show(function(selectItems){
            $("#selectCity").val(selectItems[0].text+selectItems[1].text+selectItems[2].text);
        }) 
    })
})