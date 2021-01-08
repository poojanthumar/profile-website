console.log("Script in");
document.addEventListener('scroll',function(){
    const elem = $('#div1');
    const elem2 = $('#div2')[0];
    let rect = elem[0].getBoundingClientRect();
    let rect2 = elem2.getBoundingClientRect();
    if (rect.top <= 0) {
        elem[0].classList.add("reached");
    }
    let opval = ((2*rect2.top - screen.height )/screen.height)*100;
    elem.css("opacity",opval + "%");

    console.log(screen.height);
    $('.inst-info').each(function(){  
        const aeroTop = $('.aeroplane')[0].getBoundingClientRect().top         
        const dist = $(this)[0].getBoundingClientRect().top - aeroTop;
        if(dist < screen.height/10 && dist > -screen.height/10)
        {
            $(this).css({"box-shadow": "0px 0px 20px white", "color": "white", "transform": "scaleY(1.1)"})
        }
        else
        {
            $(this).css({"box-shadow": "0px 0px 0px white", "color": "black", "transform": "scaleY(1)"})
        }

        if(aeroTop < screen.height/(3))
        {
            $(this).css({"box-shadow": "0px 0px 0px white", "color": "black"})
            opval = (aeroTop * 300 / screen.height ) - 20 ;
            $('#ed-header, .aeroplane').css("opacity", opval + "%");
        }
        else {
            $('#ed-header, .aeroplane').css("opacity", "100%");

        }
    });

    

})


