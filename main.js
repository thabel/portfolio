
  // Handle desktop menu
  const navLinks = document.querySelectorAll('.menu nav ul li span');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Remove active class from all
      navLinks.forEach(l => l.classList.remove('active'));
      // Add active class to clicked one
      link.classList.add('active');

      // Scroll to section smoothly
      const sectionId = link.id.replace('-link', '');
      const section = document.getElementById(sectionId === 'about' ? 'my-photo' : sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Handle mobile menu
  const mobileLinks = document.querySelectorAll('.mobile-menu ul li a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Remove active class from all
      mobileLinks.forEach(l => l.classList.remove('active'));
      // Add active class to clicked one
      link.classList.add('active');

      // Scroll to section smoothly
      const href = link.getAttribute('href').substring(1);
      const section = document.getElementById(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }

      // Optionally close the mobile menu
      document.getElementById('checkboxmenu').checked = false;
    });
  });

