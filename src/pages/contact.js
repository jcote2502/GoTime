import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const templateParams = {
          from_name: formData.name,
          message: formData.message,
          reply_email: formData.email,
          reply_phone: formData.phone
        };
    
        emailjs.send(
          'service_vilqgdd', // replace with your EmailJS service ID
          'template_4xjc1bu', // replace with your EmailJS template ID
          templateParams,
          'qYrNC_pAsxxp9ahjc' // replace with your EmailJS user ID
        )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
        }, (err) => {
          console.log('FAILED...', err);
          alert('Failed to send message. Please try again later.');
        });
      };
    

    return (
        <div className='contact'>
            <div style={{textAlign:'center', fontSize:'45px', margin:'20px', marginBottom:'22px'}}> Contact Us To Build Your Brand </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Phone
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}               
                            required
                        />
                    </label>
                </div>
                <div style={{width:'100%'}}>
                    <label>
                        Message
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            maxLength="275"
                        />
                    </label>
                    <div className='message-count'>{formData.message.length} / 275 characters</div>
                </div>
                <button className='contact-button' style={{width:'350px',fontSize:'25px',alignSelf:'center'}} type="submit">Send</button>
            </form>

        </div>
    )
}

export default Contact;
