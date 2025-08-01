<<<<<<< HEAD
# Portfolio Website - Prathamesh Kolhe

A modern, responsive portfolio website showcasing skills, experience, and projects with interactive features including a chatbot.

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Interactive Chatbot** - AI-powered assistant with smooth animations
- **Contact Form** - Functional email integration with EmailJS
- **Particle Background** - Dynamic animated particles
- **Smooth Animations** - AOS (Animate On Scroll) integration
- **Typed.js** - Dynamic text typing effect
- **Modern UI/UX** - Dark theme with gradient accents

## 📁 Project Structure

```
Portfolio/
├── index.html                 # Main HTML file
├── README.md                  # Project documentation
├── docs/                      # Documentation folder
├── static/                    # Static assets
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   ├── js/
│   │   ├── main.js           # Main JavaScript file
│   │   └── particles.json    # Particles configuration
│   ├── images/
│   │   ├── MY_PIC-removebg-preview.png
│   │   ├── Untitled (3).png
│   │   └── Untitled.png
│   ├── fonts/                # Custom fonts (if any)
│   └── assets/               # Additional assets
└── templates/                # Template files (if any)
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid & Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **EmailJS** - Contact form functionality
- **AOS** - Scroll animations
- **Typed.js** - Typing animations
- **Particles.js** - Background animations
- **Font Awesome** - Icons

## 🎨 Design Features

### Color Scheme
- **Primary Background**: Dark gradient (#1a1a2e to #16213e)
- **Accent Color**: Purple gradient (#4a00e0 to #8e2de2)
- **Text**: White and light gray
- **Cards**: Semi-transparent with blur effects

### Interactive Elements
- **Hover Effects** - Smooth transitions and scaling
- **Gradient Buttons** - Modern button styling
- **Chatbot** - Floating round button with popup animation
- **Smooth Scrolling** - Navigation and section transitions

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd Portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for development

3. **Customize**
   - Edit `static/css/style.css` for styling
   - Modify `static/js/main.js` for functionality
   - Update `index.html` for content

## 📧 Contact Form Setup

The contact form uses EmailJS. To set it up:

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create an account and add your email service
3. Create an email template
4. Update the credentials in `static/js/main.js`:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {...});
   ```

## 🤖 Chatbot Features

- **Round Floating Button** - Starts as a small circular button
- **Smooth Popup Animation** - Expands with cubic-bezier easing
- **Intelligent Responses** - Context-aware portfolio information
- **Typing Indicators** - Realistic chat experience
- **Mobile Responsive** - Adapts to all screen sizes

## 🎯 Sections

1. **Home** - Hero section with animated text and particles
2. **About** - Personal information and background
3. **Skills** - Technical skills with progress bars
4. **Education** - Timeline of educational background
5. **Contact** - Contact form and social links

## 🔧 Customization

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `static/css/style.css`
3. Add any JavaScript functionality in `static/js/main.js`

### Changing Colors
Update CSS variables in `static/css/style.css`:
```css
:root {
  --primary-bg: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  --accent-color: #4a00e0;
  --text-primary: #ffffff;
  --text-secondary: #b8b8b8;
}
```

### Modifying Chatbot
Edit the `generateResponse()` function in `static/js/main.js` to customize chatbot responses.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Prathamesh Kolhe**
- Full Stack Developer
- AI & Cybersecurity Enthusiast
- Computer Science & Engineering Student

---

⭐ **Star this repository if you found it helpful!** 
=======
````markdown
# 🌐 Prathamesh Kolhe – Portfolio Website

This is my personal **portfolio website**, built using **HTML**, **CSS**, and **JavaScript** to showcase my skills, projects, and personal information.  
Live here 👉 [prathamverse.netlify.app](https://prathamverse.netlify.app)

---

## 📁 Project Files

- `index.html` – Main webpage
- `style.css` – Styling for the site
- `main.js` – JavaScript for menu toggling and animations
- `particles.json` – Used with particles.js for animated background effect
- `MY_PIC-removebg-preview.png` – Your profile picture
- Other `.png` files – Icons or images used on the site

---

## 🚀 Live Demo

🌐 **Hosted on Netlify**:  
👉 [https://prathamverse.netlify.app](https://prathamverse.netlify.app)

---

## ✨ Features

- ✅ Fully responsive navigation menu
- ✅ Interactive animated background using `particles.js`
- ✅ Modern UI design
- ✅ Simple and clean layout
- ✅ Easy to customize and extend

---

## ⚙️ How to Use Locally

1. **Clone the repository**  
```bash
git clone https://github.com/prathamesh-6099/Portfolio.git
cd Portfolio
````

2. **Open in browser**
   Double-click `index.html` or open with Live Server in VS Code.

---

## 🛠️ Built With

* **HTML5**
* **CSS3**
* **JavaScript**
* **[particles.js](https://vincentgarreau.com/particles.js/)** – for the animated background effect

---

## 📃 License

This project is open-source and free to use. Feel free to fork or improve!

---

## 🙋‍♂️ Author

**Prathamesh Kolhe**
👨‍💻 Tech enthusiast | Web Developer | AI Learner

📫 Contact me at: *\[your email or LinkedIn/GitHub links if you want]*

---

## ⭐ Show some love

If you like this project, give it a ⭐ on GitHub and share it!

>>>>>>> 9e54e20435a28b6dfc70200701919e4a1362dc93
