
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

// certificates displays

let activeCategory = "All";

function populateCategoryTabs() {
    const categories = ["All", ...getUniqueValues("category")];
    const container = document.getElementById("cert-categories");
    container.innerHTML = "";

    categories.forEach(cat => {
        const tab = document.createElement("button");
        tab.className = `category-tab ${cat === activeCategory ? "active" : ""}`;
        tab.textContent = cat;
        tab.dataset.category = cat;
        tab.addEventListener("click", () => {
            activeCategory = cat;
            filterCertificates();
            
            // Update active tab
            document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
        });
        container.appendChild(tab);
    });
}

function filterCertificates() {
    const ALL_CERTIFICATES = certificates;
    let filtered = ALL_CERTIFICATES;

    if (activeCategory !== "All") {
        filtered = ALL_CERTIFICATES.filter(cert => cert.category === activeCategory);
    }

    const LATEST_CERTIFICATES = filtered.slice(0, 6);

    renderCertificates(LATEST_CERTIFICATES);

    const certificatesContainer = document.getElementById("certificates");
    const remainingCount = filtered.length - LATEST_CERTIFICATES.length;

    // Remove existing button
    const existingBtn = document.querySelector(".view-more-btn");
    if (existingBtn) {
        existingBtn.remove();
    }

    if (remainingCount > 0) {
        const viewMoreBtn = document.createElement("a");
        viewMoreBtn.href = `certifications.html?category=${activeCategory}`;
        viewMoreBtn.className = "custom-btn view-more-btn";
        viewMoreBtn.innerHTML = `<span>View (${remainingCount} more) <i class="fa-solid fa-arrow-right"></i></span>`;
        certificatesContainer.insertAdjacentElement("afterend", viewMoreBtn);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    populateCategoryTabs();
    filterCertificates();
});
