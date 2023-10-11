const goTopbtn  = document.querySelector('.go-top');
goTopbtn.addEventListener('click', goTop);
window.addEventListener('scroll' , trackScroll);

function trackScroll(){
    const offset = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if(offset >coords  ){
        goTopbtn.classList.add('go-top--show');
    }else{
        goTopbtn.classList.remove('go-top--show');
    }
}

function goTop(){
    if (window.pageYOffset > 0 ){
        window.scrollBy(0, - 75);
        setTimeout(goTop, 0);
    }
}

