import React from 'react';
import { ArrowRight, Download, Sparkles, Code, Cpu, Database, Server, Terminal, Monitor, Cloud } from 'lucide-react';
import resumePdf from '../assets/Tanmay_Resume.pdf';

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

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="animate-fade-in">
          <span className="hero-subtitle">
            <Sparkles size={18} />
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="hero-title animate-fade-in delay-100">
          Hi, I'm <br />
          <span className="gradient-text">Tanmay Patil</span>
        </h1>

        <p className="hero-description animate-fade-in delay-200">
          A passionate B.Tech student majoring in Computer Science and Engineering (IoT).
          I love building innovative web applications, exploring data, and solving real-world challenges.
        </p>

        <div className="hero-buttons animate-fade-in delay-300">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={18} />
          </a>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View Resume <Download size={18} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-float"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--text-muted)'
        }}
      >
        <div style={{
          width: '24px',
          height: '40px',
          border: '2px solid var(--text-muted)',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '6px'
        }}>
          <div style={{
            width: '4px',
            height: '8px',
            background: 'var(--text-muted)',
            borderRadius: '2px',
            animation: 'float 2s infinite'
          }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
