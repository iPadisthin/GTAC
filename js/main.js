$(document).ready(function(){

    
    /* make all .container children boxes the same height */
    var highest = 0;
    $('.container section').each(function() {
        if($(this).outerHeight() > highest){
            highest = $(this).outerHeight();
        }
        $(this).css('height',highest);
        //console.log( index + ": " + highest);
    });
    
    $('.menu.button').click(function(event){
        event.preventDefault();
       $('.menu-overlay').fadeIn(); 
    });
    $('.menu-overlay .close').click(function(event){
        event.preventDefault();
       $('.menu-overlay').fadeOut(); 
    });
    
    
});