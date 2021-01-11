console.log("Script in");

$("#home-top").on('click', function(event) {
    event.preventDefault();

    setTimeout(function () {
        $(window).scrollTop(0);
    }, 0);
  });

  $("#nav-ed").on('click', function(event) {
    event.preventDefault();

    setTimeout(function () {
        if(window.innerWidth < 576){
            $("#trg-btn").trigger('click');
        }
        $(window).scrollTop($('#div2').offset().top - screen.height/3);
    }, 0);
  });
  $("#nav-prof").on('click', function(event) {
      event.preventDefault();
      
    setTimeout(function () {
        if(window.innerWidth < 576){
            $("#trg-btn").trigger('click');
        }

        $(window).scrollTop($('#div3').offset().top - screen.height/4);
    }, 0);
  });
  $("#nav-skill").on('click', function(event) {
    event.preventDefault();
  setTimeout(function () {
    if(window.innerWidth < 576){
        $("#trg-btn").trigger('click');
    }

      $(window).scrollTop($('#div4').offset().top - screen.height/5);

  }, 0);
});
$("#nav-extra").on('click', function(event) {
    event.preventDefault();
  setTimeout(function () {
    if(window.innerWidth < 576){
        $("#trg-btn").trigger('click');
    }

      $(window).scrollTop($('#div5').offset().top - screen.height/10);
  }, 0);
});
  
document.addEventListener('scroll',function(){
    let elem = $('#div1');
    const elem2 = $('#div2')[0];
    let rect = elem[0].getBoundingClientRect();
    let rect2 = elem2.getBoundingClientRect();
    if (rect.top <= 0) {
        elem[0].classList.add("reached");
    }
    let opval = ((2*rect2.top - screen.height )/screen.height)*100;
    elem.css("opacity",opval + "%");
    $('.inst-info').each(function(){  
        const aeroTop = $('.aeroplane')[0].getBoundingClientRect().top         
        const dist = $(this)[0].getBoundingClientRect().top - aeroTop;
        if(dist < screen.height/10 && dist > -screen.height/10)
        {
            $(this).css({"box-shadow": "0px 0px 20px rgb(39, 206, 24)", "color": "rgb(39, 206, 24)", "transform": "scaleY(1.1)", "background-color": "black", "opacity": "0.9"});
            $('.timeline-circle', this).css({"box-shadow": "0px 0px 30px rgb(39, 206, 24)"});
        }
        else
        {
            if(window.innerHeight > window.innerWidth){
                $(this).css({"box-shadow": "0px 0px 0px white", "color": "white", "transform": "scaleY(1)", "background-color": "transparent", "opacity": "1"});
                $('.timeline-circle', this).css({"box-shadow": "0px 0px 0px white"});
            }
            else{
                $(this).css({"box-shadow": "0px 0px 0px white", "color": "black", "transform": "scaleY(1)", "background-color": "transparent", "opacity": "1"});
                $('.timeline-circle', this).css({"box-shadow": "0px 0px 0px white"});
            }
            

        }

        if(aeroTop < screen.height/(3))
        {
            if(window.innerHeight > window.innerWidth){
                $(this).css({"box-shadow": "0px 0px 0px white", "color": "white", "transform": "scaleY(1)", "background-color": "transparent", "opacity": "1"});
                $('.timeline-circle', this).css({"box-shadow": "0px 0px 0px white"});
            }
            else{
                $(this).css({"box-shadow": "0px 0px 0px white", "color": "black", "transform": "scaleY(1)", "background-color": "transparent", "opacity": "1"});
                $('.timeline-circle', this).css({"box-shadow": "0px 0px 0px white"});
            }
            opval = (aeroTop * 300 / screen.height ) - 20 ;
            $('#ed-header, .aeroplane').css("opacity", opval + "%");

        }
        else {
            $('#ed-header, .aeroplane').css("opacity", "100%");

        }
    });

    elem = $('#project-container');
    rect = elem[0].getBoundingClientRect().top;

    if (rect > screen.height){
        elem.css("top", "45vh");
    }
    else if(rect < screen.height)
    {
        elem.css("top", "0vh");
    }
    
    if(window.innerHeight > window.innerWidth){
        $('.project').each(function(){
            let profTop = $(this)[0].getBoundingClientRect().top;
            let profDown = $(this)[0].getBoundingClientRect().bottom;
            let profDist = (screen.height/2) - ((profTop + profDown) / 2);
            if(screen.height/3.5 > profDist && profDist > (-1)*screen.height/3.5)
            {
                let scale = Math.abs(profDist*3.5/screen.height);
                scale = 1 - scale;
                scale = scale/4.5;
                scale = scale + 1;
                $(this).css({
                    "transform": "scale(" + scale + ")" ,
                    "z-index": "3" , 
                    "background-color": "black",
                    "box-shadow": "0px 0px 30px rgb(17, 224, 51)",
                    "color": "rgb(39, 206, 24)"
            })

                

            }
            else{
                $(this).css({"transform": "scale(1)","z-index": "1" , "background-color":"transparent", "box-shadow": "0px 0px 0px rgb(17, 224, 51)", "color": "white" });
            }
            
        })
    }
    else{
        
        $('.project').each(function(){

            $(this).css({"transform": "scale(1)","z-index": "1" , "background-color":"transparent", "box-shadow": "0px 0px 40px black", "color": "white" });
            $(this).hover(function(){
                $(this).css({"transform": "rotateY(180deg)"});
            },function(){
                $(this).css({"transform": "rotateY(0deg)"});
            })
        },);
    }

    if(window.innerHeight > window.innerWidth){
        $('.skills').each(function(){
            profTop = $(this)[0].getBoundingClientRect().top;
            profDown = $(this)[0].getBoundingClientRect().bottom;
            profDist = (screen.height/2) - ((profTop + profDown) / 2);
            if(screen.height/3 > profDist && profDist > (-1)*screen.height/3)
            {
                let scale = Math.abs(profDist*3/screen.height);
                scale = 1 - scale;
                scale = scale/4;
                scale = scale + 1;
                $(this).css({
                    "transform": "scale(" + scale + ")" ,
                    "z-index": "3" , 
                    "background-color": "black",
                    "box-shadow": "0px 0px 30px rgb(17, 224, 51)",
                    "color": "rgb(39, 206, 24)",
                    "border-width": "0px"
            })

                

            }
            else{
                $(this).css({"transform": "scale(1)","z-index": "1" , "background-color":"transparent", "box-shadow": "0px 0px 0px rgb(17, 224, 51)", "color": "white","border-width": "0px" });
            }
            
        })
    }
    else{
        
        $('.skills').each(function(){

            $(this).css({"transform": "scale(1)","z-index": "1" , "background-color":"transparent", "box-shadow": "0px 0px 40px black", "color": "black","border-width": "0px" });
            $(this).hover(function(){
                $(this).css({"transform": "scale(1.2)", "color": "rgb(41, 196, 36)",
                "background-color":"black",
                "opacity": "0.9"});
            },function(){
                $(this).css({"transform": "scale(1)", "opacity": "1", "background-color":"transparent", "color": "black" });
            })
        },);
    }

    if(window.innerHeight > window.innerWidth){
        $('.extra-content').each(function(){
            profTop = $(this)[0].getBoundingClientRect().top;
            profDown = $(this)[0].getBoundingClientRect().bottom;
            profDist = (screen.height/2) - ((profTop + profDown) / 2);
            if(screen.height/3 > profDist && profDist > (-1)*screen.height/3)
            {
                let scale = Math.abs(profDist*3/screen.height);
                scale = 1 - scale;
                scale = scale/4;
                scale = scale + 1;
                $(this).css({
                    "transform": "scale(" + scale + ")" ,
                    "z-index": "3" , 
                    "background-color": "black",
                    "box-shadow": "0px 0px 30px rgb(17, 224, 51)",
                    "color": "rgb(39, 206, 24)",
            })

                

            }
            else{
                $(this).css({"transform": "scale(1)","z-index": "2" , "background-color":"transparent", "box-shadow": "0px 0px 0px rgb(17, 224, 51)", "color": "white" });
            }
            
        })
    }
    else{
        
        $('.extra-content').each(function(){

            $(this).css({"color":"black","transform": "scale(1)","z-index": "1" , "box-shadow": "0px 0px 30px black","border-width": "0px" });
            $(this).hover(function(){
                $(this).css({
                    "color": "rgb(41, 196, 36)",
                "background-color":"black",
                "opacity": "0.9"});
            },function(){
                $(this).css({"color":"black", "opacity": "1", "background-color":"transparent"});
            })
        },);
    }


    

})


