import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const prebuiltQnA = [
  { q: "Where does Tanmay belong?", a: "I belong to Nagpur, Maharashtra, India! 🍊" },
  { q: "What is your Tech Stack?", a: "I primarily work with React, Node.js, Express, MySQL, Python, and C/C++!" },
  { q: "Are you open to work/internships?", a: "Yes, I am actively looking for internship opportunities to apply my skills in real-world environments." },
  { q: "What are your hobbies?", a: "I am a certified Tabla player (Madhyama Poorna Cleared) and love engaging in music alongside technology!" },
  { q: "How can I contact Tanmay?", a: "You can reach out to me via email at tanmaypatil2109@gmail.com, or directly through my LinkedIn profile linked in the navigation and footer!" },
  { q: "Where is Tanmay studying currently?", a: "I am currently pursuing my B.Tech in Computer Science and Engineering (IoT) with a minor in Instrumentation at YCCE, Nagpur (Expected 2027)." },
  { q: "What's his GitHub URL?", a: "My GitHub is https://github.com/Tanmay2109! You can find the source code for my MedBot and Inventory Management system there." }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Tanmay's virtual assistant. Ask me anything!", sender: "bot" }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleQuestionClick = (qna) => {
    // Add User Message
    setMessages(prev => [...prev, { text: qna.q, sender: "user" }]);
    
    // Simulate thinking delay
    setTimeout(() => {
      setMessages(prev => [...prev, { text: qna.a, sender: "bot" }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="glass-panel"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: isOpen ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 1000,
          border: '2px solid var(--accent-primary)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
      >
        <MessageCircle size={30} color="var(--accent-primary)" />
      </button>

      {/* Terminal Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '400px',
          height: '550px',
          maxWidth: 'calc(100vw - 4rem)',
          maxHeight: 'calc(100vh - 4rem)',
          zIndex: 1001,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          backgroundColor: '#0c0c0c',
          border: '1px solid #333',
          borderRadius: '8px 8px 0 0',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
          animation: 'fadeInUp 0.2s ease forwards',
          fontFamily: "'Consolas', 'Courier New', monospace"
        }}>
          {/* Windows 11 Terminal Header */}
          <div style={{
            padding: '0',
            background: '#1c1c1c',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            color: '#ccc',
            borderBottom: '1px solid #333',
            height: '35px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
               <div style={{
                 padding: '0 15px',
                 height: '100%',
                 display: 'flex',
                 alignItems: 'center',
                 background: '#0c0c0c',
                 borderRight: '1px solid #333',
                 borderTop: '2px solid var(--accent-primary)',
                 fontSize: '0.85rem'
               }}>
                  <span style={{ marginRight: '8px', color: '#00ccff' }}>&#128104;&#8205;&#128187;</span> Tanmay's Terminal
               </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'stretch' }}>
              <button 
                onClick={() => setIsOpen(false)} 
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#ccc',
                  cursor: 'pointer',
                  width: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e81123';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#ccc';
                }}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Terminal Console Output */}
          <div style={{
            flex: 1,
            padding: '1rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            background: '#0c0c0c',
            color: '#ccc'
          }}>
            <div style={{ marginBottom: '1rem', color: '#888' }}>
              Tanmay's Terminal [Version 1.0.0]<br/>
              (c) Tanmay Patil. All rights reserved.<br/><br/>
            </div>
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                alignSelf: 'flex-start',
                width: '100%',
                fontSize: '0.9rem',
                lineHeight: '1.4'
              }}>
                {msg.sender === 'user' ? (
                  <div style={{ display: 'flex', gap: '8px', color: '#fff' }}>
                    <span style={{ color: '#00ccff' }}>PS C:\Users\Visitor&gt;</span>
                    <span>{msg.text}</span>
                  </div>
                ) : (
                  <div style={{ color: '#00ff00', marginTop: '4px', marginBottom: '8px' }}>
                    {msg.text}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Pre-feed Questions Area - Terminal Style Commands */}
          <div style={{ padding: '0.5rem', borderTop: '1px solid #333', background: '#111' }}>
            <p style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.5rem', paddingLeft: '0.5rem', textTransform: 'uppercase' }}>Available Commands:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', maxHeight: '130px', overflowY: 'auto', padding: '0 0.5rem' }}>
              {prebuiltQnA.map((qna, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuestionClick(qna)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#00ccff',
                    padding: '0.4rem 0.2rem',
                    textAlign: 'left',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    fontFamily: "'Consolas', 'Courier New', monospace",
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#222';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#00ccff';
                  }}
                >
                  <span style={{ color: '#888' }}>$</span> {qna.q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
