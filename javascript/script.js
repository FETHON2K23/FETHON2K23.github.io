$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else{

            $('.navbar').removeClass("sticky")

        }
    })
    //menu
    
    $('#home').click(function(){
        $('.navbar .menu').toggleClass('deactive');
    });

    $('#menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
    });
})




