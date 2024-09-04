import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/send-mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.text();
            alert(result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Contact Us</h2>
            <p>If you're dying to know when the next book is out, or have any other questions, fill this out to get in touch!</p>
            <form onSubmit={handleSubmit} className="contact-form padding-large">
                <div className="input-wrap">
                    <label>
                        Name:
                    </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="input-wrap">
                    <label>
                        Email:
                    </label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="input-wrap input-wrap__message">
                    <label>
                        Message:
                    </label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </div>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;
