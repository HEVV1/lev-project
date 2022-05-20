var isItVisible = false;
var regex = /^\s*$/; //regex for free space
$(function(){
    $('.image', '.wrapper-header-search').on('click', function(e){       
        if (!isItVisible) {
            e.preventDefault();
            showSearch();            
            hideLanguageAndLinks();
            isItVisible = true;
        }
        else if(isItVisible && !regex.test($('.wrapper-input input[name="search"]').val())){
           
        }
        else{
            e.preventDefault();
            hideSearch();
            showLanguageAndLinks();
            isItVisible = false;
        }
    })    
    $(document).on('click', function(event){
        if (isItVisible) {
            if (!$(event.target).closest('.layout-header').length
             && !$(event.target).closest('.wrapper-input').length){
                hideSearch();
                showLanguageAndLinks();
                isItVisible = false;
            }
        }
    })
});

function showSearch(){
    $('.wrapper-input').addClass('showSearch');
}

function hideSearch(){
    $('.wrapper-input').removeClass('showSearch')
    $('.wrapper-input input[name="search"]').val('');
}

function showLanguageAndLinks(){
    $('.block-header-language-select').removeClass('hideLanguageSelect');
    $('.block-header-links').removeClass('hideLInks');
}

function hideLanguageAndLinks(){
    $('.block-header-language-select').addClass('hideLanguageSelect');
    $('.block-header-links').addClass('hideLInks');
}