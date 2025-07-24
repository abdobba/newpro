/**====================show scroll up==================== */
const scrollUp = () => {
    const scrollUp= document.getElementById('scroii-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp) 





/*==================== EMAIL JS ==================== */
const contactForm = document.getElementById("contact-form");

const contactMessage = document.getElementById("contact-message");
const sendEmail = (e) => {
    e.preventDefault();

    contactMessage.innerHTML = "Sending...";

    emailjs.sendForm('service_v5f2s0h', 'template_2aqk3fg', '#contact-form', 'LmCaTSylY0HEIbHQA')
    .then(() => {
        contactMessage.textContent   = "Message sent successfully ✅";


        setTimeout(() => {
            contactMessage.textContent = "";
        }, 5000);
        contactForm.reset();
    })

}
contactForm.addEventListener("submit", sendEmail);







/*==================== SCROLL SECTIONS ACTIVE LINK ==================== */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
    }else{
        sectionsClass.classList.remove('active-link')
    }
    })
}

window.addEventListener('scroll', scrollActive)





/**==================== PARTICLES JS ==================== */

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});
sr.reveal('.perfil')
sr.reveal('.info',{origin: 'left',delay: 800})
sr.reveal('.skills',{origin: 'left',delay: 1000})
sr.reveal('.projects',{origin: 'bottom',delay: 1000})
sr.reveal('.about',{origin: 'right',delay: 1000})
sr.reveal(`canvas.particles-js-canvas-el , services__card`,{interval: 800})



// Initialize Particles.js
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#00d4ff", "#ff00d4", "#00ff88", "#ff6b00"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.6,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00d4ff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
  // Number of slides per view
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,

  // Autoplay
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // Effects
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // Mouse wheel control
  mousewheel: {
    thresholdDelta: 50,
    sensitivity: 1,
  },

  // Grab cursor
  grabCursor: true,

  // Touch events
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,

  // Smooth transitions
  speed: 600,

  // Events
  on: {
    init: function () {
    //   console.log("Swiper initialized");
    },
    slideChange: function () {
      // Add any custom functionality on slide change
    //   console.log("Active slide index:", this.activeIndex);
    },
  },
});

// Pause autoplay on hover
const swiperContainer = document.querySelector(".swiper");
swiperContainer.addEventListener("mouseenter", () => {
  swiper.autoplay.stop();
});

swiperContainer.addEventListener("mouseleave", () => {
  swiper.autoplay.start();
});

// Add loading states for images
const images = document.querySelectorAll(".project-image");
images.forEach((img) => {
  img.addEventListener("load", function () {
    this.classList.remove("loading-shimmer");
  });

  img.addEventListener("error", function () {
    this.src =
      "https://via.placeholder.com/800x600/667eea/white?text=Project+Image";
  });
});

// Add touch feedback
const slides = document.querySelectorAll(".swiper-slide");
slides.forEach((slide) => {
  slide.addEventListener("touchstart", function () {
    this.style.transform = "scale(0.98)";
  });

  slide.addEventListener("touchend", function () {
    this.style.transform = "scale(1)";
  });
});
