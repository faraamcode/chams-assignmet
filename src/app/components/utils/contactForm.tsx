import React from 'react'

function ContactForm() {
    return (
        <div className='contact-form-container'>
            <h2 className="form-title">
                Get in touch
            </h2>
            <form action="" method="post">
                <div className="input-wrapper">

                    <label>
                        first name
                    </label>
                    <input type="text" name="firstname" id="" />
                </div>
                <div className="input-wrapper">

                    <label>
                        Last name
                    </label>
                    <input type="text" name="lastname" id="" />
                </div>
                <div className="input-wrapper">

                    <label>
                        email
                    </label>
                    <input type="email" name="email" id="" />
                </div>
                <div className="input-wrapper">

                    <label>
                        phone
                    </label>
                    <input type="phone" name="email" id="" />
                </div>
                <div className="input-wrapper">

                    <label>
                        message
                    </label>
                    <textarea name="message" id="" />
                </div>
                <button className='btn mt-8'> Submit</button>
            </form>


        </div>
    )
}

export default ContactForm