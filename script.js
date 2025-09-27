// Scroll Progress Bar Logic
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  const progressBar = document.getElementById("scroll-indicator");
  progressBar.style.height = `${scrollPercent}%`;
});

// Loading animation
const letters = document.querySelectorAll(".loading-text span");

// Animate each letter with stagger
gsap.to(letters, {
  opacity: 1,
  duration: 1.2,
  stagger: 0.15,
  onUpdate: function () {
    letters.forEach((el, i) => {
      gsap.to(el, {
        color: "#ffffff",
        duration: 0.2,
        delay: i * 0.15,
      });
      gsap.to(el, {
        color: "rgba(255,255,255,0.1)",
        duration: 0.2,
        delay: i * 0.15 + 0.4,
      });
      gsap.to(el.querySelector("::after"), {
        opacity: 1,
        duration: 0.2,
        delay: i * 0.15,
      });
    });
  },
  onComplete: () => {
    gsap.to("#loading", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      onComplete: () => {
        document.getElementById("loading").style.display = "none";
      },
    });
  },
});


// Animation for Hero Text
gsap.from(".hero-left", {
  opacity: 0,
  x: -50,
  duration: 1.2,
  ease: "power3.out",
});

gsap.from(".hero-right", {
  opacity: 0,
  x: 50,
  duration: 1.2,
  ease: "power3.out",
  delay: 0.3,
});

gsap.utils.toArray(".journey-card").forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    y: 80,
    duration: .4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    delay: index * 0.1,
  });
});

// HERO SECTION PARTICLES
particlesJS("particles-hero", {
  "particles": {
    "number": {
      "value": 200,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#ffffff" },
    "opacity": { "value": 0.7, "random": false },
    "size": { "value": 4, "random": true },
    "line_linked": { "enable": false },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "bottom",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": false },
      "onclick": { "enable": false }
    }
  },
  "retina_detect": true
});



particlesJS("particles-projects", {
  "particles": {
    "number": { "value": 50 },
    "color": { "value": "ffffff" },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.5,
      "random": true
    },
    "size": {
      "value": 4,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": { "opacity": 1 }
      },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});


gsap.registerPlugin(ScrollTrigger);
  
gsap.utils.toArray('.fade-in').forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out",
  });
});

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".project-card",
    start: "top 85%",
    toggleActions: "play none none reset"
  },
  opacity: 0,
  y: 60,
  duration: 1,
  ease: "power3.out"
});
  
  gsap.from("#about-img", {
    scrollTrigger: {
      trigger: "#about-img",
      start: "top 80%",
      toggleActions: "play none none reset",
    },
    opacity: 0,
    x: -100,
    duration: .4,
    ease: "power3.out"
  });
  

  gsap.from("#about-text", {
    scrollTrigger: {
      trigger: "#about-text",
      start: "top 80%",
      toggleActions: "play none none reset",
    },
    opacity: 0,
    y: 50,
    duration: .4,
    ease: "power3.out",
    delay: 0.2
  });
  
  gsap.from("#techstack h2", {
    scrollTrigger: {
      trigger: "#techstack",
      start: "top 80%",
      toggleActions: "play none none reset"
    },
    opacity: 0,
    y: -40,
    duration: 1.2,
    ease: "power3.out"
  });
  
  gsap.utils.toArray("#techstack .group").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reset"
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      delay: i * 0.1,
    });
  });

  gsap.utils.toArray('.tech-category').forEach((section, index) => {
    gsap.from(section, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  gsap.utils.toArray('.reveal-section').forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 60,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reset"
      }
    });
  });

  // Up coming projects

  gsap.utils.toArray(".upcoming-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: "#upcoming-projects",
        start: "top 85%",
        toggleActions: "play none none reset"
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      delay: i * 0.15,
    });
  });

  // Animated Download Button Functionality
  document.addEventListener('DOMContentLoaded', function() {
    const downloadInput = document.querySelector('.download-label .download-input');
    const downloadLink = document.querySelector('a[download]');
    
    if (downloadInput && downloadLink) {
      downloadInput.addEventListener('change', function() {
        if (this.checked) {
          // Trigger the download after animation starts
          setTimeout(() => {
            // Create a temporary link to trigger download
            const tempLink = document.createElement('a');
            tempLink.href = downloadLink.href;
            tempLink.download = downloadLink.download || 'resume.pdf';
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
            
            // Reset the checkbox after animation completes
            setTimeout(() => {
              this.checked = false;
            }, 4000); // Reset after animation completes
          }, 500); // Small delay to let animation start
        }
      });
    }
  });
  
// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const submitText = document.getElementById('submitText');
  const submitLoading = document.getElementById('submitLoading');
  const formMessage = document.getElementById('formMessage');
  const messageText = document.getElementById('messageText');
  const messageInput = document.getElementById('message');

  // Gibberish detection functions
  function detectGibberish(text) {
    const errors = [];
    
    // Remove extra whitespace and normalize
    const cleanText = text.trim().replace(/\s+/g, ' ');
    

    
    // 1. Check minimum length
    if (cleanText.length < 10) {
      errors.push('Message must be at least 10 characters long');
    }
    
    // 2. Check minimum word count
    const words = cleanText.split(' ').filter(word => word.length > 0);
    if (words.length < 3) {
      errors.push('Message must contain at least 3 words');
    }
    
    // 3. Check for excessive character repetition (e.g., "aaaaaa", "!!!!!!")
    const charRepetition = /(.)\1{4,}/g;
    if (charRepetition.test(cleanText)) {
      errors.push('Message contains too many repeated characters');
    }
    
    // 4. Check for excessive word repetition
    const wordCounts = {};
    words.forEach(word => {
      const cleanWord = word.toLowerCase().replace(/[^\w]/g, '');
      if (cleanWord.length > 2) {
        wordCounts[cleanWord] = (wordCounts[cleanWord] || 0) + 1;
      }
    });
    
    const repeatedWords = Object.entries(wordCounts).filter(([word, count]) => count > 2);
    if (repeatedWords.length > 0) {
      errors.push('Message contains too many repeated words');
    }
    
    // 5. Check for random character sequences (e.g., "asdfgh", "qwerty")
    const randomPatterns = [
      /asdfgh/i, /qwerty/i, /zxcvbn/i, /123456/i, /abcdef/i,
      /[!@#$%^&*]{3,}/
    ];
    
    for (const pattern of randomPatterns) {
      if (pattern.test(cleanText)) {
        errors.push('Message contains random character sequences');
        break;
      }
    }
    
    // 5.5. Check for consecutive numbers (but allow normal text)
    const consecutiveNumbers = /[0-9]{4,}/;
    if (consecutiveNumbers.test(cleanText)) {
      errors.push('Message contains random number sequences');
    }
    
    // 6. Check for meaningful content (at least some words with 3+ characters)
    const meaningfulWords = words.filter(word => word.length >= 3);
    if (meaningfulWords.length < 2) {
      errors.push('Message must contain meaningful words (3+ characters)');
    }
    
    // 7. Check for excessive punctuation
    const punctuationCount = (cleanText.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []).length;
    if (punctuationCount > cleanText.length * 0.3) {
      errors.push('Message contains too much punctuation');
    }
    
    // 8. Check for all caps (shouting)
    const upperCaseWords = words.filter(word => word === word.toUpperCase() && word.length > 2);
    if (upperCaseWords.length > words.length * 0.5) {
      errors.push('Please avoid typing in all capital letters');
    }
    
    return {
      isValid: errors.length === 0,
      errors: errors
    };
  }

  // Real-time validation
  if (messageInput) {
    let validationTimeout;
    
    messageInput.addEventListener('input', function() {
      clearTimeout(validationTimeout);
      
      validationTimeout = setTimeout(() => {
        const validation = detectGibberish(this.value);
        const messageContainer = this.parentElement;
        
        // Remove existing validation messages
        const existingError = messageContainer.querySelector('.validation-error');
        if (existingError) {
          existingError.remove();
        }
        
        // Remove existing validation classes
        this.classList.remove('border-red-500', 'border-green-500');
        
        if (this.value.trim() === '') {
          return; // Don't show validation for empty field
        }
        
        if (!validation.isValid) {
          this.classList.add('border-red-500');
          const errorDiv = document.createElement('div');
          errorDiv.className = 'validation-error text-red-500 text-sm mt-1';
          errorDiv.innerHTML = validation.errors.join('<br>');
          messageContainer.appendChild(errorDiv);
          
          // Auto-remove error message after 4 seconds
          setTimeout(() => {
            if (errorDiv.parentNode) {
              errorDiv.remove();
            }
          }, 2500);
        } else {
          this.classList.add('border-green-500');
          const successDiv = document.createElement('div');
          successDiv.className = 'validation-success text-green-500 text-sm mt-1';
          successDiv.textContent = 'Message looks good!';
          messageContainer.appendChild(successDiv);
          
          // Auto-remove success message after 3 seconds
          setTimeout(() => {
            if (successDiv.parentNode) {
              successDiv.remove();
            }
          }, 1500);
        }
      }, 500); // Debounce validation
    });
    
    // Clear validation on focus
    messageInput.addEventListener('focus', function() {
      const existingError = this.parentElement.querySelector('.validation-error');
      const existingSuccess = this.parentElement.querySelector('.validation-success');
      if (existingError) existingError.remove();
      if (existingSuccess) existingSuccess.remove();
      this.classList.remove('border-red-500', 'border-green-500');
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Show loading state
      submitBtn.disabled = true;
      submitText.classList.add('hidden');
      submitLoading.classList.remove('hidden');
      
      // Get form data
      const formData = new FormData(contactForm);
      
      // Validate message before submission
      const message = formData.get('message');
      const validation = detectGibberish(message);
      
      if (!validation.isValid) {
        showMessage(`Please fix the following issues:<br>${validation.errors.join('<br>')}`, 'error');
        // Reset button state
        submitBtn.disabled = false;
        submitText.classList.remove('hidden');
        submitLoading.classList.add('hidden');
        return;
      }
      const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };

      try {
        // Option 1: Using Formspree (you need to create your own endpoint)
        // Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree endpoint
        const response = await fetch('https://formspree.io/f/mjkrlgar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          showMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');
          contactForm.reset();
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        console.error('Error:', error);
        
        // Fallback: Send email directly (this will open user's email client)
        const emailSubject = encodeURIComponent(`Portfolio Contact: ${data.subject}`);
        const emailBody = encodeURIComponent(`
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
        `);
        
        const mailtoLink = `mailto:abhijeetbhale7@gmail.com?subject=${emailSubject}&body=${emailBody}`;
        
        showMessage(`Form submission failed. <a href="${mailtoLink}" class="underline">Click here to send email directly</a> or try again later.`, 'error');
      } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitText.classList.remove('hidden');
        submitLoading.classList.add('hidden');
      }
    });
  }

  function showMessage(text, type) {
    messageText.innerHTML = text;
    formMessage.className = `mt-4 p-4 rounded-lg ${type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`;
    formMessage.classList.remove('hidden');
    
    // Auto-hide message after 8 seconds
    setTimeout(() => {
      formMessage.classList.add('hidden');
    }, 8000);
  }
});
  
// Performance Optimizations - Lazy Loading
document.addEventListener('DOMContentLoaded', function() {
  // Lazy loading for images
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });

  // Preload critical images
  const criticalImages = [
    './assets/AbhijeetBhalePortfolio.jpg',
    './assets/cursor.png'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });

  // Optimize scroll performance
  let ticking = false;
  
  function updateScrollIndicator() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const progressBar = document.getElementById("scroll-indicator");
    if (progressBar) {
      progressBar.style.height = `${scrollPercent}%`;
    }
    
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollIndicator);
      ticking = true;
    }
  });

  // Service Worker registration for PWA features
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
});
  
// GitHub API Integration
document.addEventListener('DOMContentLoaded', function() {
  const username = 'abhijeetBhale';
  
  // GitHub API endpoints
  const endpoints = {
    user: `https://api.github.com/users/${username}`,
    repos: `https://api.github.com/users/${username}/repos`,
    activity: `https://api.github.com/users/${username}/events`
  };

  // Fetch GitHub user data
  async function fetchGitHubData() {
    try {
      const [userResponse, reposResponse] = await Promise.all([
        fetch(endpoints.user),
        fetch(endpoints.repos)
      ]);

      if (userResponse.ok && reposResponse.ok) {
        const userData = await userResponse.json();
        const reposData = await reposResponse.json();

        // Update stats
        document.getElementById('githubRepos').textContent = userData.public_repos;
        document.getElementById('githubFollowers').textContent = userData.followers;
        
        // Calculate total stars
        const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        document.getElementById('githubStars').textContent = totalStars;

        // Calculate recent commits (last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        
        const commitsResponse = await fetch(`https://api.github.com/search/commits?q=author:${username}+committer-date:>${thirtyDaysAgo.toISOString().split('T')[0]}`);
        if (commitsResponse.ok) {
          const commitsData = await commitsResponse.json();
          document.getElementById('githubCommits').textContent = commitsData.total_count;
        }

        // Load activity feed
        loadGitHubActivity();
        
        // Load language stats
        loadGitHubLanguages(reposData);
      }
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
      // Show fallback data
      document.getElementById('githubRepos').textContent = '15+';
      document.getElementById('githubStars').textContent = '25+';
      document.getElementById('githubFollowers').textContent = '10+';
      document.getElementById('githubCommits').textContent = '50+';
    }
  }

  // Load GitHub activity
  async function loadGitHubActivity() {
    try {
      const response = await fetch(endpoints.activity);
      if (response.ok) {
        const activityData = await response.json();
        const activityContainer = document.getElementById('githubActivity');
        
        // Clear loading state
        activityContainer.innerHTML = '';
        
        // Show recent activity (last 5 events)
        const recentActivity = activityData.slice(0, 5);
        
        recentActivity.forEach(event => {
          const activityItem = createActivityItem(event);
          activityContainer.appendChild(activityItem);
        });
      }
    } catch (error) {
      console.error('Error loading GitHub activity:', error);
    }
  }

  // Create activity item element
  function createActivityItem(event) {
    const item = document.createElement('div');
    item.className = 'flex items-center space-x-4 p-4 bg-[#0a0a0a] rounded-lg border border-gray-800';
    
    const eventType = event.type;
    const repoName = event.repo?.name || 'Unknown Repository';
    const createdAt = new Date(event.created_at).toLocaleDateString();
    
    let icon, text;
    
    switch(eventType) {
      case 'PushEvent':
        icon = 'fas fa-code';
        text = `Pushed to ${repoName}`;
        break;
      case 'CreateEvent':
        icon = 'fas fa-plus';
        text = `Created ${repoName}`;
        break;
      case 'ForkEvent':
        icon = 'fas fa-code-branch';
        text = `Forked ${repoName}`;
        break;
      case 'WatchEvent':
        icon = 'fas fa-star';
        text = `Starred ${repoName}`;
        break;
      default:
        icon = 'fas fa-circle';
        text = `Activity in ${repoName}`;
    }
    
    item.innerHTML = `
      <div class="w-10 h-10 bg-[#1DCD9F] rounded-full flex items-center justify-center">
        <i class="${icon} text-white"></i>
      </div>
      <div class="flex-1">
        <p class="text-white font-medium">${text}</p>
        <p class="text-gray-400 text-sm">${createdAt}</p>
      </div>
      <a href="https://github.com/${repoName}" target="_blank" class="text-[#1DCD9F] hover:text-[#17b890]">
        <i class="fas fa-external-link-alt"></i>
      </a>
    `;
    
    return item;
  }

  // Load GitHub languages
  function loadGitHubLanguages(reposData) {
    const languageStats = {};
    
    reposData.forEach(repo => {
      if (repo.language) {
        languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
      }
    });
    
    // Sort languages by frequency
    const sortedLanguages = Object.entries(languageStats)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 6);
    
    const languagesContainer = document.getElementById('githubLanguages');
    languagesContainer.innerHTML = '';
    
    sortedLanguages.forEach(([language, count]) => {
      const languageCard = document.createElement('div');
      languageCard.className = 'bg-[#111] p-4 rounded-xl border border-gray-800 text-center hover:border-[#1DCD9F] transition-all duration-300';
      
      languageCard.innerHTML = `
        <div class="text-2xl font-bold text-[#1DCD9F] mb-2">${language}</div>
        <div class="text-gray-400 text-sm">${count} repositories</div>
      `;
      
      languagesContainer.appendChild(languageCard);
    });
  }

  // Initialize GitHub data loading
  fetchGitHubData();
});
  
// Back to Top Button Functionality
const backToTopButton = document.getElementById('backToTop');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const scrollBar = document.getElementById('scroll-bar');
  if (scrollBar) {
    scrollBar.addEventListener('click', function(e) {
      const rect = scrollBar.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const percent = clickY / rect.height;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const targetScroll = percent * docHeight;
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    });
  }
});
  
