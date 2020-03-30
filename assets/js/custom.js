"use strict";

$(document).ready(function() {

    console.log("document ready");

    // related posts
    var mySwiper = new Swiper ('.related-posts-swiper', {
      lazy: true,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      breakpoints: {
          320: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 2,
          },
          // 992: {
          //   slidesPerView: 2,
          // },

        }
    })
    //related products
    var mySwiper = new Swiper ('.swiper-related', {
      lazy: true,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      breakpoints: {
          320: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          2000: {
            slidesPerView: 5,
          },
        }
    })
    // favorites
    var mySwiper = new Swiper ('.swiper-favorites', {
        lazy: true,
        // spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // slidePerView : 'auto',
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        breakpoints: {
            320: {
              slidesPerView: 1,
            },
            767: {
              slidesPerView: 2,
            },
            1300: {
              slidesPerView: 3,
            },
            2000: {
              slidesPerView: 4,
            },
          }
      })

      //  product inner page images
      var swiper = new Swiper('.swiper-img', {
        cssMode: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination'
        },
        mousewheel: true,
        keyboard: true,
      });

      // brands
      var swiper = new Swiper('.swiper-brands', {
        breakpoints: {
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          990: {
            slidesPerView: 4,
          },
          1300: {
            slidesPerView: 5,
          },
          2000: {
            slidesPerView: 6,
          },
        },
        spaceBetween: 30,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      // if ($(window).width() < 769) {
      
      //   var swiper = new Swiper('.cart-gifts .card-body', {
          
      //     slidesPerView: 2,
      //     spaceBetween: 30,
      //     navigation: {
      //       nextEl: '.swiper-button-next',
      //       prevEl: '.swiper-button-prev',
      //     },
      //     pagination: {
      //       el: '.swiper-pagination'
      //     },
      //     mousewheel: true,
      //     keyboard: true,
      //   });
      // }
});

/** Dropdown on hover */
$(".nav-link.dropdown-toggle").hover( function () {
  // Open up the dropdown
  $(this).removeAttr('data-toggle'); // remove the data-toggle attribute so we can click and follow link
  $(this).parent().addClass('show'); // add the class show to the li parent
  $(this).next().addClass('show'); // add the class show to the dropdown div sibling
}, function () {
  // on mouseout check to see if hovering over the dropdown or the link still
  var isDropdownHovered = $(this).next().filter(":hover").length; // check the dropdown for hover - returns true of false
  var isThisHovered = $(this).filter(":hover").length;  // check the top level item for hover
  if(isDropdownHovered || isThisHovered) {
      // still hovering over the link or the dropdown
  } else {
      // no longer hovering over either - lets remove the 'show' classes
      $(this).attr('data-toggle', 'dropdown'); // put back the data-toggle attr
      $(this).parent().removeClass('show');
      $(this).next().removeClass('show');
  }
});
// Check the dropdown on hover
$(".dropdown-menu").hover( function () {
}, function() {
  var isDropdownHovered = $(this).prev().filter(":hover").length; // check the dropdown for hover - returns true of false
  var isThisHovered= $(this).filter(":hover").length;  // check the top level item for hover
  if(isDropdownHovered || isThisHovered) {
      // do nothing - hovering over the dropdown of the top level link
  } else {
      // get rid of the classes showing it
      $(this).parent().removeClass('show');
      $(this).removeClass('show');
  }
});


$(document).ready(function(){

  $('#accordion').on('shown.bs.collapse', function () { 
     
    var panel = $(this).find('.show').parent('.card'); 
     
    $('html, body').animate({ 
        scrollTop: panel.offset().top 
    }, 500); 
     
    }); 

    $('#b2bAddress').change(function(){
      if($(this).is(':checked')) {
        $( ".b2bAddress" ).show();
      } else {
        $( ".b2bAddress" ).hide();
      }
  });
  makeActive();
  $("input.custom-control-input[type='radio']").on("change",function(){
   makeActive();
  });
  
 
    $('.wishlist-btn').on('click', function () {
      $(this).toggleClass('added');
    }); 

  $(".faq .faq-counter").each(function(index) {
    $(this).text((index+1) + '.');
  });

  if ($('main').hasClass("blue")) {
    // console.log('home');
    $('header .navbar').addClass("bg-primary");
  } else {
    $('header .navbar').addClass("shadow-sm");
  }


  $('.search-form').on("click",(function(e){
  $(".search-form .form-control").show().addClass("fade-in");
    e.stopPropagation();
    e.preventDefault();
  }));

  //gift select
  $('.product-gift .btn').on("click",(function(e){ 
    e.preventDefault();
    $(this).parent('.product-gift').toggleClass('added');
  }));

  $('.sidenav').on('shown.bs.collapse', function () {
    // console.log('show');
    $('.overlay').addClass('active');
  });
  $('.sidenav').on('hidden.bs.collapse', function () {
    // console.log('show');
    $('.overlay').removeClass('active');
  });
  $('.overlay').on("click",(function(){
    $(this).removeClass('active');
    $('.sidenav').collapse('hide');
  }));
  
  //  $(document).on("click", function(e) {
  //   if ($(e.target).is("#search") === false && $(".form-control").val().length == 0) {
  //     $(".form-group").removeClass("sb-search-open");
  //   }
  // });
  //   $(".form-control-submit").click(function(e){
  //     $(".form-control").each(function(){
  //       if($(".form-control").val().length == 0){
  //         e.preventDefault();
  //         $(this).css('border', '2px solid red');
  //       }
  //   })
  // })
});
if ($(window).width() > 769) {
    $('#collapseFilters').addClass('show');


    var marker = $('.categories-list #marker'),
    current = $('.categories-list .current');
    if (marker.length) {
        // Initialize the marker position and the active class
        current.addClass('active');
        marker.css({
        // Place the marker in the middle of the border
        // bottom: -(marker.height() / 2),
        left: current.position().left,
        width: current.outerWidth(),
        height: current.outerWidth(),
        display: "block"
      });
    }


  if (Modernizr.csstransitions) {
 //   console.log("using css3 transitions");
    $('.categories-list li').mouseover(function () {
        var self = $(this),
            offsetLeft = self.position().left,
            // Use the element under the pointer OR the current page item
            width = self.outerWidth() || current.outerWidth(),
            height = self.outerWidth() || current.outerWidth(),
            // Ternary operator, because if using OR when offsetLeft is 0, it is considered a falsy value, thus causing a bug for the first element.
            left = offsetLeft == 0 ? 0 : offsetLeft || current.position().left;
      // Play with the active class
        $('.categories-list .active').removeClass('active');
        self.addClass('active');
        marker.css({
            left: left,
            height: width,
            width: width,
        });
    });

    // When the mouse leaves the menu
    $('.categories-list').mouseleave(function () {
      // remove all active classes, add active class to the current page item
        $('.categories-list .active').removeClass('active');
        current.addClass('active');
      // reset the marker to the current page item position and width
        marker.css({
            left: current.position().left,
            width: current.outerWidth(),
            height: current.outerWidth(),
        });
    });

  } else {
 //   console.log("using jquery animate");
      
    $('.categories-list li').mouseover(function () {
        var self = $(this),
            offsetLeft = self.position().left,
            // Use the element under the pointer OR the current page item
            width = self.outerWidth() || current.outerWidth(),
            height = self.outerWidth() || current.outerWidth(),
            // Ternary operator, because if using OR when offsetLeft is 0, it is considered a falsy value, thus causing a bug for the first element.
            left = offsetLeft == 0 ? 0 : offsetLeft || current.position().left;
      // Play with the active class
        $('.categories-list .active').removeClass('active');
        self.addClass('active');
        marker.stop().animate({
            left: left,
            width: width,
            height: width,
        }, 300);
    });

    // When the mouse leaves the menu
    $('.categories-list').mouseleave(function () {
      // remove all active classes, add active class to the current page item
        $('.categories-list .active').removeClass('active');
        current.addClass('active');
      // reset the marker to the current page item position and width
        marker.stop().animate({
            left: current.position().left,
            width: current.outerWidth(),
            height: current.outerWidth()
        }, 300);
    });
  }
// }
}

function makeActive(){
  $("input.custom-control-input[type='radio']").each(function(){
      if($(this).is(':checked')){
        
        $(this).parent().parent().addClass("active");
        $(this).parent().parent().siblings().removeClass("active");
        
      }else{
        //$(this).parent('.delivery-radio').parent('.delivery-method').siblings().removeClass("active");
      }
    });
}

// (function() {
//   'use strict';
//   window.addEventListener('load', function() {
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.getElementsByClassName('needs-validation');
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       form.addEventListener('submit', function(event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
// })();