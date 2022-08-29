

$(".openbtn").click(function () {
	$(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
    $("#header,#container,#footer").toggleClass('mainblur');
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
	$("#header,#container,#footer").removeClass('mainblur');
});


function setFadeElement(){
	var windowH = $(window).height();	
	var scroll = $(window).scrollTop(); 
    
	var contentsTop = Math.round($('#blog').offset().top);	
	var contentsH = $('#blog').outerHeight(true);
    
	var contentsTop2 = Math.round($('#footer').offset().top);	
	var contentsH2 = $('#footer').outerHeight(true);

	if(scroll+windowH >= contentsTop && scroll+windowH  <= contentsTop+contentsH){
		$("#page-top").addClass("UpMove");    
		$("#page-top").removeClass("DownMove"); 
		$(".hide-btn").removeClass("hide-btn");	
	}
   else if(scroll+windowH >= contentsTop2 && scroll+windowH <= contentsTop2+contentsH2){       
		$("#page-top").addClass("UpMove");    
		$("#page-top").removeClass("DownMove");
	}
    else{
        if(!$(".hide-btn").length){				
        $("#page-top").addClass("DownMove");  
		$("#page-top").removeClass("UpMove"); 	
        }
	}
}


$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
	    }, 500);
    return false;
});


	$('.slider').slick({
		autoplay: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: '<div class="slick-prev"></div>',
		nextArrow: '<div class="slick-next"></div>',
		dots: true,
		responsive: [
            {
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
			{
			breakpoint: 769,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 426,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
	]
	});



function fadeAnime(){
    
	$('.fadeInTrigger').each(function(){ 
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeIn');// 
		}else{
		$(this).removeClass('fadeIn');
		}
		});
    
   
	$('.zoomOutTrigger').each(function(){ 
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('zoomOut');
		}else{
		$(this).removeClass('zoomOut');
		}
		});	
    
}


function slideAnime(){
	
		$('.leftAnime').each(function(){ 
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				
				
				$(this).addClass("slideAnimeLeftRight"); 
				$(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft"); 
			}else{
				$(this).removeClass("slideAnimeLeftRight");
				$(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
				
			}
		});
		
		$('.rightAnime').each(function(){
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				
				$(this).addClass("slideAnimeRightLeft");
				$(this).children(".rightAnimeInner").addClass("slideAnimeLeftRight");
			}else{
				
				$(this).removeClass("slideAnimeRightLeft");
				$(this).children(".rightAnimeInner").removeClass("slideAnimeLeftRight");
				
			}
		});
    
}



function GlowAnimeControl() {
	$('.glowAnime').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("glow");

		} else {
			$(this).removeClass("glow");
		}
	});
}




function BlurTextAnimeControl() {
	$('.blurTrigger').each(function(){ 
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('blur');
		}else{
		$(this).removeClass('blur');
		}
		});
}


$(window).scroll(function() {
        var scroll = $(window).scrollTop();
	$('#header-img').css({
			transform: 'scale('+(100 + scroll/10)/100+')',
			top: -(scroll/50)  + "%",
        });
    });



$(window).scroll(function () {
	setFadeElement();
    fadeAnime();
    slideAnime();
	GlowAnimeControl();
	BlurTextAnimeControl();
});


$(window).on('load',function(){
    
    $("#splash-logo").delay(1200).fadeOut('slow');
    
    $("#splash").delay(1500).fadeOut('slow',function(){
    $('body').addClass('appear');
     
    
	
	var element = $(".glowAnime");
	element.each(function () {
		var text = $(this).text();
		var textbox = "";
		text.split('').forEach(function (t, i) {
			if (t !== " ") {
				if (i < 10) {
					textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
				} else {
					var n = i / 10;
					textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
				}

			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});
	GlowAnimeControl(); 
	
    });
   
  


    $('.splashbg1').on('animationend', function() {
	setFadeElement();
    fadeAnime();
    slideAnime();
	BlurTextAnimeControl();
	});
   

});