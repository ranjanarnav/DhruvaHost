document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == "complete") {
    console.log(
      "%cHandcrafted by Eshxn.xyz",
      "color:#c3073f;font-size:30px;font-weight:800;"
    );
  }
};

particlesJS.load('background-particles', '/assets/js/particles-cofig.json', function() {});

$(document).ready(function () {
  $("a[href^='#']").click(function () {
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      600
    );
    return false;
  });

  $(".burger-icon").click(function () {
    $(this).toggleClass("active");
    $("body").toggleClass("sidebar-open");
    $("html, body").scrollTop(0);
  });

  $(".navbar-r a").click(function () {
    $(".burger-icon").removeClass("active");
    $("body").removeClass("sidebar-open");
  });

  $(".header-slider .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      600: {
        items: 3,
        margin: 40,
      },
      1000: {
        items: 4,
        margin: 40,
      },
    },
  });
  

  $(".features-grid.owl-carousel, .blog-grid.owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        margin: 40,
      },
      600: {
        items: 2,
        margin: 40,
      },
      1000: {
        items: 3,
        margin: 40,
      },
    },
  });
  
    // $("NAVSLIDERHERE").owlCarousel({
    //   loop: true,
    //   autoplay: false,
    //   autoplayTimeout: 3000,
    //   autoplayHoverPause: true,
    //   responsiveClass: true,
    //   dots: true,
    //   nav: true,
    //   navText: [
    //     '<i class="fa-solid fa-arrow-left"></i>',
    //     '<i class="fa-solid fa-arrow-right"></i>'
    //   ],
    //   responsive: {
    //     0: { items: 1, margin: 40 },
    //     600: { items: 2, margin: 40 },
    //     1000: { items: 3, margin: 40 }
    //   }
    // });



  $(".info-l.owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: true,
    items: 1,
    margin: 15,
    
        onInitialized: function() {
            $('.owl-dot').each(function(index) {
                $(this).attr('aria-label', 'Slide ' + (index + 1));
            });
        },
        onChanged: function() {
            $('.owl-dot').each(function(index) {
                $(this).attr('aria-label', 'Slide ' + (index + 1));
            });
        }
  });
  $('header .game-card').hover(function() { 
    var game = $(this).attr('game');
    $('.header-bg-img').removeClass('active');
    $('.header-bg-img.' + game).addClass('active');
  });

  if ($('.marquee-container').length > 0) {
    function initMarquee(container, direction) {
        const marqueeContainer = $(container);
        
        if (!marqueeContainer.length) return;
        
        const marquee = marqueeContainer.find('.marquee-left, .marquee-right');
        
        if (!marquee.length) return;
        
        const content = marquee.find('.marquee-content').first();
        
        if (!content.length) return;
        
        const contentWidth = content[0].scrollWidth;
        const cloneCount = Math.ceil($(window).width() / contentWidth) + 2;
        for (let i = 0; i < cloneCount; i++) {
            content.clone().appendTo(marquee);
        }
        let position = direction === 'left' ? 0 : -contentWidth;
        const speed = 0.5;
        let animationId;
        let isPaused = false;
        function animate() {
            if (!isPaused) {
                if (direction === 'left') {
                    position -= speed;
                    if (position <= -contentWidth) {
                        position = 0;
                    }
                } else {
                    position += speed;
                    if (position >= 0) {
                        position = -contentWidth;
                    }
                }
                marquee.find('.marquee-content').css('transform', `translateX(${position}px)`);
            }
            animationId = requestAnimationFrame(animate);
        }
        marquee.on('mouseenter', function () {
            isPaused = true;
        });
        marquee.on('mouseleave', function () {
            isPaused = false;
        });
        animate();
    }
    initMarquee('.marquee-container:eq(0)', 'left');
    initMarquee('.marquee-container:eq(1)', 'right');
}


  $('.faq-question').click(function() {
    const faqItem = $(this).parent();
    faqItem.toggleClass('active');
  });

  $('.modal').on('click', function(e) {
    if ($(e.target).hasClass('modal')) {
        $(this).removeClass('active');
    }
    });

    $('.modal-close').on('click', function() {
        $('.modal').removeClass('active');
    });
    
$(document).ready(function() {
    $('#gameSearch').on('keyup', function() {
        filterGames();
    });

    $('.platform-filter').on('click', function() {
        $('.platform-filter').removeClass('active');
        $(this).addClass('active');
        filterGames();
    });

    function filterGames() {
        var searchVal = $('#gameSearch').val().toLowerCase();
        var platform = $('.platform-filter.active').data('platform');

        $('.game-card').each(function() {
            var filterWords = $(this).data('filter').toLowerCase();
            var gamePlatforms = $(this).data('platform');
            
            var matchSearch = filterWords.indexOf(searchVal) > -1;
            var matchPlatform = platform === 'all' || gamePlatforms.indexOf(platform) > -1;

            if(matchSearch && matchPlatform) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
});
   
  $('.btn-switch').click(function() {
    if ($(this).hasClass('active')) {
      return;
    }
    
    $('.btn-switch').removeClass('active');
    $(this).addClass('active');
    
    const imgSrc = $(this).data('img');
    $('#panel-img').attr('src', imgSrc);
  }); 
  
    $('#burgerMenu').click(function() {
        $(this).toggleClass('active');
        $('#mobileSidebar').toggleClass('active');
        $('#sidebarOverlay').toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    $('#closeSidebar, #sidebarOverlay').click(function() {
        $('#burgerMenu').removeClass('active');
        $('#mobileSidebar').removeClass('active');
        $('#sidebarOverlay').removeClass('active');
        $('body').removeClass('no-scroll');
    });

    $('.sidebar-dropdown .dropdown-toggle').click(function() {
        $(this).parent('.sidebar-dropdown').toggleClass('active');
    });
});