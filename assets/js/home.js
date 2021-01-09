console.log("Script in");


  $("#nav-ed").on('click', function(event) {
    setTimeout(function () {
      event.preventDefault();

        $(window).scrollTop($('#div2').offset().top - screen.height/3);
    }, 0);
  });
  $("#nav-prof").on('click', function(event) {
      event.preventDefault();
    setTimeout(function () {
        $(window).scrollTop($('#div3').offset().top - screen.height/3.5);
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
            $(this).css({"box-shadow": "0px 0px 20px rgb(39, 206, 24)", "color": "rgb(39, 206, 24)", "transform": "scaleY(1.1)"});
            $('.timeline-circle', this).css({"box-shadow": "0px 0px 30px rgb(39, 206, 24)"});
        }
        else
        {
            $(this).css({"box-shadow": "0px 0px 0px white", "color": "white", "transform": "scaleY(1)"});
            $('.timeline-circle', this).css({"box-shadow": "0px 0px 0px white"});

        }

        if(aeroTop < screen.height/(3))
        {
            $(this).css({"box-shadow": "0px 0px 0px white", "color": "white", "transform": "scaleY(1)"})
            opval = (aeroTop * 300 / screen.height ) - 20 ;
            $('#ed-header, .aeroplane').css("opacity", opval + "%");
            $('.timeline-circle', this).css({"box-shadow": "0px 0px 0px white"});

        }
        else {
            $('#ed-header, .aeroplane').css("opacity", "100%");

        }
    });

    elem = $('#project-container');
    rect = elem[0].getBoundingClientRect().top;

    if (rect > screen.height){
        elem.css("margin-top", "60vh");
    }
    else if(rect < screen.height)
    {
        elem.css("margin-top", "15vh");
    }
    
    if(window.innerHeight > window.innerWidth){
        $('.project').each(function(){
            const profTop = $(this)[0].getBoundingClientRect().top;
            const profDown = $(this)[0].getBoundingClientRect().bottom;
            let profDist = (screen.height/2) - ((profTop + profDown) / 2);
            if(screen.height/10 > profDist && profDist > (-1)*screen.height/10)
            {
                let scale = Math.abs(profDist*10/screen.height);
                scale = 1 - scale;
                scale = scale/3;
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


    

})


