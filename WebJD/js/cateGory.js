window.onload = function () {
    let main_l = document.querySelector(".main_l");
    let leftHeight = main_l.offsetHeight;
    let ul = main_l.querySelector("ul:first-of-type");
    let categoryUl = main_l.querySelector("ul:last-of-type");
    let cateLis = categoryUl.children;
    let ulHeight = ul.offsetHeight;
    let maxTop = 0; // 精致状态下的最大距离
    let minTop = -(ulHeight - leftHeight);
    let maxBounce = maxTop + 100; // 滑动状态下的最大top
    let minBounce = minTop - 100;
    let lis = ul.querySelectorAll("li");
    let startY = 0; // 初始值
    let moveY = 0; // 移动值
    let distanceY = 0; // 移动差值
    let currentY = 0; // 上一次移动后的top距离值

    ul.addEventListener("touchstart", function (e) {
        startY = e.targetTouches[0].clientY;
    })

    ul.addEventListener("touchmove", function (e) {
        moveY = e.targetTouches[0].clientY;
        distanceY = moveY - startY;
        if (currentY + distanceY > maxBounce || currentY + distanceY < minBounce) {
            return;
        }
        ul.style.transition = "none";
        ul.style.top = (distanceY + currentY) + "px";
    })

    ul.addEventListener("touchend", function (e) {
        currentY += distanceY;
        if (currentY + distanceY > maxTop) {
            currentY = 0;
            ul.style.transition = ".5s";
            ul.style.top = currentY + "px";
        } else if (currentY + distanceY < minTop) {
            currentY = minTop;
            ul.style.transition = ".5s";
            ul.style.top = currentY + "px";
        }

    })

    // 点击分类切换
    getTap(categoryUl, function (e) {
        let li = e.target.parentNode;
        let liHeight = li.offsetHeight;
        for (let index = 0; index < cateLis.length; index++) {
            const element = cateLis[index];
            element.count = index;
            element.classList.remove("active");
        }
        li.classList.add("active");
        categoryUl.style.transition = "1s";
        if (-li.count * liHeight < minTop) {
            currentY = minTop;
            categoryUl.style.top = minTop + "px";
        } else {
            currentY = maxTop;
            categoryUl.style.top = -li.count * liHeight + "px";
        }
    })

    let myScroll = new IScroll("#wrapper", {
        mouseWheel: true,
        scrollbars: true
    })
}