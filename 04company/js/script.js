$(document).ready(function(){
    const slider1 = $(".slider").bxSlider( { controls:false } );
    $(".sliderWrap .nextBtn").click( function(){ slider1.goToNextSlide(); } );
    $(".sliderWrap .prevBtn").click( function(){ slider1.goToPrevSlide(); } );

    // 2021-09-16 작업
    const slider2 = $(".slider2").bxSlider( { 
        controls:false,
        
     } );

    $(".slider2Wrap .nextBtn").click( function() { slider2.goToNextSlide(); } );
    $(".slider2Wrap .prevBtn").click( function() { slider2.goToPrevSlide(); } );
    

    //toggle Button 영역
    // $(".toggle").on("이벤트명",리스너);
    // $(".toggle").on("click",function(){});
    // $(".toggle").click(function(){})
    $(".toggle").click(function(){
        const toggle = $(".toggle").attr("class"); // value toggle
        console.log(toggle);

        if( toggle == "toggle"){
            //$(".toggle").addClass("active");
            document.getElementsByClassName("toggle")[0].classList.add("active");
            $(".gnb").addClass("view");
        }else{
            //$(".toggle").removeClass("active");
            document.getElementsByClassName("toggle")[0].classList.remove("active");
            $(".gnb").removeClass("view");
        }
    });

    $(window).resize(function(){
        $(".toggle").removeClass("active");
        $(".gnb").removeClass("view");
    });
   
});
