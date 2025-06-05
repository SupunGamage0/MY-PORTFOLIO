import './Contact.css';
import Pyramid from '../../ui/Pyramid';
import { contactInfo } from '../../data';
import SocialHandles from '../../ui/SocialHandles';
import { BsFillSendFill } from 'react-icons/bs';
import { useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    formData.append('_subject', '🚀 New Portfolio Message — Someone Reached Out!');
    formData.append('_autoresponse', 'Hey! 👋 Thanks for reaching out through my portfolio. I’ll get back to you soon!');
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');

    try {
      const response = await fetch('https://formsubmit.co/gamagesupun001@gmail.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSent(true);
        formRef.current.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='contact'>
      <div className="section__wrapper">
        <div className="pyramid__container">
          <Pyramid />
        </div>
        <div className="contact__group">
          <div>
            <h3 className="title">
              Let's talk on your<span className='shine'> ideas</span> together
            </h3>
            <div className="flex contact__options">
              {contactInfo.map((contact, index) => (
                <article className='flex option' key={index}>
                  <div className="contact__icon">
                    <img src={contact.icon} alt="" />
                  </div>
                  <div className="flex contact__content">
                    <div>
                      <h3 className='name'>{contact.name}</h3>
                      <p className="text__muted line__clamp__1 value">{contact.value}</p>
                    </div>
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex__center btn"
                    >
                      Message
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <SocialHandles />
          </div>

          {/* AJAX version of FormSubmit */}
          <form ref={formRef} onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder='Your full name' 
              name="name"
              required
            />
            <input 
              type="email" 
              placeholder='Your email' 
              name="email"
              required
            />
            <textarea name="message" rows={7} placeholder='Your message' required></textarea>
            <button type="submit" className='btn flex__center submit__btn' disabled={loading}>
              <div className="icon"><BsFillSendFill/></div>
              <span>{loading ? 'Sending...' : 'Send Now'}</span>
            </button>
            {sent && <p style={{color: "var(--color-success)", marginTop: "1rem"}}>✅ Message sent successfully! Thank you.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
