import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Icon } from '@iconify/react'


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
        <div id="contact" className='flex flex-col items-center justify-center min-h-screen w-screen relative'>
            <div className='flex flex-col flex-wrap justify-center items-center min-h-50 w-10/12 lg:w-3/4 bg-clotted-cream border-4 border-coral rounded-3xl mb-10'>
                <h2 className='font-header text-lg mt-4'>Contact Me:</h2>
                <div className='flex font-primary text-lg mt-2'>
                    <Icon icon="ic:round-email" className='w-6 h-6 mr-2 text-coral'/>
                    <a href="mailto:benbcodes@gmail.com?subject=Hi!"
                    target="_blank" rel="noreferrer" className='no-underline'>
                    benbcodes@gmail.com
                    </a>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <a href="https://github.com/benbeardyman" target="_blank" rel="noreferrer">
                            <Icon
                                icon="skill-icons:github-dark"
                                className='mt-2 mx-1 h-12 w-12 pl-2'
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/ben-barlow-codes/" target="_blank" rel="noreferrer">
                            <Icon
                                icon="skill-icons:linkedin"
                                className='mt-2 mx-1 h-12 w-12 pl-2'
                            />
                        </a>
                    </div>
                </div>
                
                <form ref={form} onSubmit={sendEmail} className='flex flex-col font-primary text-lg mb-4 w-4/12'>
                    <label>Name</label>
                    <input type="text" name="user_name" className='px-2 rounded-md border border-coral' required/>
                    <label>Email</label>
                    <input type="email" name="user_email" className='px-2 rounded-md lowercase border border-coral' required/>
                    <label>Subject</label>
                    <input type="text" name="subject" className='px-2 rounded-md border border-coral' required/>
                    <label>Message</label>
                    <textarea name="message" className='resize-none px-2 rounded-md border border-coral' required />
                    <p className='text-sm mt-1'>*all fields are required</p>
                    <div className='flex justify-center'>
                        <input type="submit" value="Send" className='mt-2 p-1 bg-coral w-32 rounded-md cursor-pointer' />
                        </div>
                </form>    
            </div>
            <p className='font-primary text-lg absolute bottom-0 mb-8'>website by me 2023</p>
        </div>    
    )

}

export default Contact