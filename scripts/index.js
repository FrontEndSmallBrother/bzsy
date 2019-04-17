$(function(){

    //ajax加载公共页面
    $(".page-top").load("header.html");  //加载页面头部
    $(".footer").load("footer.html");  //加载页面尾部

    //伸缩广告位
    setTimeout(function(){
        $(".link-banner").slideDown(3000);
    },3000);

    //伸缩广告关闭事件
    $(".close-banner").click(function(event){
        event.stopPropagation();
        $(".link-banner").slideUp(2000);
        console.log("按钮被点击了");
    })

    //轮播图特效
    var time = 1200;
    var index = 0;

    //按钮切换、图片淡出函数
    function fnShift(){
        $(".smallBtn span").eq(index).addClass("active").siblings().removeClass("active");
        $(".imgs-list li").eq(index).fadeIn(time).siblings().fadeOut(time);
    }

    $(".imgs-list li").eq(index).show().siblings().hide();
    //小按钮事件
    $(".smallBtn span").click(function(){
        index = $(this).index();
        fnShift();
    });
    //下一个按钮事件
    $(".next").click(function(){
        index++;
        if(index > $(".imgs-list li").length-1){
            index = 0;
        }
        fnShift();
    });
    //上一个按钮
    $(".prev").click(function(){
        index--;
        if(index < 0){
            index = $(".imgs-list li").length-1;
        }
        fnShift();
    })


    //精英班活动照片
    $(".btns span").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".elite-img img").eq($(this).index()).show().siblings("img").hide();
    })

    //返回顶部

    function fnBackFade(){
        if ($(window).scrollTop() > 100) {
            $('.back-top').fadeIn(1000);
        } else {
            $(".back-top").fadeOut(1000);
        }
    }

    fnBackFade();

    $(window).scroll(function() {
        fnBackFade();
    });

    $(".back-top").click(function(){
        $('body,html').animate({scrollTop: '0'}, 800);
        console.log(1);
        return false; 
    })


})