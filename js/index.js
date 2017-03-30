$(function () {
    function tab(navLi, navDetail) {
        $("#all").find(navLi).toggle(function () {
            $("#all").find(navLi).css({ "background": "url(../images/sn_up.png", "backgroundRepeat": "no-repeat", "backgroundPosition": "60px 15px" });
            $("nav").find(navDetail).fadeIn(300);
        }, function () {
            $("#all").find(navLi).css({ "background": "url(../images/sn_down.png", "backgroundRepeat": "no-repeat", "backgroundPosition": "60px 15px" });
            $("nav").find(navDetail).fadeOut(300);
        })
    }
    tab(".www", ".nav_detail");
    tab(".businiss", ".nav_detail1");
    tab(".mine", ".nav_detail2");
    tab(".buy", ".nav_detail3");
    tab(".phone", ".nav_detail4");
    tab(".customer", ".nav_detail5");


    //轮播
    // 定义判断添加删除元素class方法
    var hasClass = function (obj, cls) {
        return obj.className.match(new RegExp('(^|\\s)' + cls + '(\\s|$)'))
    }
    var addClass = function (obj, cls) {
        if (!hasClass(obj, cls)) {
            if (obj.className.length == 0) { obj.className = cls; }
            else { obj.className += " " + cls; }
        }
    }
    var rvClass = function (obj, cls) {
        if (hasClass(obj, cls)) {
            var argu = new RegExp('(^|\\s)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(argu, "");
        }
    }
    //开始
    var prev = document.getElementById("prev"),
        next = document.getElementById("next"),
        imglist = document.getElementById("imglist").getElementsByTagName("div"),
        dot = document.getElementById("slidot").getElementsByTagName("li"),
        n = imglist.length,
        index = 0,
        fade = false;
    // 设置透明度  渐变
    var setOpacity = function (obj, opa) {
        if (obj.filters) { obj.style.filter = "alpha(opacity:" + opa + ")"; }
        else { obj.style.opacity = opa / 100; }
    }
    var fadeIn = function (obj) {
        fade = true;
        obj.style.display = "block";
        var opa = 0;
        (function func() {
            if (opa < 100) { opa += 10; setOpacity(obj, opa); setTimeout(func, 20) }
            else { fade = false; }
        })();
    }
    var fadeOut = function (obj) {
        fade = true;
        var opa = 100;
        (function func() {
            if (opa > 0) { opa -= 10; setOpacity(obj, opa); setTimeout(func, 30) }
            else { obj.style.display = "none"; }
        })();
    }
    //  同步点亮小圆点
    function lightdot() {
        for (var i = 0; i < n; i++) {
            if (hasClass(dot[i], "on")) { rvClass(dot[i], "on"); break; }
        }
        addClass(dot[index], "on");
    }
    //  点击切换下一张
    next.onclick = function () {
        if (fade) { return; }
        else {
            fadeOut(imglist[index]);
            index++;
            if (index == n) index = 0;
            fadeIn(imglist[index])
            lightdot();
        };
    }
    //   点击切换上一张
    prev.onclick = function () {
        if (fade) { return; }
        else {
            fadeOut(imglist[index]);
            if (index == 0) { index = n; }
            index--;
            fadeIn(imglist[index]);
            lightdot();
        }
    }
    //   圆点控制切换
    for (var i = 0; i < n; i++) {
        dot[i].order = i;
        dot[i].onclick = function () {
            if (this.order == index) { return }
            else {
                fadeOut(imglist[index]);
                index = this.order;
                fadeIn(imglist[index]);
                lightdot();
            }
        }
    }
    // 自动播放启停
    function play() { auto = setTimeout(function () { next.onclick(); play(); }, 3000) };
    function stop() { clearTimeout(auto) };
    play();
    container.onmouseover = stop;
    container.onmouseout = play;

    // 字体和背景变换
    $(".double li").mouseover(function () {
        $(this).css("background", "red");
        $(this).find("span").css("color", "white");
        $(".lastth").css({ "background": "url(../images/san.png", "backgroundRepeat": "no-repeat", "backgroundPosition": "8px 2px" })
        $("#mostall").show();
    })
    $(".double li").mouseout(function () {
        $(this).css("background", "white");
        $(this).find("span").css("color", "black");
        $("#mostall").hide();
    })
    //   tab 键切换
    $.extend({
        tab: function (tabli, tabul) {
            $(tabli).find(".tlist:first").addClass("selected");
            $(tabul).find(".con:first").show();
            $(tabli).find(".tlist").click(function () {
                var index = $(this).index();
                $(this).addClass("selected").siblings().removeClass("selected");
                $(tabul).find(".con").eq(index).show().siblings().hide();
            })
        }
    })
    $.tab(tablist, tab_con);


    //浮现二维码
    function tabpho(tapp, tpho) {
        $(".app").find(tapp).toggle(function () {

            $(".app_img").find(tpho).fadeIn(300);
        }, function () {

            $(".app_img").find(tpho).fadeOut(300);
        })
    }

    tabpho(".lion", ".lion_i");
    tabpho(".easy", ".easy_i");
    tabpho(".pink", ".pink_i");
    tabpho(".black", ".black_i");

    $(".person").mouseover(function () {
        $(this).css("backgroundColor", "#ffc001");
        $(".person>img").attr("src", "../images/person1.png");
        
    })
    $(".person").mouseout(function () {
        $(this).css("backgroundColor", "black");
        $(".person>img").attr("src", "images/person.png");
          
    })

    // 购物车的点击效果
    $(".left_fix .gou").toggle(function () {
        $(".denglu").fadeIn(300);
    }, function () {
        $(".denglu").fadeOut(300);
    })

})