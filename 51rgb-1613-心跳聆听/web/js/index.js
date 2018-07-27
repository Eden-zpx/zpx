//轮播图

var i=0;
      var timer;
      $(function(){
         //$(".igs").hover(function(){$(".btn").show();},function(){$(".btn").hide();});
         $(".ig").eq(0).show().siblings().hide();//第一张图片显示，其余隐藏
          ShowTime();
         $(".tab").hover(function(){
             i = $(this).index();
             Show();
             clearInterval(timer);//清除轮播
         },function(){
            ShowTime(); 
         });
          
          $(".btn1").click(function(){
            clearInterval(timer);
            if(i==0)
            {
                i=5;
            }
              i--;
              Show();
              ShowTime();
          });
          
          $(".btn2").click(function(){
            clearInterval(timer);
            if(i==4)
            {
                i=-1;//让i++变为0
            }
              i++;
              Show();
              ShowTime();
          });
          
      })
      function Show(){
          $(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);//让第i张图片显示，其余隐藏。
          $(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
      }
      function ShowTime(){//图片轮播
          timer=setInterval(function(){
              i++;
              if(i==5)
              {
                 i=0;
              }
             Show();
          },4000);//1000=1s,每隔4秒换一张图片，无限循坏。
      }