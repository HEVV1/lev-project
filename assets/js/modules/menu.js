var isMenuActive = false;
var someTime;
$(function(){
    let burger = $('.block-burger');
    burger.on('click', function(){        
        showMenu();
        if (!isMenuActive) {
            layoutWhiteActive();
        }
        else{
            layoutWhiteInactive();
        }
        animateBurgerLine(1);
        animateBurgerLine(2);
        animateBurgerLine(3);
        changeHeaderColor();
        changeLanSelectColor();
        disableOverflow();        
    });
})
function layoutWhiteActive(){    
    let layout = $('.layout-header');
    someTime = setTimeout(() => {
        layout.addClass('layout-white-active');
    }, 300);
    isMenuActive = true;
}

function layoutWhiteInactive(){    
    let layout = $('.layout-header');
    clearTimeout(someTime);
    layout.removeClass('layout-white-active');
    isMenuActive = false;
}

function animateBurgerLine(index){
    let line = $('.line-'+index);
    line.toggleClass('active');
}

function changeHeaderColor(){
    let title1 = $('.logo.logo-mobile-white', '.block-logos-mobile');
    let title2 = $('.logo.logo-mobile-green', '.block-logos-mobile');
    title1.toggleClass('active-white');
    title2.toggleClass('active-green');
}

function changeLanSelectColor(){
    let lanSelector = $('.block-header-language-select-mobile');
    $('.wrapper-text', lanSelector).toggleClass('active');
    $('.wrapper-icon', lanSelector).toggleClass('active');
}

function showMenu(){
    let menu = $('.layout-menu');
    menu.toggleClass('active');
}

function disableOverflow(){
    $('html').scrollTop(0);    
    $('html').toggleClass('overflow-disable');
}

$(function(){
    let layout = $('.layout-header');
    let menu = $('.layout-menu');
    let line = $('.line');
    let title = $('.logo.logo-mobile-white', '.block-logos-mobile');
    let lanSelector = $('.block-header-language-select-mobile');
    $(window).on('init resize change', function(){ 
        if($(window).width() > 768){
            layout.removeClass('layout-white-active');
            menu.removeClass('active');
            line.removeClass('active');
            title.removeClass('active');
            $('.wrapper-text', lanSelector).removeClass('active');
            $('.wrapper-icon', lanSelector).removeClass('active');
            $('html').removeClass('overflow-disable');
            isMenuActive = false;
        }
    })
})
