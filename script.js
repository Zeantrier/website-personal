    const tombol = document.querySelector('.tombol');
		const menu = document.querySelector('.menu');
		const sections = document.querySelectorAll('.con');
		tombol.addEventListener('click', () => {
			menu.classList.toggle('aktif');
			document.body.classList.toggle('blur');
			
		});
		
		var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    
    var TrandingSlider = new Swiper('.tranding-slider', {
      effect: 'slide',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 3, 
      spaceBetween: 10, 
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1.5,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function () {
          
          document.querySelector('.swiper-slide-active').classList.remove('blur');
        },
        slideChangeTransitionEnd: function () {
          document.querySelectorAll('.swiper-slide').forEach(function (slide) {
            slide.classList.add('blur');
          });

          document.querySelector('.swiper-slide-active').classList.remove('blur');
          var activeSlide = document.querySelector('.swiper-slide-active');
          var prevSlide = activeSlide.previousElementSibling;
          var nextSlide = activeSlide.nextElementSibling;

          document.querySelectorAll('.swiper-slide').forEach(function (slide) {
            slide.classList.remove('swiper-slide-prev', 'swiper-slide-next');
          });

          if (prevSlide) prevSlide.classList.add('swiper-slide-prev');
          if (nextSlide) nextSlide.classList.add('swiper-slide-next');
        }
      }
    });


    function validateForm() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      let valid = true;
      const alphaNumericRegex = /^[a-zA-Z0-9\s.,]+$/;

      if (!alphaNumericRegex.test(name)) {
          document.getElementById('nameError').innerText = 'Mohon agar tidak menggunakan karakter lain selain angka, abjad alfabet, titik, dan koma';
          document.getElementById('nameError').style.visibility = 'visible';
          valid = false;
      } else {
          document.getElementById('nameError').style.visibility = 'hidden';
      }

      if (!email.includes('@')) {
          document.getElementById('emailError').innerText = 'Mohon masukkan @ dalam email';
          document.getElementById('emailError').style.visibility = 'visible';
          valid = false;
      } else {
          document.getElementById('emailError').style.visibility = 'hidden';
      }

      if (!alphaNumericRegex.test(message)) {
          document.getElementById('messageError').innerText = 'Mohon agar tidak menggunakan karakter lain selain angka, abjad alfabet, titik, dan koma';
          document.getElementById('messageError').style.visibility = 'visible';
          valid = false;
      } else {
          document.getElementById('messageError').style.visibility = 'hidden';
      }

      if (valid) {
          document.getElementById('successMessage').style.visibility = 'visible';
          
          setTimeout(() => {
              document.getElementById('contactForm').reset();
              document.getElementById('successMessage').style.visibility = 'hidden';
          }, 2000);
      }

      return false;
  }

  document.addEventListener('scroll', function() {
    const text = document.querySelector('.ds1');
    const textPosition = text.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (textPosition < screenPosition) {
        text.classList.add('visible');
    } else {
        text.classList.remove('visible');
    }
});
    
    
    $(document).ready(function()
{
    $('img').bind('contextmenu', function(e){
        return false;
    }); 
});


