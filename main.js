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
    liveUrl: "https://aibookanalyzer-q48y7sj3pyvgcbpc8ug28j.streamlit.app/",
    details: [
     Description:
"AI Book Analyzer is an AI-powered application designed to help users understand and interact with large PDF books and documents efficiently. The system processes uploaded PDF files, extracts their textual content, and uses Natural Language Processing and AI techniques to generate concise summaries, answer user questions, and create frequently asked questions from the document. Instead of manually searching through lengthy books, users can ask questions related to the uploaded content and receive relevant responses. The project demonstrates practical applications of document processing, NLP, information retrieval, and generative AI."
"Key Features: PDF upload and text extraction, automatic summarization, document-based question answering, FAQ generation, and interactive Q&A."
    ]
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
    liveUrl: "https://mental-health-app-6zjf.onrender.com",
    details: [
      "Description:The Mental Health Support Application is an AI-assisted platform designed to provide basic stress assessment and personalized well-being guidance. The application collects user responses through questionnaires or assessments and analyzes them to estimate stress or well-being levels. Based on the assessment, the system provides personalized recommendations such as relaxation activities, lifestyle suggestions, or general wellness guidance. The project demonstrates how AI and data-driven techniques can be integrated into a user-friendly application to provide personalized support, while functioning as a supportive tool rather than a clinical diagnostic system."

"Key Features: Stress assessment, user-response analysis, personalized recommendations, wellness guidance, and an interactive interface."
    ]
  },
  
  "supply-chain-management": {
    title: "Supply Chain Management System (Team Project)",
    summary: "Database-driven system for managing inventory, suppliers, and logistics using relational database design.",
    tags: ["Database Systems"],
    overview: "A comprehensive database-driven system designed to streamline the management of inventory, suppliers, and logistics.",
    problem: "Inefficient manual tracking of inventory and supplier data leading to errors and delays in the supply chain.",
    approach: "Designed a normalized relational database schema to efficiently track products, orders, and suppliers. Implemented SQL queries for complex reporting and data integrity checks.",
    technologies: "SQL, Relational Database Management Systems (RDBMS), Database Design",
    outcome: "Streamlined inventory tracking, reduced data redundancy, and improved data integrity for logistics management.",
    details: [
      "Description:The Supply Chain Management System is a database-driven application developed to manage important supply-chain operations such as inventory, suppliers, products, orders, and logistics. The system uses a relational database structure to store and organize data efficiently and establishes relationships between different entities using primary and foreign keys. It supports operations such as adding and updating product information, maintaining supplier details, tracking inventory levels, and managing order-related information. The project demonstrates practical knowledge of relational database design, SQL queries, CRUD operations, normalization, and data management."

"Key Features: Inventory management, supplier management, product and order tracking, relational database design, CRUD operations, and SQL-based data retrieval."
    ]
  },
  "smart-trolley": {
    title: "Smart Trolley with Automated Billing System (Team Project)",
    summary: "IoT-enabled shopping trolley with RFID and load-cell-based automatic billing.",
    tags: ["IoT"],
    overview: "An IoT-enabled shopping trolley that uses RFID and load-cell technology for automatic billing.",
    problem: "Long checkout queues in retail stores allow for inefficiency and cause customer dissatisfaction.",
    approach: "Integrated RFID readers to identify items placed in the trolley and load cells to verify weight/presence, calculating the total bill in real-time and enabling checkout without tradition[...]",
    technologies: "IoT, RFID, Embedded Systems, Sensors, Microcontrollers",
    outcome: "Drastically reduced checkout times and improved the overall shopping experience for customers.",
    videoUrl: "https://youtu.be/Icqv7mvNjfM?si=loC25Axf_mJ_tI6b",
    details: [
      "The Smart Trolley with Automated Billing System is an IoT-based shopping solution designed to automate product identification and billing inside retail stores. Products are identified using RFID technology, while a load cell measures the weight of items placed inside the trolley and can be used to validate product addition. A microcontroller processes RFID and sensor information, maintains the shopping cart, and calculates the total bill. The system can also integrate components such as an LCD for displaying product and billing information, a thermal printer for generating bills, GSM for communication, and Wi-Fi connectivity for transferring information to an application or server. The project aims to reduce manual billing effort and improve the shopping experience."

"Key Features: RFID-based product identification, load-cell weight verification, automatic bill calculation, cart management, display interface, and IoT connectivity."
    ]
  },
  "plant-growth-classification": {
    title: "Plant Growth Classification Using Machine Learning (Team Project)",
    summary: "Image-based plant growth stage classification using machine learning.",
    tags: ["Machine Learning"],
    overview: "An image-based system using machine learning to classify the growth stages of plants.",
    problem: "Need for scalable, automated monitoring of crop health and growth stages in precision agriculture.",
    approach: "Collected and labeled an image dataset of plants at various stages; trained a Convolutional Neural Network (CNN) to classify images into specific growth stages.",
    technologies: "Deep Learning, Computer Vision, Python, TensorFlow/PyTorch",
    outcome: "Enabled automated, non-invasive monitoring for agricultural optimization and yield prediction.",
    details: [
      "Description:The Plant Growth Classification project uses machine learning and image-processing techniques to identify the growth stage of a plant from images. Plant images are collected and preprocessed to create suitable inputs for the classification model. Relevant visual characteristics are then learned or extracted to distinguish between different stages of plant development. A machine learning model is trained using labeled images and evaluated using appropriate classification metrics. The project demonstrates the application of machine learning and computer vision in agriculture, where automated plant monitoring can help track plant development and support data-driven agricultural decisions."

"Key Features: Image preprocessing, plant growth-stage classification, ML model training, model evaluation, and agricultural monitoring."
    ]
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

        ${project.videoUrl ? `
          <div class="card" style="max-width:900px;margin:0 auto 2rem;">
            <h3 style="margin-bottom:0.5rem;">Demo Video</h3>
            <div class="video-wrapper" style="margin-top:1rem;">
              ${project.videoUrl.includes('youtube') || project.videoUrl.includes('youtu.be') ? `
                <div style="position:relative;padding-top:56.25%;">
                  <iframe src="${project.videoUrl.includes('watch?v=') ? project.videoUrl.replace('watch?v=','embed/') : project.videoUrl.replace('youtu.be/','youtube.com/embed/') }"
                          style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen></iframe>
                </div>
              ` : `
                <video controls style="width:100%;max-height:500px;">
                  <source src="${project.videoUrl}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              `}
            </div>
          </div>
        ` : ''}

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

            ${project.details && project.details.length ? `
            <div class="card">
                <h3>Detailed Highlights</h3>
                <ul style="margin-top:0.5rem; padding-left:1.25rem;">
                  ${project.details.map(point => `<li style="margin-bottom:0.5rem;">${point}</li>`).join('')}
                </ul>
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
