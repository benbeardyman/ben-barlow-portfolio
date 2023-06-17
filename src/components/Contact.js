import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Icon } from '@iconify/react'

const iconStyle = "m-2 h-8 w-8 pl-2"

const Contact = () => {
    
    const form = useRef()

    const sendEmail = (e) => {
    e.preventDefault()

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
        ).then((result) => {
            console.log(result.text)
            console.log("message sent")
        }, (error) => {
            console.log(error.text)
        })
        e.target.reset()
    }

    return (
        <div id="contact" className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-end justify-evenly w-9/12">
                <h2 className='font-header text-lg'>Find Me:</h2>
                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Subject</label>
                        <input type="text" name="subject" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                    <a href="https://github.com/benbeardyman" target="_blank" rel="noreferrer">
                        <Icon
                            icon="skill-icons:github-dark"
                            className={iconStyle}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/ben-barlow-codes/" target="_blank" rel="noreferrer">
                        <Icon
                            icon="skill-icons:linkedin"
                            className={iconStyle}
                        />
                    </a>
                </div>
                <p className='font-primary text-lg'>
                    email: 
                    <a href="mailto:benbcodes@gmail.com?subject=Hi!"
                    target="_blank" rel="noreferrer" className="no-underline ">
                    benbcodes@gmail.com
                    </a>
                </p>
                <p className='font-primary text-lg'>website by me 2023</p>
            </div>
        </div>    
    )

}

export default Contact