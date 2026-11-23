function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Load certificates from JSON file
async function loadCertificates() {
  try {
    const response = await fetch('./assets/certificates.json');
    const data = await response.json();
    populateCertificates(data.certificates);
  } catch (error) {
    console.error('Error loading certificates:', error);
  }
}

// Populate certificates grid with data from JSON
function populateCertificates(certificates) {
  const grid = document.getElementById('certificatesGrid');
  grid.innerHTML = ''; // Clear existing content
  
  certificates.forEach(cert => {
    const certItem = document.createElement('div');
    certItem.className = 'certificate-item';
    certItem.innerHTML = `
      <img src="${cert.image}" alt="${cert.name}" />
      <h3>${cert.name}</h3>
      <p>${cert.issuer} | ${cert.year}</p>
      <p style="font-size: 0.85em; color: #888;">${cert.description}</p>
      <a href="${cert.link}" class="cert-link">View Certificate</a>
    `;
    grid.appendChild(certItem);
  });
}

// Load projects from JSON file
async function loadProjects() {
  try {
    const response = await fetch('./assets/projects.json');
    const data = await response.json();
    populateProjects(data.projects);
  } catch (error) {
    console.error('Error loading projects:', error);
  }
}

// Populate projects grid with data from JSON
function populateProjects(projects) {
  const container = document.getElementById('projectsContainer');
  container.innerHTML = ''; // Clear existing content
  
  projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.className = 'details-container color-container';
    projectItem.innerHTML = `
      <div class="article-container">
        <img
          src="${project.image}"
          alt="${project.title}"
          class="project-img"
        />
      </div>
      <h2 class="experience-sub-title project-title">${project.title}</h2>
      <p style="margin: 10px 0; font-size: 0.9em; color: #666;">${project.description}</p>
      <div class="btn-container">
        <button
          class="btn btn-color-2 project-btn"
          onclick="location.href='${project.githubLink}'"
        >
          Github
        </button>
        <button
          class="btn btn-color-2 project-btn"
          onclick="location.href='${project.liveLink}'"
        >
          Live Demo
        </button>
      </div>
    `;
    container.appendChild(projectItem);
  });
}

function openCertificateModal() {
  const modal = document.getElementById("certificateModal");
  modal.style.display = "block";
}

function closeCertificateModal() {
  const modal = document.getElementById("certificateModal");
  modal.style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("certificateModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// Load certificates when page loads
document.addEventListener('DOMContentLoaded', function() {
  loadCertificates();
  loadProjects();
});
