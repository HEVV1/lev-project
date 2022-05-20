$(function(){
    $('.wrapper-link').on('click', function(){
        $($(this).parent().next('.hidden-container')).animate({
            height: 'toggle'
        })
        $($(this).next('.wrapper-icon').toggleClass('active'));        
    })   
})