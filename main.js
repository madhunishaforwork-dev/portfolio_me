// Project Data
// Project Data
const projectsData = {

  "ai-book-analyzer": {
    title: "AI Book Analyzer",
    summary: "AI-powered application that analyzes PDF books to generate summaries, FAQs, and interactive Q&A.",
    tags: ["Artificial Intelligence"],
    overview: "An intelligent application that processes PDF books to provide summaries, FAQs, and an interactive Q&A interface.",
    problem: "Difficulty in quickly extracting key insights and answers from extensive technical documents or books.",
    approach: "Utilized Large Language Models (LLMs) to ingest PDF text, generate embeddings, and perform retrieval-augmented generation (RAG) to answer user queries contextually.",
    technologies: "Python, Large Language Models (LLMs), NLP, PDF Processing",
    outcome: "Significantly reduced reading time and enhanced help comprehension through interactive content querying.",
    liveUrl: "https://aibookanalyzer-q48y7sj3pyvgcbpc8ug28j.streamlit.app/"
  },
  "ai-mock-interviewer": {
    title: "AI Mock Interviewer",
    summary: "AI-based interview simulation platform with domain-specific and resume-based interviews.",
    tags: ["Artificial Intelligence"],
    overview: "A simulation platform that conducts domain-specific and resume-based mock interviews using AI.",
    problem: "Students and job seekers often lack accessible, personalized, and realistic practice environments for technical interviews.",
    approach: "Developed an interactive system where an AI agent dynamically generates questions based on uploaded resumes and selected domains, analyzing user responses for constructive feedback.",
    technologies: "Artificial Intelligence, Natural Language Processing, Web Development",
    outcome: "Provided a realistic and accessible practice environment, helping users improve their interview confidence and performance."
  },
  "mental-health-support": {
    title: "Mental Health Support Application",
    summary: "AI-assisted application providing stress assessment and personalized mental well-being guidance.",
    tags: ["AI & Health"],
    overview: "An AI-assisted application designed to provide stress assessment and personalized guidance for mental well-being.",
    problem: "Limited accessibility to immediate, preliminary mental health support and effective stress tracking tools.",
    approach: "Implemented sentiment analysis algorithms to assess user inputs (text or voice) and recommend appropriate coping strategies or resources based on the detected emotional state.",
    technologies: "AI, Sentiment Analysis, Mobile/Web Development",
    outcome: "Offered an accessible, private tool for monitoring mental well-being and practicing stress management techniques.",
    liveUrl: "https://mental-health-app-6zjf.onrender.com"
  },
  "ecg-arrhythmia-detection": {
    title: "ECG Arrhythmia Detection Using Machine Learning",
    summary: "ML-based classification of ECG signals for detecting cardiac arrhythmias.",
    tags: ["Machine Learning"],
    overview: "A machine learning system for the classification of ECG signals to detect cardiac arrhythmias.",
    problem: "Manual interpretation of ECG signals is time-consuming, prone to human error, and requires specialized expert knowledge.",
    approach: "Preprocessed raw ECG signal data (denoising, normalization) and trained a machine learning classifier (e.g., CNN) to accurately identify arrhythmia patterns from normal heartbeats.",
    technologies: "Machine Learning, Python, Signal Processing, Deep Learning",
    outcome: "Automated early detection of cardiac anomalies with high accuracy, potentially assisting medical professionals in diagnosis."
  },
  "supply-chain-management": {
    title: "Supply Chain Management System (Team Project)",
    summary: "Database-driven system for managing inventory, suppliers, and logistics using relational database design.",
    tags: ["Database Systems"],
    overview: "A comprehensive database-driven system designed to streamline the management of inventory, suppliers, and logistics.",
    problem: "Inefficient manual tracking of inventory and supplier data leading to errors and delays in the supply chain.",
    approach: "Designed a normalized relational database schema to efficiently track products, orders, and suppliers. Implemented SQL queries for complex reporting and data integrity checks.",
    technologies: "SQL, Relational Database Management Systems (RDBMS), Database Design",
    outcome: "Streamlined inventory tracking, reduced data redundancy, and improved data integrity for logistics management."
  },
  "smart-trolley": {
    title: "Smart Trolley with Automated Billing System (Team Project)",
    summary: "IoT-enabled shopping trolley with RFID and load-cell-based automatic billing.",
    tags: ["IoT"],
    overview: "An IoT-enabled shopping trolley that uses RFID and load-cell technology for automatic billing.",
    problem: "Long checkout queues in retail stores allow for inefficiency and cause customer dissatisfaction.",
    approach: "Integrated RFID readers to identify items placed in the trolley and load cells to verify weight/presence, calculating the total bill in real-time and enabling checkout without traditional scanning.",
    technologies: "IoT, RFID, Embedded Systems, Sensors, Microcontrollers",
    outcome: "Drastically reduced checkout times and improved the overall shopping experience for customers."
  },
  "plant-growth-classification": {
    title: "Plant Growth Classification Using Machine Learning (Team Project)",
    summary: "Image-based plant growth stage classification using machine learning.",
    tags: ["Machine Learning"],
    overview: "An image-based system using machine learning to classify the growth stages of plants.",
    problem: "Need for scalable, automated monitoring of crop health and growth stages in precision agriculture.",
    approach: "Collected and labeled an image dataset of plants at various stages; trained a Convolutional Neural Network (CNN) to classify images into specific growth stages.",
    technologies: "Deep Learning, Computer Vision, Python, TensorFlow/PyTorch",
    outcome: "Enabled automated, non-invasive monitoring for agricultural optimization and yield prediction."
  }
};

// Router Logic
function handleRoute() {
  const hash = window.location.hash.substring(1) || 'hero';

  // Check if it's a project detail route
  if (hash.startsWith('projects/')) {
    const projectId = hash.split('/')[1];
    if (projectsData[projectId]) {
      renderProjectDetail(projectId);
      activateSection('project-detail');
    } else {
      // Project not found, go back to projects list
      window.location.hash = 'projects';
    }
  } else {
    // Standard section route
    if (document.getElementById(hash)) {
      activateSection(hash);
    } else {
      // Default to hero if unknown
      if (hash !== 'hero') window.location.hash = 'hero';
      activateSection('hero');
    }
  }
}

function activateSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
}

// Renderers
function renderProjects() {
  const container = document.getElementById('projects-list');
  if (!container) return;

  container.innerHTML = Object.entries(projectsData).map(([id, project]) => `
        <div class="card">
            <a href="#projects/${id}" style="text-decoration: none; color: inherit;">
                <h3 style="margin-bottom: 0.5rem; cursor: pointer;">${project.title}</h3>
            </a>
            <p class="tag" style="font-size: 0.85rem; color: var(--accent-color); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 500;">
                ${project.tags[0]}
            </p>
            <p style="margin-bottom: 1.5rem;">${project.summary}</p>
            <div style="text-align: right;">
                <button class="btn" onclick="window.location.hash = 'projects/${id}'">View Project</button>
            </div>
        </div>
    `).join('');
}

function renderProjectDetail(id) {
  const project = projectsData[id];
  const container = document.querySelector('#project-detail .container');
  if (!container) return;

  container.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <button class="btn" onclick="window.location.hash='projects'">← Back to Projects</button>
        </div>
        
        <header style="text-align: center; margin-bottom: 3rem;">
            <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">${project.title}</h1>
            <p style="font-size: 1.2rem; color: var(--accent-color); margin-bottom: 1.5rem;">${project.tags[0]}</p>
            ${project.link ? `<a href="${project.link}" target="_blank" class="btn" style="text-decoration: none; display: inline-block;">Open Project ↗</a>` : ''}
        </header>

        <div class="detail-grid" style="display: grid; gap: 2rem; max-width: 900px; margin: 0 auto;">
            <div class="card">
                <h3>Project Overview</h3>
                <p>${project.overview}</p>
            </div>

            <div class="card">
                <h3>Problem Statement</h3>
                <p>${project.problem}</p>
            </div>

            <div class="card">
                <h3>Technical Approach</h3>
                <p>${project.approach}</p>
            </div>

             <div class="card">
                <h3>Technologies Used</h3>
                <p>${project.technologies}</p>
            </div>

            <div class="card">
                <h3>Outcome and Learnings</h3>
                <p>${project.outcome}</p>
            </div>

            ${project.liveUrl ? `
            <div class="card" style="text-align: center; border: 1px solid var(--accent-color);">
                <h3 style="color: var(--accent-color); margin-bottom: 0.5rem;">Live Project</h3>
                <p style="margin-bottom: 1.5rem;">Check out the live deployment of this project.</p>
                <a href="${project.liveUrl}" target="_blank" class="btn btn-primary">View Live App 🚀</a>
            </div>
            ` : ''}
        </div>
    `;
}

// Initialization
window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', () => {
  // Render the list immediately
  renderProjects();

  // Handle initial URL
  handleRoute();

  // Initialize scroll reveal animations
  initScrollReveal();
});

// Expose legacy navigateTo for backward compatibility if buttons still use it
window.navigateTo = function (id) {
  window.location.hash = id;
}

// Scroll Reveal Animation
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.card, .hero-text, .hero-image-wrapper');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    revealObserver.observe(el);
  });
}
