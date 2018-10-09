window.onload = function () {
    document.oncontextmenu = function (e) {
        return false;
    }

    //音乐控制按钮
    var me = document.getElementById('me');
    var myaudio = document.getElementById('myaudio');
    me.onclick = function () {
        if (myaudio.paused) {
            myaudio.play();
            me.style.animation = "me 5s linear infinite";
        } else {
            myaudio.pause();
            me.style.animation = "none";
        }
    }

    //背景切换
    var bgs = ["bg1_1.png", "bg1_2.png", "bg1_3.png", "bg1_4.png", "bg1_5.png", "bg1_6.png"];
    setInterval(function () {
        var i = Math.floor(Math.random() * (6 - 1) + 1); //生成1~4的随机数
        document.getElementById("p1bg").src = "imges/" + bgs[i];
    }, 5000);

    //文字效果1
    var hello = document.getElementById('hello');
    var s = document.getElementById('p1show');
    var i = 0;
    timer1 = setInterval(function () {
        s.innerHTML = hello.innerHTML.substring(0, i);
        i++;
        if (s.innerHTML == hello.innerHTML) {
            clearInterval(timer1);
        }
    }, 188);

    //文字效果2     
    var introduce = document.getElementById('introduce');
    var introduceS = document.getElementById('introduceS');
    r = 0;
    timer2 = setInterval(function () {
        introduceS.innerHTML = introduce.innerHTML.substring(0, r);
        r++;
        if (introduceS.innerHTML == introduce.innerHTML) {
            clearInterval(timer2);
        }
    }, 150);


}
//-------------

$(function () {
    //菜单按钮
    $(".smbtn i").click(function () {
        $(".menu_l").toggle();
        $(".menu ul").toggle();
    });

    //联系方式 
    $(".contact i").hover(function () {
        $(this).siblings("span").stop().fadeIn();
    }, function () {
        $(this).siblings().stop().fadeOut();
    });

    // fullpage插件设置
    $('#fullpage').fullpage({
        sectionsColor: ['transpartent', 'transpartent', 'transpartent', 'transpartent'], //控制每个section的背景颜色
        controlArrow: true, //是否隐藏左右滑块的箭头(默认为true)
        verticalCentered: true, //内容是否垂直居中(默认为true)
        css3: true, //是否使用 CSS3 transforms 滚动(默认为false)
        resize: false, //字体是否随着窗口缩放而缩放(默认为false)
        scrolllingSpeed: 500, //滚动速度，单位为毫秒(默认为700)
        anchors: ['page1', 'page2', 'page3', 'page4'], //定义锚链接(值不能和页面中任意的id或name相同，尤其是在ie下，定义时不需要加#)
        lockAnchors: false, //是否锁定锚链接，默认为false。设置weitrue时，锚链接anchors属性也没有效果。
        loopBottom: true, //滚动到最底部后是否滚回顶部(默认为false)
        loopTop: false, //滚动到最顶部后是否滚底部
        loopHorizontal: false, //左右滑块是否循环滑动
        autoScrolling: true, // 是否使用插件的滚动方式，如果选择 false，则会出现浏览器自带的滚动条
        scrollBar: false, //是否显示滚动条，为true是一滚动就是一整屏
        fixedElements: ".music", //固定元素
        menu: ".menu",
        keyboardScrolling: true, //是否使用键盘方向键导航(默认为true)
        keyboardScrolling: true, //页面是否循环滚动（默认为false）
        navigation: true, //是否显示项目导航（默认为false）
        navigationTooltips: ["首页", "关于我", "技能", "联系我"], //项目导航的 tip
        navigationColor: '#fff', //项目导航的颜色
        slidesNavigation: true,
    });
    $("#loading").fadeOut(2000);
});