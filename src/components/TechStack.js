import { Icon } from '@iconify/react'
// import { HashLink as Link } from "react-router-hash-link"

const linkStyle ="no-underline text-coral text-lg font-semibold m-4"

const header = "pb-4 font-bold"

const TechStack = () => {

    return (
        <div id="tech_stack" className="flex flex-col items-center justify-center min-h-screen w-screen">
            {/* <Link smooth to="/ben-barlow-portfolio/#about" className={linkStyle}>
                Previous
            </Link> */}
            <div className="flex justify-center items-start w-9/12 bg-clotted-cream border-4 border-coral rounded-3xl pt-4 pb-4">
                <div className="flex flex-col px-6">
                    <h3 className={header}>Front-End</h3>
                    <span className="flex items-center font-medium pb-3">
                        <Icon icon="skill-icons:javascript" className="w-8 h-8 mr-2"/>
                        JavaScript
                    </span>
                    <span className="flex items-center font-medium pb-3">
                        <Icon icon="skill-icons:react-dark" className="w-8 h-8 mr-2"/>
                        React
                    </span>
                    <span className="flex items-center font-medium pb-3">
                        <Icon icon="skill-icons:html" className="w-8 h-8 mr-2"/>
                        HTML
                    </span>
                    <span className="flex items-center font-medium pb-3">
                        <Icon icon="skill-icons:css" className="w-8 h-8 mr-2"/>
                        CSS
                    </span>
                </div>
                <div className="flex flex-col px-6">
                    <h3 className={header}>Back-End</h3>
                    <span className="flex items-center font-medium pb-3">
                        <Icon icon="skill-icons:python-dark" className="w-8 h-8 mr-2"/>
                        Python
                    </span>
                    <span className="flex items-center font-medium pb-3">
                        <Icon icon="skill-icons:flask-light" className="w-8 h-8 mr-2"/>
                        Flask
                    </span>
                    <span className="flex items-center font-medium pb-3">
                        <Icon icon="skill-icons:java-light" className="w-8 h-8 mr-2"/>
                        Java
                    </span>
                    <span className="flex items-center font-medium pb-3">
                        <Icon icon="skill-icons:spring-light" className="w-8 h-8 mr-2"/>
                        Spring
                    </span>
                    <span className="flex items-center font-medium pb-3">
                        <Icon icon="skill-icons:nodejs-light" className="w-8 h-8 mr-2"/>
                        Node.js
                    </span>
                    <span className="flex items-center font-medium pb-3">
                        <Icon icon="skill-icons:expressjs-light" className="w-8 h-8 mr-2"/>
                        Express.js
                    </span>
                    <span className="flex items-center font-medium pb-3">
                        <Icon icon="skill-icons:jest" className="w-8 h-8 mr-2"/>
                        Jest
                    </span>
                    <span className="flex items-center font-medium pb-3">
                        <Icon icon="logos:mocha" className="w-8 h-8 mr-2"/>
                        Mocha
                    </span>
                </div>
                <div className="flex flex-col px-6">
                    <h3 className={header}>Miscellaneous</h3>
                    <span className="flex items-center font-medium pb-3">
                            <Icon icon="logos:cypress-icon" className="w-8 h-8 mr-2"/>
                        Cypress
                    </span>
                    <span className="flex items-center font-medium pb-3">
                            <Icon icon="skill-icons:mongodb" className="w-8 h-8 mr-2"/>
                        MongoDB
                    </span>

                    <span className="flex items-center font-medium pb-3">
                        <Icon icon="skill-icons:postgresql-light" className="w-8 h-8 mr-2"/>
                        PostgreSQL
                    </span>

                    <span className="flex items-center font-medium pb-3">
                        <Icon icon="skill-icons:git" className="w-8 h-8 mr-2"/>
                        Git
                    </span>
                </div>
            </div>
            {/* <Link smooth to="/ben-barlow-portfolio/#projects" className={linkStyle}>
                Next
            </Link> */}
        </div>
    )

}

export default TechStack