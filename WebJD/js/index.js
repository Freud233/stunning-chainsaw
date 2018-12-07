window.onload = function () {
    searchEffect();
    timeBack();
    bannerEffect();
}

//   头部js效果
function searchEffect() {
    var banner = document.querySelector(".jd_banner").offsetHeight;
    var jd_top = document.querySelector(".jd_top");
    var opacity = 0;
    window.onscroll = function () {
        var offSetTop = document.documentElement.scrollTop || document.body.scroll;
        if (offSetTop <= banner) {
            opacity = offSetTop / banner;
            jd_top.style.backgroundColor = "rgb(233, 34, 35, " + opacity + ")";
        }
    }
}

//倒计时效果
function timeBack() {
    let times = 3666;
    let spans = document.querySelector(".js_sk_l_time").querySelectorAll("span");
    let timeId = setInterval(() => {
        times--;
        if (times < 0) {
            clearInterval(timeId);
        } else {
            let hours = Math.floor(times / 3600);
            let min = Math.floor(times / 60 % 60);
            let sec = Math.floor(times % 60);
            spans[0].innerHTML = Math.floor(hours / 10);
            spans[1].innerHTML = Math.floor(hours % 10);
            spans[3].innerHTML = Math.floor(min / 10);
            spans[4].innerHTML = Math.floor(min % 10);
            spans[6].innerHTML = Math.floor(sec / 10);
            spans[7].innerHTML = Math.floor(sec % 10);
        }
    }, 1000);
}

// 轮播图效果
function bannerEffect() {
    let bannerWidth = document.querySelector(".jd_banner_content").offsetWidth;
    let ul = document.querySelector(".jd_bannerImg");
    let btns = document.querySelector(".jd_bannerList");
    let firstLi = ul.querySelector("li:first-of-type");
    let lastLi = ul.querySelector("li:last-of-type");
    ul.appendChild(firstLi.cloneNode(true), lastLi);
    ul.insertBefore(lastLi.cloneNode(true), firstLi);
    let lisList = ul.querySelectorAll("li");

    ul.style.width = bannerWidth * lisList.length + "px";
    for (let index = 0; index < lisList.length; index++) {
        const element = lisList[index];
        element.style.width = bannerWidth + "px";
    }
    ul.style.left = -bannerWidth + "px";

    window.onresize = function () {
        bannerWidth = document.querySelector(".jd_banner_content").offsetWidth;
        for (let index = 0; index < lisList.length; index++) {
            const element = lisList[index];
            element.style.width = bannerWidth + "px";
            ul.style.width = bannerWidth * lisList.length + "px";
        }
    }

    let timer;
    let count = 1;

    function getTranslate() {
        if (count == 0) {
            count = 8;
            liCurrent();
            ul.style.transition = "none";
            ul.style.left = -bannerWidth * count + "px";
        }
        if (count == 9) {
            count = 1;
            liCurrent();
            ul.style.transition = "none";
            ul.style.left = -bannerWidth * count + "px";
        }
        timer = setInterval(() => {
            count++;
            ul.style.transition = "0.7s";
            ul.style.left = -bannerWidth * count + "px";
            setTimeout(() => {
                if (count == lisList.length - 1) {
                    count = 1;
                    ul.style.transition = "none";
                    ul.style.left = -bannerWidth * count + "px";
                }
            }, 700);
            liCurrent();
        }, 1000);
    }

    // 轮播按钮高亮
    function liCurrent() {
        for (let index = 0; index < btns.children.length; index++) {
            const element = btns.children[index];
            element.className = "";
        }
        if (count == 9) {
            btns.children[0].className = "active";
        } else if (count == 0) {
            btns.lastElementChild.className = "active";
        } else {
            btns.children[count - 1].className = "active";
        }
    }

    // 按钮标签
    let isOver = true;  // 节流阀标识符
    getTranslate();
    ul.addEventListener("touchstart", function (e) {
        ul.style.transition = "none";
        clearInterval(timer);
        x = e.targetTouches[0].clientX;
    })

    let moveX;
    ul.addEventListener("touchmove", function (e) {
        if (isOver == true) {
            moveX = e.targetTouches[0].clientX - x;
            ul.style.left = -bannerWidth * count + moveX + "px";
            console.log(moveX, 123);
            
        }
    })

    ul.addEventListener("touchend", function (e) {
        clearInterval(timer); // 清除上一次的定时器,否则定时器会叠加
    
        
        if (moveX > 0) {
            if (moveX < (bannerWidth / 2)) {
                ul.style.transition = "0.3s";
                ul.style.left = -bannerWidth * count + "px";
            } else {
                ul.style.transition = "0.3s";
                count--;
                ul.style.left = -bannerWidth * count + "px";
            }
        } else if (moveX < 0) {
            if (Math.abs(moveX) < (bannerWidth / 2)) {
                ul.style.transition = "0.3s";
                ul.style.left = -bannerWidth * count + "px";
            } else {
                ul.style.transition = "0.3s";
                count++;
                ul.style.left = -bannerWidth * count + "px";
            }
        }
        moveX = 0;  // 清除上一次移动的距离, 节流过程中不再移动 banner图
        x = 0;
        isOver = false;

        liCurrent();
        // 如果两次滑动的时间间隔小于定时器时间,
        setTimeout(() => {
            clearInterval(timer);
            console.log();
            
            setTimeout(() => {
            getTranslate();
                isOver = true;  // 在过渡效果结束之后0.5s再开启移动效果;
            }, 500);
        }, 300);
    })
}