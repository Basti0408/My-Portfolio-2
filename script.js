// Transition from intro to main content
document.getElementById("enter-btn").addEventListener("click", () => {
    document.getElementById("intro-page").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    window.scrollTo(0, 0);
  });
  
  // Smooth scroll for nav links
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Simple contact form feedback
  const form = document.getElementById('contact-form');
  const response = document.getElementById('form-response');
  

const aboutContent = document.getElementById('about-slide');
const nextBtn = document.getElementById('nextBtn');

const panels = [
  {
    title: "Hi, I'm Basti Candava",
    text: "I’m a passionate Computer Science student at CvSU Bacoor Campus. I enjoy learning new technologies and growing my skills to become a full-stack developer."
  },
  {
    title: "The Real Me",
    text: "Aside from coding, I enjoy gaming, music, and helping others. I’m determined, curious, and sometimes a little chaotic — but always ready to improve."
  },
  {
    title: "Family Background",
    text: "I was raised in a supportive Filipino family who believed in education. My parents originally wanted me to become an engineer, but Computer Science has become my own path."
  }
];

let currentPanel = 0;

nextBtn.addEventListener('click', () => {
  currentPanel = (currentPanel + 1) % panels.length;
  aboutContent.innerHTML = `
    <h2>${panels[currentPanel].title}</h2>
    <p>${panels[currentPanel].text}</p>
  `;
});




const skillsContent = document.getElementById('skills-slide');
const skillsNextBtn = document.getElementById('skillsNextBtn');

const skillsPanels = [
  {
    title: "💡 Acquired Skills",
    content: `
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>Basic Python Programming</li>
        <li>Responsive Web Design</li>
        <li>Version Control with Git</li>
        <li>Basic Problem Solving</li>
      </ul>
    `
  },
  {
    title: "📚 Attended Trainings",
    content: `
      <p>No trainings attended yet.<br>
      I am currently open and excited to join future training opportunities related to programming and development.</p>
    `
  },
  {
    title: "📜 Acquired Certificates",
    content: `
      <p>I haven't received any certificates yet,<br>
      but I plan to earn certificates in web development and programming soon.</p>
    `
  }
];

let skillsIndex = 0;

skillsNextBtn.addEventListener('click', () => {
  skillsIndex = (skillsIndex + 1) % skillsPanels.length;
  skillsContent.innerHTML = `
    <h2>${skillsPanels[skillsIndex].title}</h2>
    ${skillsPanels[skillsIndex].content}
  `;
});

const projectSection = document.getElementById('project-slide');
const viewProjectsBtn = document.getElementById('viewProjectsBtn');

const projectListHTML = `
  <h2>My Projects</h2>
  <div class="project-list">
    <button class="project-item" onclick="showProject(0)">📱 Portfolio Website</button>
    <button class="project-item" onclick="showProject(1)">🧠 AI Plant Monitor</button>
    <button class="project-item" onclick="showProject(2)">🚦 Traffic Light Flowchart</button>
  </div>
`;

const projectDetails = [
  {
    title: "Portfolio Website",
    image: "images/portfolio.png", // path to your image
    description: "A personal mobile-first responsive portfolio showcasing skills and projects.",
    link: "https://github.com/yourusername/portfolio"
  },
  {
    title: "AI Plant Monitor",
    image: "images/plant-monitor.png",
    description: "Used camera + ML to detect wilted plants and trigger watering/fertilization automatically.",
    link: "https://github.com/yourusername/plant-monitor"
  },
  {
    title: "Traffic Light Flowchart",
    image: "images/traffic-light.png",
    description: "A logical flowchart simulation of a traffic light system using basic decision trees.",
    link: "https://github.com/yourusername/traffic-light"
  }
];

viewProjectsBtn.addEventListener('click', () => {
  projectSection.innerHTML = projectListHTML;
});

// Display full project panel
function showProject(index) {
  const project = projectDetails[index];
  projectSection.innerHTML = `
    <div class="project-display">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="project-description">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" class="project-link">View on GitHub</a>
      </div>
    </div>
  `;
}

const futureText = `In the future, I plan to become a full-stack developer, constantly improving my skills in both frontend and backend technologies. I also aim to contribute to meaningful projects, collaborate with great teams, and eventually build software solutions that make people's lives easier.`;

const typedText = document.getElementById("typed-text");
let index = 0;

function typeText() {
  if (index < futureText.length) {
    typedText.innerHTML += futureText.charAt(index);
    index++;
    setTimeout(typeText, 40); // typing speed
  }
}

// Trigger typing when the section comes into view
window.addEventListener("scroll", () => {
  const section = document.getElementById("plans");
  const rect = section.getBoundingClientRect();
  if (rect.top <= window.innerHeight * 0.75 && index === 0) {
    typeText();
  }
});

document.getElementById('view-full').addEventListener('click', function () {
    document.getElementById('resume-full').classList.remove('hidden');
    document.getElementById('resume-panels').classList.add('hidden');
    document.querySelectorAll('.resume-panel').forEach(panel => panel.classList.add('hidden'));
  });

  document.getElementById('view-part').addEventListener('click', function () {
    document.getElementById('resume-full').classList.add('hidden');
    document.getElementById('resume-panels').classList.remove('hidden');
    document.querySelectorAll('.resume-panel').forEach(panel => panel.classList.add('hidden'));
    document.getElementById('panel-1').classList.remove('hidden');
  });

  document.querySelectorAll('.next-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const target = this.getAttribute('data-target');
      document.querySelectorAll('.resume-panel').forEach(panel => panel.classList.add('hidden'));
      document.getElementById(target).classList.remove('hidden');
    });
  });

  document.querySelectorAll('.prev-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const target = this.getAttribute('data-target');
      document.querySelectorAll('.resume-panel').forEach(panel => panel.classList.add('hidden'));
      document.getElementById(target).classList.remove('hidden');
    });
  });

