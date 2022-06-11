$(function(){

  var swiper = new Swiper(".sc_recommend .music_swiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".sc_recommend .next",
      prevEl: ".sc_recommend .prev",
    },
    pagination: {
        el: ".swiper-pagination",
      },
  });

  // var swiper = new Swiper("#tab01 .grid_slide", {
  //   slidesPerView: 5,
  //   navigation: {
  //     nextEl: "#tab01 .next",
  //     prevEl: "#tab01 .prev",
  //   },
  // });
  // var swiper = new Swiper("#tab02 .grid_slide", {
  //   slidesPerView: 5,
  //   navigation: {
  //     nextEl: "#tab02 .next",
  //     prevEl: "#tab02 .prev",
  //   },
  // });
  // var swiper = new Swiper("#tab03 .grid_slide", {
  //   slidesPerView: 5,
  //   navigation: {
  //     nextEl: "#tab03 .next",
  //     prevEl: "#tab03 .prev",
  //   },
  // });


  $('.sc_today .tab_nav a').click(function(e){
      e.preventDefault();
      $(this).addClass('on').siblings().removeClass('on')
      el = $(this).attr('href'); // 내가선택한 속성중에 href값을 가져와라
      $(el).addClass('on').siblings().removeClass('on') // 형제는 빼라
  })



  
  var swiper = new Swiper(".sc_content .swiper", {
    slidesPerView: 5,
    // grid: {
    //   rows: 2,
    // },
    spaceBetween: 20,
   
    navigation: {
      nextEl: ".sc_content .next",
      prevEl: ".sc_content .prev",
    }
  });
// audio 
// controls

$('.play_area .btns').click(function(e){
  e.preventDefault();
  // $('#audio').get(0).play(); //get(0)이라고해야 오디오에 접근을해서 컨트롤가능하게해줌


  if($(this).find('.start').hasClass('on')){
    $(this).find('.stop').addClass('on').siblings().removeClass('on')
    $('#audio').get(0).play();
  }else {
    $(this).find('.start').addClass('on').siblings().removeClass('on')
    $('#audio').get(0).pause();
  }
})

//json


//sc_today
$.getJSON('./js/music.json',function(data,status){
  if(status == "success"){
   //통신이 성공했을때 실행하겠다.
    html = ''; //변수 먼저 셋팅
    data = data.filter(function(x){return x.cate == "t_music"})

    $.each(data,function(index,item){
      html += '<li class="swiper-slide">';
      html += '<div class="img_box">';
      html += '<a href=""><img src="'+item.imgSrc+'" alt=""></a>';
      html += '<a href="" class="play"><span class="blind">재생</span></a>';
      html += '</div>';
      html += '<div class="txt_box">';
      html += '<p>'+item.title+'</p>';
      html += '<span>'+item.artist+'</span>';
      html += '</div>';
      html += '</li>';

      // html += '<li class="swiper-slide"><img src="'+item.imgSrc+'"></li>';
    })
    $('#tab01 .swiper-wrapper').append(html);
    var swiper = new Swiper("#tab01 .swiper", {
      slidesPerView: 5,
      grid: {
        rows: 2,
      },
      spaceBetween: 20,
      observer: true,   // 추가
      observeParents: true,   // 추가
      navigation: {
        nextEl: "#tab01 .next",
        prevEl: "#tab01 .prev",
      }
    });
  }
})









$.getJSON('./js/music.json',function(data,status){
  if(status == "success"){
   //통신이 성공했을때 실행하겠다.
    html = ''; //변수 먼저 셋팅
    data = data.filter(function(x){return x.cate == "tab_02"})

    $.each(data,function(index,item){
      html += '<li class="swiper-slide">';
      html += '<div class="img_box">';
      html += '<a href=""><img src="'+item.imgSrc+'" alt=""></a>';
      html += '<a href="" class="play"><span class="blind">재생</span></a>';
      html += '</div>';
      html += '<div class="txt_box">';
      html += '<p>'+item.title+'</p>';
      html += '<span>'+item.artist+'</span>';
      html += '</div>';
      html += '</li>';

    })
    $('#tab02 .swiper-wrapper').append(html);
    var swiper = new Swiper("#tab02 .swiper", {
      slidesPerView: 5,
      grid: {
        rows: 2,
      },
      spaceBetween: 20,
      observer: true,   // 추가
      observeParents: true,   // 추가
      navigation: {
        nextEl: "#tab02 .next",
        prevEl: "#tab02 .prev",
      }
    });
  }
})

$.getJSON('./js/music.json',function(data,status){
  if(status == "success"){
   //통신이 성공했을때 실행하겠다.
    html = ''; //변수 먼저 셋팅
    data = data.filter(function(x){return x.cate == "tab_03"})

    $.each(data,function(index,item){
      html += '<li class="swiper-slide">';
      html += '<div class="img_box">';
      html += '<a href=""><img src="'+item.imgSrc+'" alt=""></a>';
      html += '<a href="" class="play"><span class="blind">재생</span></a>';
      html += '</div>';
      html += '<div class="txt_box">';
      html += '<p>'+item.title+'</p>';
      html += '<span>'+item.artist+'</span>';
      html += '</div>';
      html += '</li>';

    })
    $('#tab03 .swiper-wrapper').append(html);
    var swiper = new Swiper("#tab03 .swiper", {
      slidesPerView: 5,
      grid: {
        rows: 2,
      },
      spaceBetween: 20,
      observer: true,   // 추가
      observeParents: true,   // 추가
      navigation: {
        nextEl: "#tab03 .next",
        prevEl: "#tab03 .prev",
      }
    });
  }
})


$.getJSON('./js/music.json',function(data,status){
  if(status == "success"){
   //통신이 성공했을때 실행하겠다.
    html = ''; //변수 먼저 셋팅
    data = data.filter(function(x){return x.cate == "today"})

    $.each(data,function(index,item){
      html += '<li class="swiper-slide">';
      html += '<div class="img_box">';
      html += '<a href=""><img src="'+item.imgSrc+'" alt=""></a>';
      html += '<a href="" class="play"><span class="blind">재생</span></a>';
      html += '</div>';
      html += '<div class="txt_box">';
      html += '<p>'+item.title+'</p>';
      html += '<span>'+item.artist+'</span>';
      html += '</div>';
      html += '</li>';

      // html += '<li class="swiper-slide"><img src="'+item.imgSrc+'"></li>';
    })
    $('.sc_audio .swiper-wrapper').append(html);
  }
})

$.getJSON('./js/music.json',function(data,status){
  if(status == "success"){
   //통신이 성공했을때 실행하겠다.
    html = ''; //변수 먼저 셋팅
    data = data.filter(function(x){return x.cate == "content"})

    $.each(data,function(index,item){
      html += '<li class="swiper-slide">';
      html += '<div class="img_box">';
      html += '<a href=""><img src="'+item.imgSrc+'" alt=""></a>';
      html += '<i class="headset"><span class="blind">플로추천</span></i>';
      html += '<i class="up"><span class="blind">up</span></i>';
      html += '<a href="" class="play"><span class="blind">재생</span></a>';
      html += '</div>';
      html += '<div class="txt_box">';
      html += '<p>'+item.title+'</p>';
      html += '</div>';
      html += '</li>';

      // html += '<li class="swiper-slide"><img src="'+item.imgSrc+'"></li>';
    })
    $('.sc_content .swiper-wrapper').append(html);
  }
})

$.getJSON('./js/music.json',function(data,status){
  if(status == "success"){
   //통신이 성공했을때 실행하겠다.
    html = ''; //변수 먼저 셋팅
    data = data.filter(function(x){return x.cate == "book"})

    $.each(data,function(index,item){
          html +='<li>';
          html +='<div class="img_box">';
          html +='<a href=""><img src="'+item.imgSrc+'" alt=""></a>';
          html += '<a href="" class="play"><span class="blind">재생</span></a>';
          // if(item.up) {
          //   html +='<i class="up"><span class="blind">up</span></i>'
          // }

          // html +='<i class="rank">2</i>';
          html +='</div>';
          html +='<div class="txt_box">';
          html +='<p>'+item.title+'</p>';
          // html +='<span>'+item.artist+'</span>';
          html +='</div>';
          html +='</li>';

      // html += '<li class="swiper-slide"><img src="'+item.imgSrc+'"></li>';
    })
    $('.sc_book .music_list').append(html);
  }

  


})

$.getJSON('./js/music.json',function(data,status){
  if(status == "success"){
   //통신이 성공했을때 실행하겠다.
    html = ''; //변수 먼저 셋팅
    data = data.filter(function(x){return x.cate == "issue"})

    $.each(data,function(index,item){
      html += '<li class="swiper-slide">';
      html += '<div class="img_box">';
      html += '<a href=""><img src="'+item.imgSrc+'" alt=""></a>';
      html += '<i class="headset"><span class="blind">플로추천</span></i>';
      html += '<i class="up"><span class="blind">up</span></i>';
      html += '<a href="" class="play"><span class="blind">재생</span></a>';
      html += '</div>';
      html += '<div class="txt_box">';
      html += '<p>'+item.title+'</p>';
      // html += '<span>'+item.artist+'</span>';
      html += '</div>';
      html += '</li>';

      // html += '<li class="swiper-slide"><img src="'+item.imgSrc+'"></li>';
    })
    $('.sc_issue .music_list').append(html);
  }
})



$.getJSON('./js/music.json',function(data,status){
  if(status == "success"){
   //통신이 성공했을때 실행하겠다.
    html = ''; //변수 먼저 셋팅
    data = data.filter(function(x){return x.cate == "genre"})

    $.each(data,function(index,item){
      html += '<li class="swiper-slide">';
      html += '<div class="img_box">';
      html += '<a href=""><img src="'+item.imgSrc+'" alt=""></a>';
      html += '<a href="" class="play"><span class="blind">재생</span></a>';
      html += '</div>';
      html += '<div class="txt_box">';
      // html += '<p>'+item.title+'</p>';
      // html += '<span>'+item.artist+'</span>';
      html += '</div>';
      html += '</li>';

      // html += '<li class="swiper-slide"><img src="'+item.imgSrc+'"></li>';
    })
    $('.sc_genre .music_list').append(html);
  }
})

$.getJSON('./js/music.json',function(data,status){
  if(status == "success"){
   //통신이 성공했을때 실행하겠다.
    html = ''; //변수 먼저 셋팅
    data = data.filter(function(x){return x.cate == "edit"})

    $.each(data,function(index,item){
      html += '<li class="swiper-slide">';
      html += '<div class="img_box">';
      html += '<a href=""><img src="'+item.imgSrc+'" alt=""></a>';
      html += '<a href="" class="play"><span class="blind">재생</span></a>';
      html += '</div>';
      html += '<div class="txt_box">';
      html += '<p>'+item.title+'</p>';
      // html += '<span>'+item.artist+'</span>';
      html += '</div>';
      html += '</li>';

      // html += '<li class="swiper-slide"><img src="'+item.imgSrc+'"></li>';
    })
    $('.sc_editor .music_list').append(html);
  }
})

//sc_recommend 
$.getJSON('./js/theme.json',function(data,status){
  if(status == "success"){
   //통신이 성공했을때 실행하겠다.
    html = ''; //변수 먼저 셋팅
    data = data.filter(function(x){return x.cate == "recommend"})

    $.each(data,function(index,item){
        html += '<div class="swiper-slide" style="background:'+item.color+'">';
        html += '<div class="left_area">';
        html += '<h2>'+item.h2+'</h2>';
        html += '<span>총 36곡</span><span class="date">'+item.date+'</span>';
        html += '<div class="start_btn"><a class="play"></a></div>';
        html += '</div>';
        html += '<ul class="list">';

        $.each(item.playList,function(index2,item2){
          html += '<li>';
          html += '<a href="">';
          html += '<img src="'+item2.imgSrc+'" alt="Weekend">';
          html += '<div class="txt">';
          html += '<strong>'+item2.title+'</strong>';
          html += '<em>'+item2.artist+'</em>';
          html += '</div>';
          html += '</a>';
          html += '</li>';
        })
        html += '</ul>';
        html += '</div>';


      // html += '<li class="swiper-slide"><img src="'+item.imgSrc+'"></li>';
    })
    $('.sc_recommend .swiper-wrapper').append(html);
  }

  


})



  // var swiper = new Swiper(".sc_content .content.swiper", {
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   navigation: {
  //     nextEl: ".sc_content .title_area .next",
  //     prevEl: ".sc_content .title_area .prev",
  //   }
  // });

  var swiper = new Swiper(".sc_issue .i_swiper", {
    slidesPerView: 5,
    navigation: {
      nextEl: ".sc_issue .next",
      prevEl: ".sc_issue .prev",
    }
  });
  var swiper = new Swiper(".sc_genre .c_swiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: ".sc_genre .next",
      prevEl: ".sc_genre .prev",
    }
  });

  // var swiper = new Swiper(".sc_collection .c_swiper", {
  //   slidesPerView: 5,
  //   spaceBetween: 10,
  //   navigation: {
  //     nextEl: ".sc_collection .title_area .next",
  //     prevEl: ".sc_collection .title_area .prev",
  //   }
  // });

  // var swiper = new Swiper(".sc_monday .m_swiper", {
  //   navigation: {
  //     nextEl: ".sc_monday .title_area .next",
  //     prevEl: ".sc_monday .title_area .prev",
  //   }
  // });

})