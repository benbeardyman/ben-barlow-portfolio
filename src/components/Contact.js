import { Icon } from '@iconify/react'

const iconStyle = "m-2 h-8 w-8 pl-2"

const Contact = () => {

    return (
        <section id="contact" className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-end justify-evenly w-9/12">
                <h2 className='font-header text-lg'>Find Me:</h2>
                <div>
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
        </section>
    )

}

export default Contact