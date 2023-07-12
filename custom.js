$(function(){
  /* Section : Main */
  // Main Banner
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "section.main .next_btn",
      prevEl: "section.main .prev_btn",
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });


  

  /* Section : Header : LNB */
  $('.hd_btm .menu').click(function(){
    $('.hd_btm .lnb').toggle();
  })
  $('.lnb_hd_tit').mouseenter(function(){
    var lnbBdIdx = $('.lnb_hd_tit_bd').eq($(this).index());
    $(this).siblings().removeClass('active');
    lnbBdIdx.addClass('active');
    lnbBdIdx.siblings().removeClass('active');
  })
  $('.lnb_hd_tit_bd').mouseenter(function(){
    var lnbTitIdx = $('.lnb_hd_tit').eq($(this).index());
    $(this).siblings().removeClass('active');
    lnbTitIdx.addClass('active');
    lnbTitIdx.siblings().removeClass('active');
  })
  $('.lnb_hd_tit , .lnb_hd_tit_bd').mouseleave(function(){
    $('.lnb_hd_tit , .lnb_hd_tit_bd').removeClass('active');
  })

  /* Section : Style */
  $('section.style .next_btn').click(function(){
    $('section.style .bg_img img').hide();
    $('section.style .bg_img img').next().show();

    $('.content_tit p:eq(0)').hide();
    $('.content_tit p:eq(1)').show();
    })
  
  $('section.style .prev_btn').click(function(){
    $('section.style .bg_img img').hide();
    $('section.style .bg_img img').prev().show();

    $('.content_tit p:eq(0)').show();
    $('.content_tit p:eq(1)').hide();
  })
  
  /* Section : Brand */
  $('.brand_tit button').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  })
  $('.brand_tit button:eq(-1)').click(function(){
    $(this).prev().addClass('active');
    $(this).prev().siblings().removeClass('active');

    $('section.brand ul').animate({left:($(this).prev().index() * -1) * ($('section.brand li').width() + 40)});
  })

  $('.brand_tit button:not(:eq(-1))').click(function(){
    var brandWd = $('section.brand li').width();
        brandGap = 40;
        brandIdx = $(this).index();
        brandMove = -brandIdx * (brandWd + brandGap);

    $('section.brand ul').animate({left:brandMove});
  })

  /* Section : Review */
  $('section.review .next_btn').click(function(){
    $('.post_img_wr ul').css('transform','translateX(-560px)');

    $('.post_txt_wr:eq(0)').hide();
    $('.post_txt_wr:eq(1)').show();
  })
  $('section.review .prev_btn').click(function(){
    $('.post_img_wr ul').css('transform','translateX(0)');

    $('.post_txt_wr:eq(0)').show();
    $('.post_txt_wr:eq(1)').hide();
  })


  $(window).scroll(function(){
    if($(window).scrollTop() > 80){
      $('header').addClass('fixed');
      $('.top_btn').fadeIn('fast');
    }
    else {
      $('header').removeClass('fixed');
      $('.top_btn').fadeOut('fast');
    }
  })

  $('.top_btn').click(function(){
    $(window).scrollTop(0);
  })


})

$(function(){
  if(window.matchMedia('screen and (min-width : 1024px)').matches){

  /* Section : Style */
  $('section.style .next_btn').click(function(){
    $('section.style .products').css('transform','translateX(-670px)');
    })

  $('section.style .prev_btn').click(function(){
    $('section.style .products').css('transform','translateX(0)');
  })
  




  }
  else if(window.matchMedia('screen and (max-width : 768px)').matches){
    /* Text */
    $('.hd_btm_lt .gnb').prepend('<li><a href="#">HOME</a></li>');
    $('.top_ad_sub p').html('올 여름 필수품!<br>어라운디 썸머블랑켓 v4')

    $('.swiper-slide:eq(0) img').attr('src','images/m-mainbanner-01.jpg');
    $('.swiper-slide:eq(1) img').attr('src','images/m-mainbanner-02.jpg');
    $('.swiper-slide:eq(2) img').attr('src','images/m-mainbanner-03.jpg');

    // $('section.style').prepend($('section.style h2'));
    
    $('.ft_btm').append($('.ft_top .sns'));

    $('.ft_top .policy li:eq(0) a').text('PC버전');
    $('.ft_top .policy li:eq(1) a').text('회사소개');
    $('.ft_top .policy li:eq(2) a').text('이용약관');
    $('.ft_top .policy li:eq(3) a b').text('개인정보취급방침');
    $('.ft_top .policy li:eq(4) a').text('이용안내');
    $('.ft_top .policy li:eq(4)').after($('.ft_top .policy li:eq(0)'));
    $('.ft_btm .company .ft_tit').text('(주) 웨이크업');
    $('.ft_btm .company .info').append('<br><a href="#none">[사업자정보확인]</a>');
    $('.ft_btm .company span:eq(-3)').before('<br>');
    $('.ft_btm .company span:eq(-3) a').remove();
    $('.ft_btm .company span:eq(-1)').before('<br>');
    

    $('.main_banner .index .current').text($('.main_banner .slide').index($(this).eq()))
    $('.main_banner .index .total').text($('.main_banner .slide').length)


    


    // $('.post_img img')를
    // $('.post_img')와 같은 순서인 $('.post_txt_wr')의 자식인 a에
    // 첫번째 자식으로 이동시킨다
    $('.post_txt_wr:eq(0) > a').prepend($('.post_img:eq(0) img'));
    $('.post_txt_wr:eq(1) > a').prepend($('.post_img:eq(1) img'));
    $('.post_img_wr').remove();


    $('.main_banner .slide_wr').wrap('<div class="slide_box"></div>')
    $('.product_wr').wrap('<div class="product_box"></div>')
    $('section.brand ul').wrap('<div class="product_box"></div>')


      /* Section : Style */
  $('section.style .next_btn').click(function(){
    $('section.style .products > li:eq(0)').hide();
    $('section.style .products > li:eq(1)').show();
    })

  $('section.style .prev_btn').click(function(){
    $('section.style .products > li:eq(0)').show();
    $('section.style .products > li:eq(1)').hide();
  })



    $('.ft_btm .company .ft_tit').click(function(){
      $(this).toggleClass('active');
      $('.ft_btm .company .info').toggle();
    })

    /* M Menu */
    $('.m_under_bar .menu').click(function(){
      $('body').css('overflow','hidden');
      $('.m_menu').show().css('overflow','auto');
    })
    $('.m_menu .close_btn').click(function(){
      $('.m_menu').hide();
      $('body').css('overflow','auto');
      $('.menu_bd .menu > span').removeClass('active');
      $('.menu_bd .menu ul').slideUp();
    })

    $('.menu_bd .menu > span').click(function(){
      $(this).toggleClass('active');
      $(this).next('ul').slideToggle();
    })
  }
})