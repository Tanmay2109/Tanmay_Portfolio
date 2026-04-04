import React from 'react';
import { Network, Database, Code2, Cpu } from 'lucide-react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiJavascript, SiMysql, SiPostgresql, SiFirebase, SiC, SiCplusplus, SiKotlin, SiArduino, SiCisco } from 'react-icons/si';
import { BiStats } from 'react-icons/bi';

const Skills = () => {
  const skills = [
    { 
      name: 'Frontend', 
      items: [
        { name: 'React', icon: <FaReact color="#61DAFB" /> },
        { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> }
      ], 
      icon: <Code2 className="text-accent" /> 
    },
    { 
      name: 'Backend & DB', 
      items: [
        { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
        { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
        { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> }
      ], 
      icon: <Database className="text-accent" /> 
    },
    { 
      name: 'Languages', 
      items: [
        { name: 'C', icon: <SiC color="#A8B9CC" /> },
        { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
        { name: 'Python', icon: <FaPython color="#3776AB" /> },
        { name: 'Java', icon: <FaJava color="#007396" /> },
        { name: 'Kotlin', icon: <SiKotlin color="#7F52FF" /> }
      ], 
      icon: <Network className="text-accent" /> 
    },
    { 
      name: 'Tools & IoT', 
      items: [
        { name: 'Arduino', icon: <SiArduino color="#00979D" /> },
        { name: 'Cisco', icon: <SiCisco color="#1BA0D7" /> },
        { name: 'Power BI', icon: <BiStats color="#F2C811" /> }
      ], 
      icon: <Cpu className="text-accent" /> 
    },
  ];

  return (
    <section id="skills" className="container" style={{ padding: '6rem 2rem' }}>
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginBottom: '4rem'
      }}>
        {skills.map((skillGroup, index) => (
          <div key={index} className="glass-panel" style={{ padding: '1.5rem', transition: 'transform 0.3s ease' }} 
               onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
               onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
              {skillGroup.icon}
              <h4 style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '1.2rem' }}>{skillGroup.name}</h4>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {skillGroup.items.map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                }}>
                  {/* Container for standardizing icon sizes */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px' }}>
                     {item.icon}
                  </div>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
