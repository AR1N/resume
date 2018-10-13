window.onload = function () {
// 加载层
        var mask=document.getElementById("loading");
    mask.parentNode.removeChild(mask);

    document.oncontextmenu = function (e) {
        return false; //禁用鼠标右键
    }

        //音乐控制按钮
    var me = document.getElementById('me');
    var myaudio = document.getElementById('myaudio');
    me.onclick = function () {
        if (myaudio.paused) {
            myaudio.play();
            me.style.animation = "me 5s  linear infinite";
        } else {
            myaudio.pause();
            me.style.animation = "none";
        }
    }
    //移动端
    


    //背景切换
    var bgs = ["bg1_1.jpg", "bg1_2.jpg", "bg1_3.jpg", "bg1_4.jpg", "bg1_5.jpg"];
    setInterval(function () {
        var i = Math.floor(Math.random() * (5 - 1) + 1); //生成1~5的随机数
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
//*********文档加载完成**************** */
// document.onreadystatechange = completeLoading;
// //加载状态为complete时移除loading效果
// function completeLoading() {
//     if (document.readyState == "loaded" || document.readyState == "complete") {
//         var loadingmask = document.getElementById('loading');
//         loadingmask.parentNode.removeChild(loadingmask);
//     }
// }
//--------------------------------------------------------------------------

$(function () {

    setTimeout(function () {
        $("audio").attr("src", "music/The most beautiful expectation.mp3")
    }, 4000); 

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

    // fullpage设置
    $('#fullpage').fullpage({
        sectionsColor: ['transpartent', 'transpartent', 'transpartent', 'transpartent'], 
        controlArrow: true, 
        verticalCentered: true, 
        css3: true, 
        resize: false, 
        scrolllingSpeed: 500, 
        anchors: ['page1', 'page2', 'page3', 'page4'], 
        lockAnchors: false,
        loopBottom: false, 
        loopTop: false, 
        loopHorizontal: false, 
        autoScrolling: true,
        scrollBar: false,
        fixedElements: ".music", 
        menu: ".menu",
        keyboardScrolling: true, 
        keyboardScrolling: true, 
        navigation: true, 
        navigationTooltips: ["首页", "关于我", "技能", "联系我"], 
        navigationColor: '#fff', 
        slidesNavigation: true,
       
    });
  
    
});