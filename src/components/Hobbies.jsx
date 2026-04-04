import React from 'react';
import { Music, Database } from 'lucide-react';
import { SiGeeksforgeeks } from 'react-icons/si';

const Hobbies = () => {
  const extracurriculars = [
    {
      title: 'Tabla Player',
      role: 'Madhyama Poorna Cleared (Certified)',
      icon: <Music size={30} style={{ color: 'var(--text-primary)' }} />
    },
    {
      title: 'Core Contributor',
      role: 'Database Team, GeeksforGeeks Chapter, YCCE',
      icon: <SiGeeksforgeeks size={30} color="#2F8D46" />
    },
    {
       title: 'Database Head',
       role: 'YASH 26.0',
       icon: <Database size={30} style={{ color: 'var(--text-primary)' }} />
    }
  ];

  return (
    <section id="hobbies" className="container" style={{ padding: '6rem 2rem' }}>
      <div className="section-header">
        <h2 className="section-title">Hobbies & Extracurriculars</h2>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
         {extracurriculars.map((activity, index) => (
             <div key={index} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                 <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '50%', border: '1px solid var(--border-color)' }}>
                    {activity.icon}
                 </div>
                 <div>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{activity.title}</h4>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>{activity.role}</p>
                 </div>
             </div>
         ))}
      </div>
    </section>
  );
};

export default Hobbies;
