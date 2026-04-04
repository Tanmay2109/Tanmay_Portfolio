import React from 'react';

const About = () => {
  return (
    <section id="about" className="container" style={{ paddingTop: '6rem' }}>
      <div className="section-header">
        <span className="section-subtitle">Discover</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'left'
      }}>
        {/* Bio */}
        <div className="glass-panel" style={{ padding: '3.5rem' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>My Journey</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.2rem', lineHeight: '1.8' }}>
            I am a third-year B.Tech student at YCCE Nagpur, majoring in Computer Science and Engineering (IoT) with a minor in Instrumentation.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8' }}>
            I am passionate about technology and computing, with a strong interest in IoT and data analysis. I continuously seek to learn new technologies and apply my skills to develop innovative solutions for real-world scenarios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
