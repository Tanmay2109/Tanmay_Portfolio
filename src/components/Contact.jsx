import React, { useState } from 'react';
import { Send, Check, X } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalType, setModalType] = useState(null); // 'success' or 'error'

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');
    setModalType(null);

    const formData = new FormData(event.target);
    // Use the access key from the .env file
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setModalType('success');
        event.target.reset(); // Clear the form
      } else {
        setModalType('error');
      }
    } catch (error) {
      setModalType('error');
    } finally {
      setIsSubmitting(false);
      setStatus('');
    }
  };

  const closeModal = () => setModalType(null);

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <div className="contact-header">
          <h2 className="section-title">Contact Me</h2>
          <span className="contact-subtitle">GET IN TOUCH</span>
        </div>

        <div className="contact-form-wrapper glass-panel">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  placeholder="Tanmay Patil"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tanmay@example.com"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Collaboration"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                className="form-input"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <Send size={18} className="send-icon" />}
            </button>
          </form>
        </div>
      </div>

      {/* Success / Error Modal Overlay */}
      {modalType && (
        <div className="contact-modal-overlay">
          <div className="contact-modal">
            <div className={`modal-icon-circle ${modalType}`}>
              {modalType === 'success' ? <Check size={36} color="white" strokeWidth={3} /> : <X size={36} color="white" strokeWidth={3} />}
            </div>
            
            <h3 className="modal-title">
              {modalType === 'success' ? 'Message Sent Successfully!' : 'Oops! Error Occurred.'}
            </h3>
            
            <p className="modal-description">
              {modalType === 'success' 
                ? 'Thank you for reaching out, Tanmay. I will get back to you shortly.' 
                : 'There was an issue sending your message. Please try again later.'}
            </p>
            
            <button className="modal-close-btn" onClick={closeModal}>
              Close
            </button>
            
            <div className="modal-glow"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
