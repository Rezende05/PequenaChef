$('.carousel').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
});


$('.feedbacks-carousel').slick({
  dots: true,
  centerMode: true,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 5000,
  lazyLoad: 'ondemand',
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});

const linksInternos = document.querySelectorAll('[data-menu="soft"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });


