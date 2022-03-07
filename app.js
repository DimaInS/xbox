$(document).ready(function(){

    let header = $('#header');
    let headerH;
    let intro = $('#home');
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        headerH = header.innerHeight();
        if ( scrollPos > headerH) {
            header.addClass('background');
        } else {
            header.removeClass('background'); 
        }
    });
    $ ('[data-scroll]').on('click',function(event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        $('html,body').animate( {
            scrollTop: elementOffset - 64
        } ,700 );
    });

        
    $('.header__btn').on('click', function(e) {
           e.preventDefault();   //---убирает свойство ссылки быть ссылкой
            $('.header__btn').removeClass('active');
            $(this).addClass('active');
           
           
           
           
           
        
        });

      

       $('.btn__item').on('click', function(e) {
             e.preventDefault();   //---убирает свойство ссылки быть ссылкой
           $(this).toggleClass('active');
           /*  $(this).addClass('active'); */
 
            
         
         });
    
   

$('.games__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 3,
    prevArrow: false,
    adaptiveHeight: true,
    speed:500,
    variableWidth: true,
   
    centerMode: true,
   
    responsive :[
         {
             breakpoint: 1024,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1,
                 
                 
                 centerMode: false
                 
                 
             }
            
    },  {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
           
            centerMode: false 
        }
        } 
      
]
    
 
});

$('.header__slider-items').slick({

    fade: false,
    slidesToShow: 1,
    variableWidth: false,
    infinite: true,
    dots: true,
    responsive: [
        {
            breakpoint: 500,
            settings: {
                dots: false
            }
        }
    ]

});


$('.stories-slider').slick({
    adaptiveHeight: true,
    slidesToShow:4,
    slidesToScroll: 4,
    prevArrow: false, 
    variableWidth: false,
    responsive:[
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
                
                
            }
           
   }, {
       breakpoint: 993,
       settings: {
           slidesToShow: 2,
           slidesToScroll: 2
       } 
   },  {
       breakpoint: 705,
       settings: {
           slidesToShow: 1,
           slidesToScroll: 1
       }
       } 
     
]


});

$('.header__burger').click(function(event) {
$('.header__burger,.header__menu').toggleClass('active');

$('body').toggleClass('lock') //блокирует скролл страницы при скролле бургера, но скролл срабатывает через раз при использовании бургера
});
$('.link').click(function(event){
    $('.header-burger.active,.header__nav.active').removeClass('active');
    
});

});