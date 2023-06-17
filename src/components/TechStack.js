import { Icon } from '@iconify/react'

const header = "pb-4 font-header text-xl"

const TechStack = () => {

    const scrollLeft = () => {
        const slider = document.getElementById('about-tech-slider')
        slider.scrollLeft = slider.scrollLeft -1000
    }

    return (
        <div id="tech_stack" className="flex flex-col items-center justify-center min-h-screen w-screen">
            <div className="flex flex-col items-center w-9/12 bg-clotted-cream border-4 border-coral rounded-3xl pt-8">
                <h3 className="mb-2 text-center font-header text-xl">
                    Tech Stack
                </h3>
                <div className="flex justify-center items-start">
                <div className="flex flex-col px-6">
                    <h3 className={header}>Front-End</h3>
                    
                    <span className="flex items-center font-primary text-base pb-3">
                        <Icon icon="skill-icons:javascript" className="w-8 h-8 mr-2"/>
                        JavaScript
                    </span>
                    
                    <span className="flex items-center font-primary text-base pb-3">
                        <Icon icon="skill-icons:react-dark" className="w-8 h-8 mr-2"/>
                        React
                    </span>
                    
                    <span className="flex items-center font-primary text-base pb-3">
                        <Icon icon="skill-icons:html" className="w-8 h-8 mr-2"/>
                        HTML
                    </span>
                    
                    <span className="flex items-center font-primary text-base pb-3">
                        <Icon icon="skill-icons:css" className="w-8 h-8 mr-2"/>
                        CSS
                    </span>
                </div>
                
                <div className="flex flex-col px-6">
                    <h3 className={header}>Back-End</h3>
                    
                    <span className="flex items-center font-primary text-base pb-3">
                        <Icon icon="skill-icons:python-dark" className="w-8 h-8 mr-2"/>
                        Python
                    </span>
                    
                    <span className="flex items-center font-primary text-base pb-3">
                        <Icon icon="skill-icons:flask-light" className="w-8 h-8 mr-2"/>
                        Flask
                    </span>
                    
                    <span className="flex items-center font-primary text-base pb-3">
                        <Icon icon="skill-icons:java-light" className="w-8 h-8 mr-2"/>
                        Java
                    </span>
                    
                    <span className="flex items-center font-primary text-base pb-3">
                        <Icon icon="skill-icons:spring-light" className="w-8 h-8 mr-2"/>
                        Spring
                    </span>
                    
                    <span className="flex items-center font-primary text-base pb-3">
                        <Icon icon="skill-icons:nodejs-light" className="w-8 h-8 mr-2"/>
                        Node.js
                    </span>
                    
                    <span className="flex items-center font-primary text-base pb-3">
                        <Icon icon="skill-icons:expressjs-light" className="w-8 h-8 mr-2"/>
                        Express.js
                    </span>
                </div>
                
                <div className="flex flex-col px-6">
                    <h3 className={header}>Miscellaneous</h3>
                    
                    <span className="flex items-center font-primary text-base pb-3">
                        <Icon icon="skill-icons:postgresql-light" className="w-8 h-8 mr-2"/>
                        PostgreSQL
                    </span>

                    <span className="flex items-center font-primary text-base pb-3">
                        <Icon icon="skill-icons:mongodb" className="w-8 h-8 mr-2"/>
                        MongoDB
                    </span>
                        
                    <span className="flex items-center font-primary text-base pb-3">
                        <Icon icon="logos:cypress-icon" className="w-8 h-8 mr-2"/>
                        Cypress
                    </span>
                        
                    <span className="flex items-center font-primary text-base pb-3">
                        <Icon icon="skill-icons:jest" className="w-8 h-8 mr-2"/>
                        Jest
                    </span>
                    
                    <span className="flex items-center font-primary text-base pb-3">
                        <Icon icon="logos:mocha" className="w-8 h-8 mr-2"/>
                        Mocha
                    </span>

                    <span className="flex items-center font-primary text-base pb-3">
                        <Icon icon="skill-icons:git" className="w-8 h-8 mr-2"/>
                        Git
                    </span>
                    
                </div>
                </div>
                <button onClick={scrollLeft} className="px-16 text-center font-primary my-8">{"<"} BACK </button>
            </div>
        </div>
    )

}

export default TechStack