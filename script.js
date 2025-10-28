// Data Prestasi dengan gambar, ranking, dan tags
const prestasiData = [
    {
        title: "1st Poster Competitions (x6)",
        description: "6 Awards Of 1st Poster Competitions Events",
        date: "2024-2025",
        image: "Assets/Achievements/FirstPlacePoster.png",
        ranking: 1,
        tags: ["Canva", "Poster", "Nasional"]
    },
      {
        title: "2nd Poster Competitions (x3)",
        description: "3 Awards Of 2nd Poster Competitions Events",
        date: "2024-2025",
        image: "Assets/Achievements/SecondPlacePoster.png",
        ranking: 2,
        tags: ["Canva", "Poster", "Nasional"]
    },
    {
        title: "3rd Poster Competitions (x2)",
        description: "2 Awards Of 3rd Poster Competitions Events",
        date: "2024-2025",
        image: "Assets/Achievements/ThirdPlacePoster.png",
        ranking: 3,
        tags: ["Canva", "Poster", "Nasional"]
    },
    {
        title: "LKS IT Software Solution Of Business",
        description: "3rd Place Awards Of LKS IT Software Solution Of Business Competitions",
        date: "2024",
        image: "Assets/Achievements/LKS.png",
        ranking: 3,
        tags: ["C#", "SQLServer",]
    },
     {
        title: "LKP Scout Events",
        description: "2nd Place Awards Of LKP Scout Events",
        date: "2025",
        image: "Assets/Achievements/LKP.png",
        ranking: 2,
        tags: ["Scout",]
    },
     {
        title: "Turkish Universities Fair",
        description: "1St Place Awards Of Turkish Universities Fair Poster Competitions",
        date: "2025",
        image: "Assets/Achievements/TUF.png",
        ranking: 1,
        tags: ["Poster",]
    },
    // Tambahkan data prestasi lainnya jika ada
];

// Data Project dengan tags
const projectData = [
    {
        title: "PERKASA",
        description: "Camping Commission Project From West Jakarta Police.",
        image: "Assets/Projects/PERKASA.png",
        link: "https://github.com/mashudi/ecommerce",   
        tags: ["Canva", "Design"]
    },
    {
        title: "BUMI MAJAPAHIT",
        description: "Banner Design Commission Project From BUMI MAJAPAHIT.",
        image: "Assets/Projects/MAJAPAHIT.png",
        link: "https://github.com/mashudi/ecommerce",   
        tags: ["Canva", "Design"]
    },
    // Tambahkan data project lainnya jika ada
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');
const modalTags = document.getElementById('modal-tags');
const contactForm = document.querySelector('.kontak-form');
const typingText = document.getElementById('typing-text');

// Typing Animation with Loop
function typeWriter() {
    const text = "Mashudi";
    let index = 0;
    let isDeleting = false;
    
    function type() {
        if (!isDeleting) {
            // Typing
            if (index < text.length) {
                typingText.textContent += text.charAt(index);
                index++;
                setTimeout(type, 150);
            } else {
                // Finished typing, wait before deleting
                setTimeout(() => {
                    isDeleting = true;
                    type();
                }, 2000);
            }
        } else {
            // Deleting
            if (index > 0) {
                typingText.textContent = text.substring(0, index - 1);
                index--;
                setTimeout(type, 100);
            } else {
                // Finished deleting, start typing again
                isDeleting = false;
                setTimeout(type, 500);
            }
        }
    }
    
    type();
}

// Create falling stars
function createStars() {
    const starsContainer = document.getElementById('stars-container');
    const starsCount = 100;
    
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random size
        const size = Math.random() * 1 + 0.5;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        
        // Random animation duration
        const duration = Math.random() * 3 + 10;
        star.style.animationDuration = `${duration}s`;
        
        // Random animation delay
        const delay = Math.random() * 2;
        star.style.animationDelay = `${delay}s`;
        
        starsContainer.appendChild(star);
    }
}

// Counter Animation for Statistics
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 50;
    
    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('data-target');
            const data = +counter.innerText;
            const time = value / speed;
            
            if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
            } else {
                counter.innerText = value;
            }
        }
        
        // Check if element is in viewport
        const isInViewport = () => {
            const rect = counter.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        // Start animation when element is in viewport
        const startAnimation = () => {
            if (isInViewport() && counter.innerText === '0') {
                animate();
            }
        }
        
        // Check on scroll
        window.addEventListener('scroll', startAnimation);
        
        // Initial check
        startAnimation();
    });
}

// Event Listeners
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Update active link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would normally send the data to a server
    // For now, we'll just show an alert
    alert(`Terima kasih, ${name}! Pesan Anda telah terkirim.`);
    
    // Reset form
    contactForm.reset();
});

// Load prestasi cards
function loadPrestasi() {
    const prestasiGrid = document.getElementById('prestasi-grid');
    
    prestasiData.forEach((prestasi, index) => {
        const card = document.createElement('div');
        card.className = 'prestasi-card';
        
        // Create ranking badge
        let rankingBadge = '';
        if (prestasi.ranking) {
            rankingBadge = `<div class="ranking-badge ranking-${prestasi.ranking}">${prestasi.ranking}</div>`;
        }
        
        // Create tags HTML
        let tagsHTML = '';
        if (prestasi.tags && prestasi.tags.length > 0) {
            tagsHTML = '<div class="bubble-tags">';
            prestasi.tags.forEach(tag => {
                tagsHTML += `<span class="bubble-tag">${tag}</span>`;
            });
            tagsHTML += '</div>';
        }
        
        card.innerHTML = `
            ${rankingBadge}
            <img src="${prestasi.image}" alt="${prestasi.title}">
            <div class="prestasi-card-content">
                <h3>${prestasi.title}</h3>
                <p>${prestasi.description}</p>
                <div class="date">${prestasi.date}</div>
                ${tagsHTML}
            </div>
        `;
        
        // Add animation delay
        card.style.transitionDelay = `${index * 0.1}s`;
        
        prestasiGrid.appendChild(card);
    });
}

// Load project cards
function loadProjects() {
    const projectGrid = document.getElementById('project-grid');
    
    projectData.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Create tags HTML
        let tagsHTML = '';
        if (project.tags && project.tags.length > 0) {
            tagsHTML = '<div class="bubble-tags">';
            project.tags.forEach(tag => {
                tagsHTML += `<span class="bubble-tag">${tag}</span>`;
            });
            tagsHTML += '</div>';
        }
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-card-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                ${tagsHTML}
            </div>
        `;
        
        // Add animation delay
        card.style.transitionDelay = `${index * 0.1}s`;
        
        // Add click event to open modal
        card.addEventListener('click', () => {
            modalTitle.textContent = project.title;
            modalImage.src = project.image;
            modalDescription.textContent = project.description;
            modalLink.href = project.link;
            
            // Update modal with tags
            let modalTagsHTML = '';
            if (project.tags && project.tags.length > 0) {
                modalTagsHTML = '<div class="bubble-tags">';
                project.tags.forEach(tag => {
                    modalTagsHTML += `<span class="bubble-tag">${tag}</span>`;
                });
                modalTagsHTML += '</div>';
            }
            
            // Find or create modal tags container
            let modalTagsContainer = document.querySelector('.modal-body .bubble-tags');
            if (modalTagsContainer) {
                modalTagsContainer.remove();
            }
            
            if (modalTagsHTML) {
                const modalBody = document.querySelector('.modal-body');
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = modalTagsHTML;
                modalBody.appendChild(tempDiv.firstElementChild);
            }
            
            modal.style.display = 'block';
        });
        
        projectGrid.appendChild(card);
    });
}

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.timeline-item, .prestasi-card, .project-card, .specialist-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('show');
        }
    });
}

// Navbar scroll effect
function navbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.9)';
        navbar.style.boxShadow = 'none';
    }
}

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    loadPrestasi();
    loadProjects();
    animateOnScroll();
    updateActiveNavLink();
    typeWriter(); // Start typing animation
    animateCounters(); // Start counter animation
});

window.addEventListener('scroll', () => {
    animateOnScroll();
    navbarScrollEffect();
    updateActiveNavLink();
});