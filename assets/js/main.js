
    $(window).on("load",function(){
          $(function(){
            $('#d2c_main_nav').on('activate.bs.scrollspy')
         });
        // Preloader Js
        $("#preloader").fadeOut(1500);

        // Silk Carousel slick
        function slickCarousel() {

            // // Testimonial slider
            $('.d2c_testimonial_slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                speed: 1500,
                autoplaySpeed: 1500,
                dots: true,
                fade: true,
                easing: 'easeOutElastic',
                infinite: true,
                responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        arrows:false
                      }
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        arrows:false
                      }
                    }
                ]
            });

            // // Testimonial slider
            $('.d2c_logo_slider').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                speed: 1000,
                autoplaySpeed: 1500,
                dots: false,
                infinite: true,
                responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                      }
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 2,
                      }
                    }
                ]
            });

        }
        slickCarousel();  

        // bottom to top scroll js
        function scrollToTop(){
            //Get the button
            var mybutton = document.getElementById("scrollToTopBtn");
        
            // When the user scrolls down 150px from the top of the document, show the button
            window.onscroll = function () { scrollFunction() };
        
            function scrollFunction() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
            }
        
            // When the user clicks on the button, scroll to the top of the document
            function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            }
            document.getElementById("scrollToTopBtn").addEventListener("click", topFunction);
        }scrollToTop();

        // Navbar Toggle Icon
        function navbar_toggler(){
            $('.navbar-toggler[data-bs-toggle=collapse]').click(function () {
                if( $(".navbar-toggler[data-bs-toggle=collapse] i").hasClass('fa-bars') ) {

                    $(".navbar-toggler[data-bs-toggle=collapse] i").removeClass("fa-bars");
                    $(".navbar-toggler[data-bs-toggle=collapse] i").addClass("fa-times");
                    $('.navbar-nav ').addClass('show');
                }
                else {      
                    $(".navbar-toggler[data-bs-toggle=collapse] i").removeClass("fa-times");
                    $(".navbar-toggler[data-bs-toggle=collapse] i").addClass("fa-bars");
                }
            });
        }
        navbar_toggler();
        // Navbar Clone In Mobile Device
        function navClone(){
            $('.js-clone-nav').each(function(){
                var $this = $(this);
                $this.clone().attr('class', 'navbar-nav').appendTo('.d2c_mobile_view_body');
            });

            $('.d2c_mobile_view .nav-link').click(function(){
                $(".nav-link").removeClass("active");
                $('.d2c_mobile_view').removeClass('show');
                $(".navbar-toggler[data-bs-toggle=collapse] i").removeClass("fa-times");
                $(".navbar-toggler[data-bs-toggle=collapse] i").addClass("fa-bars");
                $(this).toggleClass('active');
            });
        }
        navClone();
    });

    // Form Validation js
    (function() {
        'use strict';
        window.addEventListener('load', function() {
            var forms = document.getElementsByClassName('form_validation');
            var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
            });
        }, false);
    })();


    // counter js
    $(function () {
        let visibilityIds = ['#counters_1','#counter_2']; 
        let counterClass = '.count';
        let defaultSpeed = 3000;

        $(window).on('scroll', function () {
            getVisibilityStatus();
        });
        getVisibilityStatus();

        function getVisibilityStatus() {
            elValFromTop = [];
            var windowHeight = $(window).height(),
                windowScrollValFromTop = $(this).scrollTop();

            visibilityIds.forEach(function (item, index) {
                try {
                    elValFromTop[index] = Math.ceil($(item).offset().top);
                } catch (err) {
                    return;
                }
                if ((windowHeight + windowScrollValFromTop) > elValFromTop[index]) {
                    counter_init(item);
                }
            });
        }

        function counter_init(groupId) {
            let num, speed, direction, index = 0;
            $(counterClass).each(function () {
                num = $(this).attr('data-TargetNum');
                speed = $(this).attr('data-Speed');
                direction = $(this).attr('data-Direction');
                easing = $(this).attr('data-Easing');
                if (speed == undefined) speed = defaultSpeed;
                $(this).addClass('c_' + index);
                doCount(num, index, speed, groupId, direction, easing);
                index++;
            });
        }

        function doCount(num, index, speed, groupClass, direction, easing) {
            let className = groupClass + ' ' + counterClass + '.' + 'c_' + index;
            if(easing == undefined) easing = "swing";
            $(className).animate({
                num
            }, {
                duration: +speed,
                easing: easing,
                step: function (now) {
                    if (direction == 'reverse') {
                        $(this).text(num - Math.floor(now));
                    } else {
                        $(this).text(Math.floor(now));
                    }
                },
                complete: doCount
            });
        }
    });

        // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflow = 'hidden'; // Add this line
    }

    // Get all images and navigation arrows
    var images = document.querySelectorAll('.carousel-image');
    var prevArrow = document.querySelector('.carousel-arrow-prev');
    var nextArrow = document.querySelector('.carousel-arrow-next');

    // Set the first image as active
    images[0].classList.add('active');

    // Function to change active image
    function changeImage(next) {
    // Find current active image
    var activeImage = Array.from(images).findIndex(image => image.classList.contains('active'));

    // Remove active class from current image
    images[activeImage].classList.remove('active');

    // Calculate next active image index
    var nextImage = (next) ? (activeImage + 1) % images.length : (activeImage - 1 + images.length) % images.length;

    // Add active class to next image
    images[nextImage].classList.add('active');
    }

    // Add event listeners for navigation arrows
    prevArrow.addEventListener('click', function(e) {
    e.preventDefault();
    changeImage(false);
    });

    nextArrow.addEventListener('click', function(e) {
    e.preventDefault();
    changeImage(true);
    });


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = 'auto'; // Add this line
    }
    }
