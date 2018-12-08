function getTap(dom, callback){
    let startTime;
    dom.addEventListener("touchstart", function (e) {
        startTime = Date.now();
        startX = e.targetTouches[0].clientX;
        startY = e.targetTouches[0].clientY;
    })

    dom.addEventListener("touchend", function (e) {
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;
        if (e.changedTouches.length > 1) {
            return;
        }
        if (Date.now() - startTime > 200) {
            console.log(Date.now() - startTime, "Date.now() - startTime");
            return;
        }
        if (endX - startX < 10 && endY - startY < 10) {
            callback && callback(e);
        }
    })
}