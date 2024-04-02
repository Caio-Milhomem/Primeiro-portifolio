// Get all the section elements
const sections = document.querySelectorAll('section');
// Get all the nav links
const navLinks = document.querySelectorAll('.nav-link');

// Function to check which section is in view
function updateActiveSection() {
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 300; // Adjust the offset as needed
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      // Remove the "active" class from all links
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      // Get the corresponding nav link and add the "active" class
      const correspondingLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
      correspondingLink.classList.add('active');
    }
  });


}

// Add scroll event listener to update active section on scroll
window.addEventListener('scroll', updateActiveSection);