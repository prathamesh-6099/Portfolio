// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
  
  // Initialize Typed.js
  const typed = new Typed('.typed-text', {
    strings: [
      'Full Stack Dev 🚀',
      'AI and Cybersecurity Explorer 🤖',
      'Problem Solver 💡'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
  });
  
  // Initialize Particles.js
  particlesJS('particles-js',{
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#4a00e0'
      
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#4a00e0',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      }
    },
    retina_detect: true
  });
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollTop = 0;
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

// menu icon for mobiles 
  function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
  }
// Close the menu after clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('active');
  });
});

// Contact Form Functionality
(function() {
  emailjs.init("eG9MlvAoD8ej2nG_c"); // Replace with your EmailJS public key
})();

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const submitBtn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const btnLoader = document.getElementById('btnLoader');
  
  // Show loading state
  btnText.style.display = 'none';
  btnLoader.style.display = 'inline';
  submitBtn.disabled = true;
  
  // Get form data
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };
  
  // Send email using EmailJS
  emailjs.send('service_8i8ymrt', 'template_anufn9t', {
    name: formData.name,
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_name: 'Prathamesh Kolhe'
  })
  .then(function(response) {
    // Success
    showNotification('Message sent successfully!', 'success');
    document.getElementById('contactForm').reset();
  })
  .catch(function(error) {
    // Error
    showNotification('Failed to send message. Please try again.', 'error');
  })
  .finally(function() {
    // Reset button state
    btnText.style.display = 'inline';
    btnLoader.style.display = 'none';
    submitBtn.disabled = false;
  });
});

// Notification function
function showNotification(message, type) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 25px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    ${type === 'success' ? 'background: #4CAF50;' : 'background: #f44336;'}
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 5000);
}

// Chatbot Functionality
class Chatbot {
  constructor() {
    this.widget = document.getElementById('chatbotWidget');
    this.header = document.getElementById('chatbotHeader');
    this.body = document.getElementById('chatbotBody');
    this.messages = document.getElementById('chatMessages');
    this.input = document.getElementById('chatInput');
    this.sendBtn = document.getElementById('sendMessage');
    this.toggleBtn = document.getElementById('chatbotToggle');
    this.chatIcon = document.getElementById('chatIcon');
    
    this.isMinimized = false;
    this.isTyping = false;
    
    this.initializeChatbot();
  }
  
  initializeChatbot() {
    // Toggle chatbot
    this.header.addEventListener('click', () => this.toggleChatbot());
    
    // Send message on button click
    this.sendBtn.addEventListener('click', () => this.sendMessage());
    
    // Send message on Enter key
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });
    
    // Auto-focus input when opened
    this.header.addEventListener('click', () => {
      setTimeout(() => this.input.focus(), 300);
    });
  }
  
  toggleChatbot() {
    this.isMinimized = !this.isMinimized;
    this.widget.classList.toggle('expanded', !this.isMinimized);
    
    if (this.isMinimized) {
      this.chatIcon.className = 'fas fa-comments';
    } else {
      this.chatIcon.className = 'fas fa-times';
    }
  }
  
  sendMessage() {
    const message = this.input.value.trim();
    if (!message || this.isTyping) return;
    
    // Add user message
    this.addMessage(message, 'user');
    this.input.value = '';
    
    // Show typing indicator
    this.showTypingIndicator();
    
    // Generate bot response
    setTimeout(() => {
      this.hideTypingIndicator();
      const response = this.generateResponse(message);
      this.addMessage(response, 'bot');
    }, 1000 + Math.random() * 1000);
  }
  
  addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = `<p>${text}</p>`;
    
    messageDiv.appendChild(contentDiv);
    this.messages.appendChild(messageDiv);
    
    // Scroll to bottom
    this.messages.scrollTop = this.messages.scrollHeight;
  }
  
  showTypingIndicator() {
    this.isTyping = true;
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.id = 'typingIndicator';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = `
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    `;
    
    typingDiv.appendChild(contentDiv);
    this.messages.appendChild(typingDiv);
    this.messages.scrollTop = this.messages.scrollHeight;
  }
  
  hideTypingIndicator() {
    this.isTyping = false;
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }
  
  generateResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Portfolio-specific responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! 👋 I'm your portfolio assistant. How can I help you learn more about Prathamesh?";
    }
    
    if (message.includes('about') || message.includes('who')) {
      return "Prathamesh is a passionate Full Stack Developer and Tech Enthusiast with a strong interest in AI and Cybersecurity. He's currently pursuing his Bachelor's degree in Computer Science & Engineering! 🚀";
    }
    
    if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
      return "Prathamesh's skills include: Python (90%), C/C++ (75%), HTML5 (95%), CSS3 (70%), JavaScript (55%), AI (30%), and Cybersecurity (20%). He's always learning and expanding his knowledge! 💻";
    }
    
    if (message.includes('project') || message.includes('work')) {
      return "Prathamesh loves working on innovative projects! He participates in hackathons and builds meaningful web applications. You can explore his projects and connect with him through the social links above! 🛠️";
    }
    
    if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
      return "You can contact Prathamesh through the contact form above, or connect with him on LinkedIn, GitHub, and Instagram. He's always open to new opportunities and collaborations! 📧";
    }
    
    if (message.includes('education') || message.includes('study') || message.includes('college')) {
      return "Prathamesh is currently pursuing his Bachelor's degree in Computer Science & Engineering from NMIET, affiliated with Savitribai Phule Pune University. He scored 82% in HSC and 94% in MHTCET! 🎓";
    }
    
    if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('machine learning')) {
      return "Prathamesh has a strong interest in AI and is exploring machine learning models. He's passionate about building intelligent systems and staying updated with the latest AI technologies! 🤖";
    }
    
    if (message.includes('cybersecurity') || message.includes('security')) {
      return "Cybersecurity is one of Prathamesh's key interests! He's learning about security practices and exploring this exciting field alongside his development skills. 🔒";
    }
    
    if (message.includes('experience') || message.includes('year')) {
      return "Prathamesh is a student developer who's building his experience through projects, hackathons, and continuous learning. He's passionate about technology and always eager to take on new challenges! ⚡";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! 😊 Feel free to ask me anything else about Prathamesh's portfolio, skills, or experience. I'm here to help!";
    }
    
    // Default responses
    const defaultResponses = [
      "That's interesting! 🤔 Could you tell me more about what you'd like to know about Prathamesh?",
      "I'd be happy to help! What specific aspect of Prathamesh's portfolio would you like to learn about?",
      "Great question! Prathamesh is passionate about technology and always eager to learn. What would you like to know?",
      "I'm here to help you learn more about Prathamesh's skills and experience. What interests you most?",
      "Feel free to ask me about Prathamesh's skills, projects, education, or contact information! 💡"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  }
}

// Initialize chatbot when page loads
document.addEventListener('DOMContentLoaded', () => {
  new Chatbot();
});
