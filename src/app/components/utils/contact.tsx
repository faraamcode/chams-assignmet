import React from 'react'
import ContactForm from './contactForm'
import ContactDetails from './contactDetails'

function Contact() {
    return (
        <div className='section'>
            <div className="section-center contact-section">
                <ContactForm />
                <ContactDetails />
            </div>
        </div>
    )
}

export default Contact
