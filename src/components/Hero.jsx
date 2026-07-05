import React from 'react';
import { ArrowRight, Download, Sparkles, Code, Cpu, Database, Server, Terminal, Monitor, Cloud } from 'lucide-react';
import resumePdf from '../assets/Tanmay_Resume.pdf';
import eveSvg from '../assets/E V E.svg';

const Hero = () => {

  return (
    <section id="home" className="hero">
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      {/* Animated Tech Background Elements */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 1, pointerEvents: 'none' }}>
        <Code size={120} color="var(--text-muted)" style={{ position: 'absolute', top: '15%', left: '10%', opacity: 0.2, animation: 'float-tech 10s ease-in-out infinite' }} />
        <Cpu size={150} color="var(--text-muted)" style={{ position: 'absolute', bottom: '20%', right: '15%', opacity: 0.15, animation: 'spin-slow 25s linear infinite' }} />
        <Database size={100} color="var(--text-muted)" style={{ position: 'absolute', top: '40%', right: '8%', opacity: 0.2, animation: 'float-tech 12s ease-in-out infinite reverse' }} />
        <Server size={90} color="var(--text-muted)" style={{ position: 'absolute', top: '70%', left: '20%', opacity: 0.18, animation: 'float-tech 15s ease-in-out infinite' }} />
        <Terminal size={110} color="var(--text-muted)" style={{ position: 'absolute', top: '10%', right: '30%', opacity: 0.15, animation: 'float-tech 14s ease-in-out infinite reverse' }} />
        <Monitor size={140} color="var(--text-muted)" style={{ position: 'absolute', bottom: '10%', left: '40%', opacity: 0.12, animation: 'float-tech 18s ease-in-out infinite' }} />
        <Cloud size={130} color="var(--text-muted)" style={{ position: 'absolute', top: '50%', left: '5%', opacity: 0.16, animation: 'spin-slow 30s linear infinite reverse' }} />
      </div>

      <div className="hero-content">
        
        <div className="hero-text">
          <div className="animate-fade-in" style={{ marginBottom: '1rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1.1rem' }}>
              <Sparkles size={18} />
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="animate-fade-in delay-100" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Hi, I'm <br />
            <span className="gradient-text">Tanmay Patil</span>
          </h1>

          <p className="animate-fade-in delay-200" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '3rem', lineHeight: 1.6 }}>
            A passionate B.Tech student majoring in Computer Science and Engineering (IoT).
            I love building innovative web applications, exploring data, and solving real-world challenges.
          </p>

          <div className="animate-fade-in delay-300" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              View Resume <Download size={18} />
            </a>
          </div>
        </div>

        <div className="hero-image-container animate-fade-in delay-200">
          <img 
            src={eveSvg} 
            alt="Robot Animation" 
            className="hero-robot" 
          />
        </div>

      </div>

    </section>
  );
};

export default Hero;
