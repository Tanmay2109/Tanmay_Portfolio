import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <h2 className="section-title about-title" style={{ margin: 0 }}>About Me</h2>
          <span className="section-subtitle" style={{ margin: 0 }}>MY ACADEMIC PROFILE</span>
        </div>

        <div className="about-content">
          {/* Left Column: Bio & Stats */}
          <div className="about-left">
            <p className="about-description">
              I am a third-year B.Tech student at YCCE Nagpur, majoring in Computer Science and Engineering (IoT) with a minor in Instrumentation.
            </p>
            <p className="about-description">
              I am passionate about technology and computing, with a strong interest in IoT and data analysis. I continuously seek to learn new technologies and apply my skills to develop innovative solutions for real-world scenarios.
            </p>

            <div className="stats-container">
              <div className="stat-box glass-panel">
                <span className="stat-number">7.78</span>
                <span className="stat-text">CGPA (6th sem)</span>
              </div>
              <div className="stat-box glass-panel">
                <span className="stat-number">03</span>
                <span className="stat-text">Projects</span>
              </div>
              <div className="stat-box glass-panel">
                <span className="stat-number">08</span>
                <span className="stat-text">Certificates</span>
              </div>
            </div>
          </div>

          {/* Right Column: Education Details Card */}
          <div className="about-right">
            <div className="education-card glass-panel">
              <h3 className="education-title">Education Details</h3>

              <ul className="education-list">
                <li>
                  <span className="edu-label">Institute:</span>
                  <span className="edu-value">Yeshwantrao Chavan College of Engineering (YCCE)</span>
                </li>
                <li>
                  <span className="edu-label">Degree:</span>
                  <span className="edu-value">Bachelor of Technology (B.Tech)</span>
                </li>
                <li>
                  <span className="edu-label">Specialization:</span>
                  <span className="edu-value">Computer Science and Engineering (IoT)</span>
                </li>
                <li>
                  <span className="edu-label">Timeline:</span>
                  <span className="edu-value">2023 - 2027</span>
                </li>
                <li>
                  <span className="edu-label">Location:</span>
                  <span className="edu-value">Nagpur, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
