console.log("Script in");
document.addEventListener('scroll',function(){
    const elem = $('#div1');
    const elem2 = $('#div2')[0];
    let rect = elem[0].getBoundingClientRect();
    let rect2 = elem2.getBoundingClientRect();
    if (rect.top <= 0) {
        elem[0].classList.add("reached");
    }
    const opval = ((2*rect2.top - screen.height )/screen.height)*100;
    console.log(rect.top);
    elem.css("opacity",opval + "%");

})

document.addEventListener('scroll',function(){
    const elem = $('#div2');
    const elem2 = $('#div3')[0];
    let rect = elem[0].getBoundingClientRect();
    let rect2 = elem2.getBoundingClientRect();
    if (rect.top <= 0) {
        elem[0].classList.add("reached");
    }
    const opval = ((2*rect2.top - screen.height )/screen.height)*100;
    console.log(rect.top);
    elem.css("opacity",opval + "%");

})