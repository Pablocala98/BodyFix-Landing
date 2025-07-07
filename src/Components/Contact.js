import React from 'react'

const Contact = () => {
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = () => {
        if (validateEmail(email)) {
            setMessage('Correo aceptado, pronto nos contactaremos con usted');
        } else {
            setMessage('Correo no válido, vuelva a intentar');
        }
    };

    return <div className='contact-page-wrapper'>
        <h1 className='primary-heading'>Have a question?</h1>
        <h1 className='primary-heading'>Let us help you</h1>
        <div className='contact-form-container'>
            <input 
                type="email" 
                placeholder='yourmail@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button className='secondary-button' onClick={handleSubmit}>Submit</button>
        </div>
        {message && <p className='message'>{message}</p>}
    </div>;

}

export default Contact;