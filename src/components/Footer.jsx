import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      padding: '4rem 2rem 2rem 2rem',
      marginTop: 'auto'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem'
      }}>
        
        <div style={{
          display: 'flex',
          gap: '1.5rem'
        }}>
          {/* Social Links based on README */}
          <a href="https://linkedin.com/in/tanmaypatil2109" target="_blank" rel="noreferrer" 
             className="glass-panel" style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--text-primary)' }}
             onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)'}
             onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-card)'}>
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/Tanmay2109" target="_blank" rel="noreferrer" 
             className="glass-panel" style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--text-primary)' }}
             onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)'}
             onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-card)'}>
            <Github size={20} />
          </a>
          <a href="https://x.com/Tanmaypatil21" target="_blank" rel="noreferrer" 
             className="glass-panel" style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--text-primary)' }}
             onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)'}
             onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-card)'}>
            <Twitter size={20} />
          </a>
          <a href="mailto:tanmaypatil2109@gmail.com" 
             className="glass-panel" style={{ width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--text-primary)' }}
             onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)'}
             onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-card)'}>
            <Mail size={20} />
          </a>
        </div>

        <p style={{ color: 'var(--text-muted)', textAlign: 'center', fontSize: '0.9rem' }}>
          Designed & Built with <span style={{ color: 'var(--accent-primary)' }}>♥</span> by Tanmay Patil.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
