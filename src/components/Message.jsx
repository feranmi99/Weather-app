import axios from 'axios';
import { ErrorMessage, Field, Form, Formik, yupToFormErrors } from 'formik';
import React, { useState } from 'react'
yupToF
const Message = () => {
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await axios.post('/api/send-email', {
                recipient: 'olamilekanferanmi99@gmail.com',
                subject,
                content
            });
            console.log('Email sent successfully');
            // Optionally, you can show a success message or redirect the user to a thank you page
        } catch (error) {
            console.error('Error sending email:', error);
            // Optionally, you can show an error message to the user
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Message Content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Message