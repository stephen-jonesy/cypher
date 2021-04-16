//Nav Burger

const navSlide = () =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.main-nav li');

  burger.addEventListener('click',()=>{
      //Toggle Nav
      nav.classList.toggle('nav-active');

      //Animate links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = '';
          } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          }
      });
      //burger animation
      burger.classList.toggle('toggle');
  });
}

navSlide();

//responsive nav text function

function showMessage(message) {
    document.querySelector('.insta-text').textContent = message;
}

showMessage("Instagram");

