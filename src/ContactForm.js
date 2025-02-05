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
            <h2 className="text-light">Contact Us</h2>
            <p className="text-light">If you're dying to know when the next book is out, or have any other questions, fill this out to get in touch!</p>
            <form className="contact-form padding-large" action="https://formsubmit.co/slewisbowman@gmail.com" method="POST">
                <div className="input-wrap">
                    <label className="text-light">
                        Name:
                    </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="input-wrap">
                    <label className="text-light">
                        Email:
                    </label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="input-wrap input-wrap__message">
                    <label className="text-light">
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
