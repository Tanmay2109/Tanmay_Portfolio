import React from 'react';
import { Briefcase, Building, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Trainee Engineer',
      company: 'SEKAI-ICHI (Japan)',
      period: 'June 2025 - July 2025',
      description: 'Worked on an internal inventory tracking application for office assets. Implemented features for inventory entry, damaged item records, and data filtering. Maintained structured inventory data.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MySQL'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkcJlW1_cnRRx4ZFh8-dCs6_yD8mP85OqnQ&s'
    }
  ];

  return (
    <section id="experience" className="container" style={{ padding: '6rem 2rem' }}>
      <div className="section-header">
        <h2 className="section-title">Internships</h2>
      </div>

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem',
        alignItems: 'center'
      }}>
        {experiences.map((exp, index) => (
          <div key={index} className="glass-panel" style={{
            width: '100%',
            padding: '3rem',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '4px solid var(--accent-secondary)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'perspective(1500px) scale(1.03) translateY(-10px) rotateX(3deg) rotateY(-2deg)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.3)';
            e.currentTarget.style.borderColor = 'var(--accent-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(1500px) scale(1) translateY(0) rotateX(0) rotateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
          }}>
            {/* Added Company Logo */}
            <div style={{
               alignSelf: 'center',
               width: '90px',
               height: '90px',
               borderRadius: '12px',
               overflow: 'hidden',
               marginBottom: '1.5rem',
               background: '#fff',
               border: '1px solid var(--border-color)',
               boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
               <img src={exp.image} alt={exp.company} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0.5rem' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem', width: '100%' }}>
              <div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: '700' }}>
                  {exp.role}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: '600', fontSize: '1.1rem' }}>
                  <Building size={16} /> 
                  <span>{exp.company}</span>
                </div>
              </div>
              
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                color: 'var(--text-secondary)',
                background: 'rgba(255,255,255,0.05)',
                padding: '0.5rem 1rem',
                borderRadius: '999px',
                border: '1px solid var(--border-color)',
                fontSize: '0.9rem'
              }}>
                <Calendar size={14} /> 
                {exp.period}
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem', maxWidth: '100%' }}>
              {exp.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: '0.75rem' }}>
              {exp.technologies.map((tech, i) => (
                <span key={i} style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                  padding: '0.25rem 0.75rem',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  background: 'rgba(0,0,0,0.1)'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
