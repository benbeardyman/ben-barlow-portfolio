import { Icon } from '@iconify/react'
import { HashLink as Link } from "react-router-hash-link"

const linkStyle ="no-underline text-coral text-lg font-semibold m-4"

const iconStyle = "m-2 h-8 w-8 pl-2"

const Contact = () => {

    return (
        <section id="contact" className="flex flex-col items-center content-center min-h-screen">
            <Link smooth to="/ben-barlow-portfolio/#projects" className={linkStyle}>
                Previous
            </Link>
            <div className="flex flex-col items-end content-evenly w-9/12">
                <h2>Find Me:</h2>
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
                <p>
                    email:
                    <a href="mailto:benbcodes@gmail.com?subject=Hi!"
                    target="_blank" rel="noreferrer" className="no-underline">
                    benbcodes@gmail.com
                    </a>
                </p>
                <p>website by me 2023</p>
            </div>
        </section>
    )

}

export default Contact