/*========================================toggle icon navbar===========================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => 
{
menuIcon.classList.toggle('bx-x');	
navbar.classList.toggle('active');	
};


/*====================scroll section active link================================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =() =>
{
sections.forEach(sec =>
{
let top = window.scrollY;	
let offset = sec.offsetTop -150;
let	height = sec.offsetHeight;
let id = sec.getAttribute('id');

if(top>= offset && top < offset + height)
{
navlinks.forEach(links =>{
links.classList.remove('active');
documentquerySelector('header nav a[href*='  + id +']').classList.add('active');	
	
});	
	
}
});	
	
/*==========================sticky navbar========================*/
let header =document.querySelector('header');

header.classList.toggle('sticky',window.scrollY >100);

/*========================remove toggle icon and navbar when click navbar link(sroll)===========================*/	
menuIcon.classListist.remove('bx-x');
navbar.classList.remove('active');
};


/*========================scroll reveal===========================*/	
ScrollReveal
({
	reset:true,
	distance:'80px',
	duration:2000,
	delay:200
});

ScrollReveal().reveal('.home-content, .heading' , { origin: 'top'});
 
function sendToWhatsApp() {
    let name = document.querySelector('input[placeholder="Full Name"]').value;
    let email = document.querySelector('input[placeholder="Email Address"]').value;
    let phone = document.querySelector('input[placeholder="Mobile Number"]').value;
    let subject = document.querySelector('input[placeholder="Email Subject"]').value;
    let message = document.querySelector('textarea[placeholder="Your Message"]').value;

    let fullMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0AMessage: ${message}`;
    let whatsappNumber = "917982598233"; // ← apna WhatsApp number yahan daalo

    let url = `https://wa.me/${whatsappNumber}?text=${fullMessage}`;
    window.open(url, '_blank');
  }
     function openFullscreen() {
    var video = document.getElementById("myVideo");
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE11 */
      video.msRequestFullscreen();
    }
  }

  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.getElementById('navbar');

  function toggleNavbar() {
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
  }

  // Optional: Close navbar when clicking outside
  document.addEventListener('click', function(event) {
    if (!navbar.contains(event.target) && event.target.id !== 'menu-icon') {
      navbar.style.display = 'none';
    }
  });

  // Burger icon click
  menuIcon.addEventListener('click', toggleNavbar);

