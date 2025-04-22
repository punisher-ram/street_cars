import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("your_formspree_form_id");
  
  if (state.succeeded) {
    return (
      <div style={{
        backgroundColor: '#1A1A1A',
        padding: '30px',
        borderRadius: '15px',
        textAlign: 'center'
      }}>
        <h3 style={{ marginBottom: '15px' }}>Thank you for your message!</h3>
        <p>We'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      style={{
        backgroundColor: '#1A1A1A',
        padding: '30px',
        borderRadius: '15px'
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#D9D9D9',
            color: '#333'
          }}
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          required
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#D9D9D9',
            color: '#333'
          }}
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          required
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#D9D9D9',
            color: '#333',
            resize: 'vertical'
          }}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      
      <button
        type="submit"
        disabled={state.submitting}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#E72A2A',
          color: '#fff',
          borderRadius: '8px',
          border: 'none',
          fontWeight: 'bold',
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}
      >
        Send
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </form>
  );
};

export default ContactForm;