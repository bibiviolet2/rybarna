

$(document).ready(function(){

    $('a.slide').click(function(){

          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
          && location.hostname == this.hostname) {
              var $target = $(this.hash);
              console.log(this.hash);
              $target = $target.length && $target || $('#' + this.hash.slice(1));

              if ($target.length) {
                  var targetOffset = $target.offset().top;

                  $('html,body').animate({scrollTop: targetOffset}, 0.2*targetOffset);
                  return false;
              }
          }

      });

    $('.fishes .item.selectable').click(function(){
      $(this).addClass('active');
      $('html,body').animate({scrollTop: $('.fs-0').position().top}, 200);
                  return false;
    });


    $('.owners .image').height($('.owners').height());

    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if(w > h)
    $('.screen').css('min-height', (h-40) + "px" );


    $('section.main-section-5 .item-holder').each(function(i,e){
      var items = $(e).find('.item');
      var max = 0;
      items.each(function(index,el){
        if($(el).height() > max) {
          max =  $(el).height();
          $(e).css('min-height',max + 'px');
        }
      });
    });

    $('.tab-content-holder').each(function(i,e){
      var items = $(e).find('.tab-content p');
      var max = 0;
      items.each(function(index,el){
        if($(el).height() > max) {
          max =  $(el).height();
          $(e).css('min-height',max+50 + 'px');
        }
      });
      items.css('min-height',max + 'px');
    });
   

    // vystředění ryby
    var h_sec_1 = $('.main-section-1').height();
    var h_fish = $('.main-section-1 > .container').height();

    if(h_sec_1 > h_fish)
      $('.main-section-1 > .container').css('margin-top',(h_sec_1 - h_fish)/2);


    $('a[href="#buy"], section.order .canvas').on('click',function(){
      $('section.order').toggleClass('active');
      $('html,body').animate({scrollTop: 0}, 200);
      return false;
    });

    $('.checkbox').on('click',function(){
      var group = $(this).attr('data-group');
      $(this).addClass('current');
      $(this).toggleClass('checked');
      $('.checkbox[data-group="' + group + '"]:not(.current)').removeClass('checked');
      $(this).removeClass('current');
      $('input[name="' + $(this).attr('data-input') + '"]').val($(this).attr('data-value'));
      return false;
    });



    $('.select .current').on('click',function(){
      var select = $(this).closest('.select');
      select.toggleClass('open');
      select.find('ul').slideToggle(100);
      return false;
    });

    $('.select ul li').on('click',function(){
      var select = $(this).closest('.select');
      select.toggleClass('open');
      select.find('ul').slideToggle(100);
      select.find('.current').text($(this).text());
      $('input[name="' + select.attr('data-input') + '"]').val($(this).attr('data-value'));
      return false;
    });


    $('.main-nav .toggle,.main-nav .canvas').on('click',function(){
      $('.main-nav').toggleClass('open');
      $('.main-nav ul').slideToggle(200);
    });
    $('.main-nav ul li a').on('click',function(){
      $('.main-nav').toggleClass('open');
      $('.main-nav ul').slideToggle(200);
    });

    $('.watch:in-viewport').each(function(){
        $(this).addClass('reveal');
    });

    $(window).on('scroll', function () {

    $('.watch:in-viewport').each(function(){
        $(this).addClass('reveal');
    });
    });


    $('.item-list').each(function(i,e){
      var holder = $(this).find('.item-holder');
      var next =  $(this).find('.next');
      var prev =  $(this).find('.prev');
      var current_holder =  $(this).find('.current');
      var current =  $(this).find('.current').text() * 1;
      var total =  $(this).find('.total').text() * 1;
      next.on('click',function(){
        if(current < total) {
          prev.removeClass('disabled');
          current++;
          holder.find('.item.active').removeClass('active');
          current_holder.text(current);
          holder.find('.item.i-' + current).addClass('active');
        }
        if(current == total) {
          next.addClass('disabled');
        }
        return false;
      });
      prev.on('click',function(){
        if(current > 1) {
          next.removeClass('disabled');
          current--;
          holder.find('.item.active').removeClass('active');
          current_holder.text(current);
          holder.find('.item.i-' + current).addClass('active');
        }
        if(current == 1) {
          prev.addClass('disabled');
        }
        return false;
      });
    });

    $('.tab-nav a').on('click',function(){
      if(!$(this).hasClass('active')){
        $('.tab-nav a.active').removeClass('active');
        $('.tab-content.active').removeClass('active');
        $('.tab-content.tc-' + $(this).attr('rel')).addClass('active');
        $(this).addClass('active');
        return false;
      }
    });
    $('.tab-content-navig .prev,.tab-content-navig .next').on('click',function(){
        $('.tab-nav a.active').removeClass('active');
        $('.tab-content.active').removeClass('active');
        $('.tab-content.tc-' + $(this).attr('rel')).addClass('active');
        $('.tab-nav a[rel="' + $(this).attr('rel') + '"]').addClass('active');
        return false;

    });


      $('.order .order-form').css('top','-' + ($('.order .order-form').height() + 300) + "px");
});
