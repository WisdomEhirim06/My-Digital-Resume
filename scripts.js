
        // Tech Stack Icons Animation
        const techStack = [
            { name: 'Django', icon: 'devicon-django-plain' },
            { name: 'Flask', icon: 'devicon-flask-original' },
            { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
            { name: 'Firebase', icon: 'devicon-firebase-plain' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain' },
            { name: 'C++', icon: 'devicon-cplusplus-plain' },
            { name: 'Java', icon: 'devicon-java-plain' },
            { name: 'Git', icon: 'devicon-git-plain' },
            { name: 'GitHub', icon: 'devicon-github-original' }
        ];

        function createFloatingIcons() {
            const container = document.getElementById('tech-stack');
            techStack.forEach((tech, index) => {
                const icon = document.createElement('div');
                icon.className = `floating-icon absolute`;
                icon.style.animation = `float ${3 + Math.random() * 2}s ease-in-out infinite`;
                icon.style.animationDelay = `${Math.random() * 2}s`;
                icon.style.left = `${Math.random() * 80}%`;
                icon.style.top = `${Math.random() * 80}%`;
                icon.innerHTML = `
                    <div class="text-center">
                        <i class="${tech.icon} text-4xl text-blue-400"></i>
                        <div class="text-sm mt-2 text-gray-300">${tech.name}</div>
                    </div>
                `;
                container.appendChild(icon);
            });
        }

        // Project Timeline Data Structure with Google X,Y,Z format
        const projects = [
            {
                name: "ScholarHive",
                impact: "Enabled students to apply for scholarships seamlessly, while providers could manage applications efficiently. Improved accessibility to scholarship opportunities.",
                execution: "Designed and implemented a secure backend system using Django and PostgreSQL. Built custom authentication and role-based access control.",
                role: "Led backend development, handling authentication, authorization, scholarship management logic, and database architecture.",
                technologies: ["Django", "DRF", "PostgreSQL", "React"],
                github: "https://github.com/WisdomEhirim06/ScholarHive",
                demo: "https://scholarhive.onrender.com/"
            },
            {
                name: "Ideator",
                impact: "Helped users brainstorm creative ideas efficiently with AI-driven suggestions.",
                execution: "Built a Flask-based API with a lightweight front-end to deliver randomized, user-tailored prompts.",
                role: "Full-stack developer responsible for API design and front-end integration.",
                technologies: ["Flask", "OpenAI API", "Tailwind CSS"],
                github: "https://github.com/username/ideator",
                demo: "https://ideator-sable.vercel.app/"
            },
            {
                name: "Auth System",
                impact: "Improved security and user authentication experience with multi-factor authentication.",
                execution: "Developed a JWT-based authentication system with OAuth integration.",
                role: "Backend developer handling authentication logic and security enhancements.",
                technologies: ["Node.js", "Express", "MongoDB", "JWT"],
                github: "https://github.com/WisdomEhirim06",
                demo: "https://github.com/WisdomEhirim06"
            }
        ];

        const projectsContainer = document.getElementById("projectsContainer");

        projects.forEach(project => {
            const projectHTML = `
                <div class="bg-slate-700 rounded-lg p-6 hover:transform hover:scale-[1.02] transition duration-300">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <h3 class="text-2xl font-bold text-blue-400">${project.name}</h3>
                        <div class="flex space-x-4 mt-4 md:mt-0">
                            <a href="${project.github}" class="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition">
                                <i class="devicon-github-original"></i>
                                <span>Repository</span>
                            </a>
                            <a href="${project.demo}" class="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition">
                            <i class="devicon-github-original"></i>
                            <span>Live URL</span>
                        </a>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-slate-800 p-4 rounded-lg">
                            <h4 class="font-semibold text-blue-400 mb-2">Impact</h4>
                            <p class="text-gray-300">${project.impact}</p>
                        </div>
                        <div class="bg-slate-800 p-4 rounded-lg">
                            <h4 class="font-semibold text-blue-400 mb-2">Execution</h4>
                            <p class="text-gray-300">${project.execution}</p>
                        </div>
                        <div class="bg-slate-800 p-4 rounded-lg">
                            <h4 class="font-semibold text-blue-400 mb-2">Role</h4>
                            <p class="text-gray-300">${project.role}</p>
                        </div>
                    </div>
                    <div class="mt-4 flex flex-wrap gap-2">
                        ${project.technologies.map(tech => `<span class="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">${tech}</span>`).join('')}
                    </div>
                </div>
            `;
            projectsContainer.innerHTML += projectHTML;
        });

        // Add this to your existing script section

        // Timeline Journey
        function initTimelineFilters() {
            const filterButtons = document.querySelectorAll('.timeline-filter');
            const timelineItems = document.querySelectorAll('.timeline-item');
            
            // Initialize AOS (Animate on Scroll)
            initAOS();
            
            // Add initial animation classes
            timelineItems.forEach(item => {
                item.classList.add('transform', 'transition-all', 'duration-700');
                const content = item.querySelector('.timeline-content');
                if (content) {
                    content.setAttribute('data-aos', 'fade-up');
                    content.setAttribute('data-aos-duration', '800');
                }
            });
            
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Update active button styles
                    filterButtons.forEach(btn => {
                        btn.classList.remove('bg-blue-500', 'text-white');
                        btn.classList.add('text-gray-300', 'hover:text-white', 'hover:bg-slate-700');
                    });
                    
                    button.classList.remove('text-gray-300', 'hover:text-white', 'hover:bg-slate-700');
                    button.classList.add('bg-blue-500', 'text-white');
                    
                    const filterValue = button.getAttribute('data-filter');
                    
                    // Filter timeline items with animation
                    timelineItems.forEach(item => {
                        // Reset any existing transforms
                        item.style.transform = '';
                        item.style.opacity = '';
                        
                        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                            // Show matching items with animation
                            gsap.to(item, {
                                opacity: 1,
                                height: 'auto',
                                scale: 1,
                                duration: 0.4,
                                ease: "power1.out",
                                onStart: function() {
                                    item.style.display = 'flex';
                                }
                            });
                        } else {
                            // Hide non-matching items with animation
                            gsap.to(item, {
                                opacity: 0,
                                height: 0,
                                scale: 0.95,
                                duration: 0.4,
                                ease: "power1.in",
                                onComplete: function() {
                                    item.style.display = 'none';
                                }
                            });
                        }
                    });
                    
                    // Refresh AOS animations
                    if (typeof AOS !== 'undefined') {
                        setTimeout(() => {
                            AOS.refresh();
                        }, 500);
                    }
                });
            });
            
            // Add scroll trigger animations for timeline items
            if (typeof gsap !== 'undefined' && gsap.ScrollTrigger) {
                timelineItems.forEach((item, index) => {
                    gsap.from(item.querySelector('.timeline-content'), {
                        y: 60,
                        opacity: 0,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: item,
                            start: "top 80%",
                            toggleActions: "play none none none"
                        },
                        delay: index * 0.1
                    });
                    
                    gsap.from(item.querySelector('.timeline-circle'), {
                        scale: 0,
                        duration: 0.5,
                        scrollTrigger: {
                            trigger: item,
                            start: "top 80%",
                            toggleActions: "play none none none"
                        },
                        delay: 0.2 + (index * 0.1)
                    });
                    
                    gsap.from(item.querySelector('.timeline-date'), {
                        x: index % 2 === 0 ? -30 : 30,
                        opacity: 0,
                        duration: 0.5,
                        scrollTrigger: {
                            trigger: item,
                            start: "top 80%",
                            toggleActions: "play none none none"
                        },
                        delay: 0.3 + (index * 0.1)
                    });
                });
            }
        }

        // Initialize AOS (Animate on Scroll) library if not already loaded
        function initAOS() {
            if (typeof AOS === 'undefined') {
                // Load AOS library
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
                document.head.appendChild(link);
                
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
                script.onload = function() {
                    AOS.init({
                        duration: 800,
                        easing: 'ease-in-out',
                        once: true
                    });
                };
                document.body.appendChild(script);
            } else {
                AOS.init({
                    duration: 800,
                    easing: 'ease-in-out',
                    once: true
                });
            }
        }



        const styleElement = document.createElement('style');
        styleElement.textContent = `

        `;
        document.head.appendChild(styleElement);
        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            createFloatingIcons();
            // Add to your existing initialization code
            initTimelineFilters();
        
        
            const navToggle = document.getElementById('navToggle');
            const mobileNavLinks = document.getElementById('mobileNavLinks');
            
            if (navToggle && mobileNavLinks) {
                navToggle.addEventListener('click', function() {
                // Toggle mobile menu visibility
                if (mobileNavLinks.classList.contains('hidden')) {
                    mobileNavLinks.classList.remove('hidden');
                    navToggle.innerHTML = `
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" 
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    `;
                } else {
                    mobileNavLinks.classList.add('hidden');
                    navToggle.innerHTML = `
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" 
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    `;
                }
                });
                
                // Close mobile menu when clicking links
                const mobileLinks = mobileNavLinks.querySelectorAll('a');
                mobileLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        mobileNavLinks.classList.add('hidden');
                        navToggle.innerHTML = `
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" 
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        `;
                    });
                });
            }
            
            // Add scroll observer for timeline items
            const timelineItems = document.querySelectorAll('.timeline-item');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeIn');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            
            timelineItems.forEach(item => {
                observer.observe(item);
            });
        });
