
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

const certificates = [
  {
    title: "AWS Academy Cloud Foundations",
    image: "assets/certifs/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20250128-27-tp32hn.jpg",
    description: "AWS fundamentals including compute, storage, and security.",
    date: "28 Jan 2025",
    organization: "AWS Academy",
    category: "AWS"
  },
  {
    title: "AWS Academy Cloud Security Foundations",
    image: "assets/certifs/AWS_Academy_Graduate___AWS_Academy_Cloud_Security_Foundations_Badge20250223-26-kbye29.jpg",
    description: "AWS security best practices and cloud infrastructure defense.",
    date: "23 Feb 2025",
    organization: "AWS Academy",
    category: "AWS"
  },
  {
    title: "Agile Project Management",
    image: "assets/certifs/Agile Project Management.jpg",
    description: "Agile mindsets, principles, and frameworks.",
    date: "18 Dec 2024",
    organization: "Google",
    category: "Coursera"
  },
  {
    title: "Application: Se préparer aux métiers de la cybersécurité",
    image: "assets/certifs/Application  se préparer aux métiers de la.jpg",
    description: "Préparation aux carrières de la cybersécurité.",
    date: "2025",
    organization: "Google",
    category: "Cybersecurity"
  },
  {
    title: "Automatiser les tâches de cybersécurité avec Python",
    image: "assets/certifs/Automatiser les tâches de cybersécurité avec Python.jpg",
    description: "Automatisation de tâches de sécurité avec Python.",
    date: "2025",
    organization: "Coursera",
    category: "Python"
  },
  {
    title: "Connecter et protéger: Réseaux et sécurité",
    image: "assets/certifs/Connecter et protéger  réseaux et sécurité des reseaux.jpg",
    description: "Sécurisation des réseaux informatiques.",
    date: "2025",
    organization: "Google",
    category: "Networking"
  },
  {
    title: "Linux SQL",
    image: "assets/certifs/Coursera LINUX SQL.jpg",
    description: "Introduction à Linux et SQL.",
    date: "2025",
    organization: "Coursera",
    category: "Coursera"
  },
  {
    title: "Natural Language Processing",
    image: "assets/certifs/Coursera NLP.jpg",
    description: "Foundations of NLP and text processing.",
    date: "2025",
    organization: "Coursera",
    category: "AI"
  },
  {
    title: "Tools for Data Science",
    image: "assets/certifs/Coursera Tools for data science.jpg",
    description: "Overview of essential data science tools.",
    date: "2025",
    organization: "IBM",
    category: "Coursera"
  },
  {
    title: "Agile",
    image: "assets/certifs/Coursera agile.jpg",
    description: "Agile mindset and collaboration.",
    date: "2025",
    organization: "Coursera",
    category: "Management"
  },
  {
    title: "Cybersecurity Fundamentals",
    image: "assets/certifs/Coursera cyber secu.jpg",
    description: "Cybersecurity principles and tools.",
    date: "2025",
    organization: "Coursera & Google",
    category: "Security"
  },
  {
    title: "Data Science Methodology",
    image: "assets/certifs/Data Science Methodology.jpg",
    description: "Lifecycle and workflows in data science.",
    date: "2025",
    organization: "IBM",
    category: "Data Science"
  },
  {
    title: "Databases and SQL for Data Science",
    image: "assets/certifs/Databases and SQL for Data Science with Python.jpg",
    description: "SQL fundamentals for data science.",
    date: "2025",
    organization: "IBM",
    category: "SQL"
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    image: "assets/certifs/Exploratory Data Analysis for Machine Learning.jpg",
    description: "EDA techniques in machine learning projects.",
    date: "2025",
    organization: "Coursera",
    category: "Machine Learning"
  },
  {
    title: "Gestion des risques de sécurité",
    image: "assets/certifs/Faire preuve de prudence  gestion des risques de securité.jpg",
    description: "Risk management and incident handling.",
    date: "2025",
    organization: "Google",
    category: "Security"
  },
  {
    title: "Fondamentaux de la cybersécurité",
    image: "assets/certifs/Fondamentaux de la cybersécurité.jpg",
    description: "Principes de base de la cybersécurité.",
    date: "2025",
    organization: "Google",
    category: "Security"
  },
  {
    title: "Introduction to Cybersecurity Careers",
    image: "assets/certifs/Introduction to Cybersecurity Careers.jpg",
    description: "Roles and opportunities in cybersecurity.",
    date: "2025",
    organization: "Cisco",
    category: "Security"
  },
  {
    title: "Introduction to R Programming",
    image: "assets/certifs/Introduction to R Programming for Data Science.jpg",
    description: "Basics of R for data science tasks.",
    date: "2025",
    organization: "IBM",
    category: "Data Science"
  },
  {
    title: "Introduction to Cybersecurity (Cisco)",
    image: "assets/certifs/Introduction_to_Cybersecurity_certificate_thabelkodjo-gmail-com_dfa5da75-ee52-4ac4-8106-3a8ce351065a.jpg",
    description: "Core concepts of cybersecurity.",
    date: "2025",
    organization: "Cisco",
    category: "Security"
  },
  {
    title: "Introduction to IoT (Cisco)",
    image: "assets/certifs/Introduction_to_IoT_certificate_thabelkodjo-gmail-com_03eab629-5ff8-41df-8efc-e18d4a8d2f16.jpg",
    description: "Basics of Internet of Things.",
    date: "2025",
    organization: "Cisco",
    category: "IoT"
  },
  {
    title: "Project Management Basics",
    image: "assets/certifs/Project Management The Basics for Success.jpg",
    description: "Fundamentals of project management.",
    date: "2025",
    organization: "Coursera",
    category: "Management"
  },
  {
    title: "Project Planning",
    image: "assets/certifs/Project Planning Putting It All Together.jpg",
    description: "Planning techniques and implementation.",
    date: "2025",
    organization: "Coursera",
    category: "Management"
  },
  {
    title: "Python Project for Data Science",
    image: "assets/certifs/Python Project for Data Science.jpg",
    description: "Capstone project using Python for data tasks.",
    date: "2025",
    organization: "IBM",
    category: "Data Science"
  },
  {
    title: "Python for Data Science, AI & Development",
    image: "assets/certifs/Python for Data Science, AI & Development.jpg",
    description: "Python fundamentals for AI and development.",
    date: "2025",
    organization: "IBM",
    category: "Data Science"
  },
  {
    title: "Ressources numériques et vulnérabilités",
    image: "assets/certifs/Ressources numériques, menaces et vulnérabilités.jpg",
    description: "Security of digital resources.",
    date: "2025",
    organization: "Cisco",
    category: "Security"
  },
  {
    title: "Réseaux neuronaux et Deep Learning",
    image: "assets/certifs/Réseaux neuronaux et Deep Learning.jpg",
    description: "Neural networks and deep learning concepts.",
    date: "2025",
    organization: "Coursera",
    category: "AI"
  },
  {
    title: "Software Engineering Modeling",
    image: "assets/certifs/Software Engineering Modeling Software Systems.jpg",
    description: "UML, design patterns, and modeling techniques.",
    date: "2025",
    organization: "Coursera",
    category: "Software"
  },
  {
    title: "Supervised Machine Learning",
    image: "assets/certifs/Supervised Machine Learning Regression.jpg",
    description: "Supervised learning techniques including regression.",
    date: "2025",
    organization: "DeepLearning.AI",
    category: "Machine Learning"
  },
  {
    title: "Détection et réponse aux incidents",
    image: "assets/certifs/Tirer la sonnette d'alarme  détection et réponse.jpg",
    description: "Detecting and responding to cybersecurity incidents.",
    date: "2025",
    organization: "Google",
    category: "Security"
  },
  {
    title: "Tools for Data Science (Duplicate)",
    image: "assets/certifs/Tools for Data Science.jpg",
    description: "Duplicate of IBM tools for data science.",
    date: "2025",
    organization: "IBM",
    category: "Data Science"
  },
  {
    title: "Tweet Emotion Recognition with TensorFlow",
    image: "assets/certifs/Tweet Emotion Recognition with TensorFlow.jpg",
    description: "NLP classification using TensorFlow.",
    date: "2025",
    organization: "Coursera",
    category: "AI"
  },
  {
    title: "Visualizing Filters of a CNN",
    image: "assets/certifs/Visualizing Filters of a CNN using TensorFlow.jpg",
    description: "Understanding CNN filters visually.",
    date: "2025",
    organization: "Coursera",
    category: "Deep Learning"
  },
  {
    title: "Web Application Technologies and Django",
    image: "assets/certifs/Web Application Technologies and Django.jpg",
    description: "Django web development and backend principles.",
    date: "2025",
    organization: "Coursera",
    category: "Web"
  },
  {
    title: "What is Data Science",
    image: "assets/certifs/What is Data Science.jpg",
    description: "Introduction to the field of data science.",
    date: "2025",
    organization: "IBM",
    category: "Data Science"
  },
  {
    title: "Complete React v8",
    image: "assets/certifs/complete-react-v8.jpg",
    description: "Masterclass on React v8 and modern frontend.",
    date: "2025",
    organization: "Frontend Masters",
    category: "Frontend"
  }
];

function getYear(dateStr) {
  // Extrait l'année d'une date type "28 Jan 2025" ou "2025"
  if (!dateStr) return "";
  const match = dateStr.match(/\d{4}/);
  return match ? match[0] : "";
}

function renderCertificates(list) {
  const container = document.getElementById("certificates");
  container.innerHTML = "";
  if (list.length === 0) {
    container.innerHTML = '<p style="text-align:center;">Aucune certification trouvée.</p>';
    return;
  }
  list.forEach(cert => {
    const certHTML = `
      <div class="animated-layer fade-in-right-animation fadeInUp wow">
        <a href="#">
          <span class="img-holder">
            <img src="${cert.image}" alt="${cert.title}" />
          </span>
          <div class="content">
            <span class="category">${cert.category}</span>
            <span class="title">${cert.title}</span>
            <p>${cert.description}</p>
            <div class="meta d-flex align-items-center">
              <div class="d-flex align-items-center">
                <i class="fa-regular fa-calendar"></i>
                <span>${cert.date}</span>
              </div>
              <div class="d-flex align-items-center">
                <i class="fa-solid fa-building-columns"></i>
                <span>${cert.organization}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", certHTML);
  });
}

function getUniqueValues(key) {
  // Retourne les valeurs uniques pour un champ donné
  const values = certificates.map(cert => {
    if (key === "year") return getYear(cert.date);
    return cert[key] || "";
  });
  return Array.from(new Set(values.filter(Boolean)));
}

function populateFilters() {
  // Catégories
  const catSelect = document.getElementById("cert-category");
  getUniqueValues("category").forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    catSelect.appendChild(opt);
  });
  // Organisations
  const orgSelect = document.getElementById("cert-organization");
  getUniqueValues("organization").forEach(org => {
    const opt = document.createElement("option");
    opt.value = org;
    opt.textContent = org;
    orgSelect.appendChild(opt);
  });
  // Années
  const yearSelect = document.getElementById("cert-year");
  getUniqueValues("year").forEach(year => {
    const opt = document.createElement("option");
    opt.value = year;
    opt.textContent = year;
    yearSelect.appendChild(opt);
  });
}

function filterCertificates() {
  const search = document.getElementById("cert-search").value.trim().toLowerCase();
  const category = document.getElementById("cert-category").value;
  const organization = document.getElementById("cert-organization").value;
  const year = document.getElementById("cert-year").value;
  let filtered = certificates.filter(cert => {
    const matchesSearch =
      cert.title.toLowerCase().includes(search) ||
      cert.description.toLowerCase().includes(search) ||
      cert.organization.toLowerCase().includes(search) ||
      cert.category.toLowerCase().includes(search);
    const matchesCategory = category ? cert.category === category : true;
    const matchesOrganization = organization ? cert.organization === organization : true;
    const matchesYear = year ? getYear(cert.date) === year : true;
    return matchesSearch && matchesCategory && matchesOrganization && matchesYear;
  });
  renderCertificates(filtered);
}

window.addEventListener("DOMContentLoaded", () => {
  populateFilters();
  renderCertificates(certificates);
  document.getElementById("cert-search").addEventListener("input", filterCertificates);
  document.getElementById("cert-category").addEventListener("change", filterCertificates);
  document.getElementById("cert-organization").addEventListener("change", filterCertificates);
  document.getElementById("cert-year").addEventListener("change", filterCertificates);
});

