import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

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
        setStatus('Success! Your message has been sent.');
        event.target.reset(); // Clear the form
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    }
  };

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

            {status && (
              <div style={{
                marginTop: '1rem',
                color: status.includes('Success') ? '#10b981' : '#f43f5e',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: '500'
              }}>
                {status.includes('Success') && <CheckCircle2 size={18} />}
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
