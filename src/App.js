

import React from "react";
import profilePic from "./assets/ayesha.jpg";
import { FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaAndroid, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub } from "react-icons/fa";
import { SiCplusplus, SiDotnet, SiMysql, SiFlutter } from "react-icons/si";
import "./App.css";



function App() {
  return (
    <div className="App">

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>


      <aside className="sidebar">
        <img src={profilePic} alt="Profile" className="profile-img" />
        <h3>Ayesha Khatoon</h3>
        <p>BS Software Engineering Student</p>
        <div className="social-links">
          <a href="https://github.com/Ashi-codes" target="_blank" rel="noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
      </aside>


      <section id="home" className="hero">
        <h1> Ayesha Khatoon</h1>
        <h2>BS Software Engineering Student</h2>
        <p>Frontend & C++ Developer | Building Interactive Projects</p>
      </section>


      <section id="about" className="about">
        <h2>👩‍💻 About Me</h2>
        <p>
          I am a 5th semester BS Software Engineering student at
          PMAS Arid Agriculture University, Rawalpindi.
          Passionate about<br /> coding and learning modern technologies.

        </p>
        <h3>📚 Education</h3>
        <ul className="education-list">
          <li>
            <span className="edu-degree">BS Software Engineering</span> – PMAS Arid Agriculture University (2023–Present)
          </li>
          <li>
            <span className="edu-degree">Intermediate Pre-Engineering</span> – F.G College for Women, RWP (2021–2023)
          </li>
          <li>
            <span className="edu-degree">Matriculation</span> – F.G Public School, RWP (2019–2021)
          </li>
        </ul>


      </section>


      <section id="skills" className="skills">
        <h2>🛠️✨ Skills & Knowledge</h2>
        <div className="skills-container">
          <div className="skills-box">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill"><SiCplusplus /> C++</div>
              <div className="skill"><SiDotnet /> C#</div>
              <div className="skill"><FaPython /> Python</div>
              <div className="skill"><FaHtml5 /> HTML5</div>
              <div className="skill"><FaCss3Alt /> CSS3</div>
              <div className="skill"><FaJsSquare /> JavaScript</div>
              <div className="skill"><SiMysql /> MySQL</div>
              <div className="skill"><SiFlutter /> Flutter</div>
              <div className="skill"><FaAndroid /> Android Studio</div>
            </div>
          </div>

          <div className="skills-box">
            <h3>Soft Skills</h3>
            <ul className="skill-list">
              <li>🟢 Eager to Learn</li>
              <li>🤝 Teamwork</li>
              <li>💡 Problem Solving</li>
              <li>⏰ Time Management</li>
              <li>🌟 Adaptability</li>
              <li>💬 Communication Skills</li>
            </ul>
          </div>

          <div className="skills-box">
            <h3>Languages</h3>
            <ul className="skill-list">
              <li>🇬🇧 English – Fluent</li>
              <li>🇵🇰 Urdu – Native</li>
              <li>🇵🇰 Punjabi – Conversational</li>
            </ul>
          </div>
        </div>
      </section>


      <section id="projects" className="projects">
        <h2>🚀✨ Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            💻 <b>E-Commerce Store (C++ DSA)</b>
            <p>Created an e-commerce store using data structures.</p>
            {/* <a href="https://github.com/Ashi-codes/ecommerce-store" target="_blank" rel="noreferrer">View Code</a> */}
          </div>
          <div className="project-card">
            📚 <b>Student Management System (C++)</b>
            <p>Console app for student records.</p>
            {/* <a href="https://github.com/Ashi-codes/student-management" target="_blank" rel="noreferrer">View Code</a> */}
          </div>
          <div className="project-card">
            🌍 <b>Travel Agency Website</b>
            <p>Responsive travel booking website.</p>
            {/* <a href="https://github.com/Ashi-codes/travel-website" target="_blank" rel="noreferrer">View Code</a> */}
          </div>
          <div className="project-card">
            🎵 <b>Music App (Flutter)</b>
            <p>Cross-platform music player app.</p>
            <a href="https://github.com/Ashi-codes/flutter-music-app" target="_blank" rel="noreferrer">View Code</a>
          </div>
        </div>
      </section>


      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p><FaMapMarkerAlt /> Kehkashan Colony Diva CNG, Rawalpindi</p>
        <p><FaPhone /> +92 3199470949</p>
        <p><FaEnvelope /> ayesshaa3169802@gmail.com</p>
      </section>


      <footer className="footer">
        <p>© 2025 Ayesha Khatoon | All Rights Reserved 🌸</p>
      </footer>
    </div>
  );
}

export default App;
