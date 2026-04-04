import React, { useState } from 'react';
import { GraduationCap, MapPin, Calendar, School, BookOpen, ChevronLeft, ChevronRight, Navigation } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science and Engineering (IoT)',
      institution: 'YCCE Nagpur',
      location: 'Nagpur, Maharashtra',
      period: '2023 - 2027 (Expected)',
      description: 'Minor in Instrumentation. Focused on Internet of Things, Data Analysis, and advanced software development principles.',
      type: 'college',
      icon: <GraduationCap size={16} color="var(--accent-primary)" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ3Pk7anp4clpKeTGuqBX3IU8rm6LJwBMw9A&s'
    },
    {
      degree: 'Higher Secondary Education (Class XII)',
      institution: 'Santaji Mahavidyalaya',
      location: 'Nagpur, Maharashtra',
      period: '2021 - 2023',
      description: 'Completed higher secondary education with a focus on science and mathematics.',
      type: 'school',
      icon: <School size={16} color="var(--accent-primary)" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0HhmO9xBQscxBIiXWogjzAbEQE2ENNvs4mg&s',
      imgStyle: { objectFit: 'contain', background: '#fff' }
    },
    {
      degree: 'Secondary Education (Class X)',
      institution: 'School of Scholars Atrey Layout',
      location: 'Nagpur, Maharashtra',
      period: 'Graduated 2021',
      description: 'Completed foundational schooling with strong academic performance.',
      type: 'school',
      icon: <BookOpen size={16} color="var(--accent-primary)" />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVNOMEenAvjzpScrhW0NOjeBKSR7OZmRW0w&s'
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
      setActiveIndex((prev) => (prev === educationData.length - 1 ? 0 : prev + 1));
      setFlipClass('animate-flip-in-right');
    }, 300);
  };

  const prevCard = () => {
    setFlipClass('animate-flip-out-right');
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? educationData.length - 1 : prev - 1));
      setFlipClass('animate-flip-in-left');
    }, 300);
  };

  const currentCard = educationData[activeIndex];

  return (
    <section id="education" className="container" style={{ padding: '6rem 2rem' }}>
      <div className="section-header">
        <h2 className="section-title">Education</h2>
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
               <img src={currentCard.image} alt={currentCard.institution} style={{ width: '100%', height: '100%', objectFit: currentCard.imgStyle ? currentCard.imgStyle.objectFit : 'cover', padding: currentCard.imgStyle ? '0.2rem' : '0' }} />
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              {currentCard.degree}
            </h3>
            
            <h4 style={{ 
              fontSize: '1.2rem', 
              color: 'var(--accent-secondary)',
              marginBottom: '1rem',
              fontWeight: '500'
            }}>
              {currentCard.institution}
            </h4>

            <div style={{
              display: 'flex',
              gap: '1.5rem',
              marginBottom: '1.5rem',
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
              flexWrap: 'wrap',
              justifyContent: 'flex-start'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={15} /> {currentCard.period}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={15} /> {currentCard.location}
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '100%', fontSize: '1.05rem' }}>
              {currentCard.description}
            </p>
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
          {educationData.map((_, idx) => (
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

export default Education;
