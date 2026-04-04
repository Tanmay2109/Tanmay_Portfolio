import React, { useState } from 'react';
import { Award, ChevronLeft, ChevronRight, Navigation, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certificationsData = [
    {
      title: 'NPTEL Certifications',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
      courses: [
        'Training and Development',
        'Soft Skill Development',
        'Investment Management'
      ],
      icon: <Award size={16} color="var(--accent-primary)" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnuZIE0sBW1TumDoQRDx0tahiqdv7y7DUzKg&s',
      imgStyle: { objectFit: 'contain', background: '#fff' }
    },
    {
      title: 'MS-CIT Certification',
      issuer: 'Maharashtra State Certificate in Information Technology',
      courses: [
        'Comprehensive IT Skills and Computer Literacy Certification'
      ],
      icon: <Award size={16} color="var(--accent-primary)" />,
      image: 'https://anubhavcomputer.com/wp-content/uploads/2023/09/3.png',
      imgStyle: { objectFit: 'contain', background: '#fff' }
    },
    {
      title: 'Coursera Global Certifications',
      issuer: 'Coursera (Partnered with Microsoft & Meta)',
      courses: [
        'Microsoft Office',
        'Python Programming by Microsoft',
        'Database Structures and Management with MySQL by Meta'
      ],
      icon: <Award size={16} color="var(--accent-primary)" />,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/960px-Coursera-Logo_600x600.svg.png',
      imgStyle: { objectFit: 'contain', background: '#fff', padding: '0.5rem' }
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [flipClass, setFlipClass] = useState('animate-fade-in');

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextCard();
    }
    if (isRightSwipe) {
      prevCard();
    }
  };

  const nextCard = () => {
    setFlipClass('animate-flip-out-left');
    setTimeout(() => {
      setActiveIndex((prev) => (prev === certificationsData.length - 1 ? 0 : prev + 1));
      setFlipClass('animate-flip-in-right');
    }, 300);
  };

  const prevCard = () => {
    setFlipClass('animate-flip-out-right');
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? certificationsData.length - 1 : prev - 1));
      setFlipClass('animate-flip-in-left');
    }, 300);
  };

  const currentCard = certificationsData[activeIndex];

  return (
    <section id="certifications" className="container" style={{ padding: '6rem 2rem' }}>
      <div className="section-header">
        <h2 className="section-title">Certifications</h2>
      </div>

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        
        {/* Hint Text */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem', 
          color: 'var(--text-muted)', 
          marginBottom: '1rem',
          fontSize: '0.85rem'
        }}>
          <Navigation size={14} style={{ transform: 'rotate(90deg)' }} />
          <span>Swipe or click arrows to see next</span>
        </div>

        {/* Slider Container */}
        <div 
          style={{ width: '100%', position: 'relative' }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Left Arrow */}
          <button 
            onClick={prevCard}
            style={{
              position: 'absolute',
              left: '-4rem',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent-primary)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bg-card)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            className="slider-btn"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Active Card */}
          <div key={activeIndex} className={`glass-panel ${flipClass}`} style={{
            width: '100%',
            padding: '3rem',
            borderTop: '4px solid var(--accent-primary)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) scale(1.02) translateY(-6px) rotateX(2deg) rotateY(-1deg)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
            e.currentTarget.style.borderColor = 'var(--accent-primary)';
            e.currentTarget.style.transition = 'all 0.3s ease';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) scale(1) translateY(0) rotateX(0) rotateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            e.currentTarget.style.transition = 'all 0.3s ease';
          }}>
            <div style={{
               alignSelf: 'center',
               width: '90px',
               height: '90px',
               borderRadius: '50%',
               overflow: 'hidden',
               marginBottom: '1.5rem',
               border: '3px solid var(--border-color)',
               boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
               background: currentCard.imgStyle ? currentCard.imgStyle.background : 'transparent'
            }}>
               <img src={currentCard.image} alt={currentCard.title} style={{ width: '100%', height: '100%', objectFit: currentCard.imgStyle ? currentCard.imgStyle.objectFit : 'cover', padding: currentCard.imgStyle && currentCard.imgStyle.padding ? currentCard.imgStyle.padding : '0.2rem' }} />
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              {currentCard.title}
            </h3>
            
            <h4 style={{ 
              fontSize: '1.1rem', 
              color: 'var(--accent-secondary)',
              marginBottom: '1.5rem',
              fontWeight: '500'
            }}>
              {currentCard.issuer}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', width: '100%' }}>
              {currentCard.courses.map((course, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'var(--text-secondary)',
                  fontSize: '1.05rem',
                  lineHeight: '1.5',
                  padding: '0.5rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)'
                }}>
                  <img 
                    src="https://img.icons8.com/color/48/certificate--v1.png" 
                    alt="Certificate Icon" 
                    style={{ width: '28px', height: '28px', objectFit: 'contain', flexShrink: 0, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }} 
                  />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextCard}
            style={{
              position: 'absolute',
              right: '-4rem',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent-primary)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bg-card)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            className="slider-btn"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '2rem' }}>
          {certificationsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              style={{
                width: activeIndex === idx ? '24px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: activeIndex === idx ? 'var(--accent-primary)' : 'var(--border-color)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
