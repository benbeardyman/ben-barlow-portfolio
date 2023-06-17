import { Icon } from '@iconify/react'



const TechStack = () => {

    const columnHeader = 'pt-2 md:pt-4 pb-4 font-header text:base md:text-xl'
    const column = 'flex flex-col px-1 md:px-6'
    const techContainer = 'flex items-center font-primary text-sm md:text-base pb-3'
    const techIcon = 'h-6 w-6 md:w-10 md:h-10 mr-2'

    const scrollLeft = () => {
        const slider = document.getElementById('about-tech-slider')
        slider.scrollLeft = slider.scrollLeft -1000
    }

    return (
        <div id="tech_stack" className='flex flex-col items-center justify-center min-h-screen w-screen'>
            <div className='flex flex-col items-center w-10/12 lg:w-3/4 bg-clotted-cream border-2 md:border-4 border-coral rounded-3xl'>
                <h3 className='pt-2 md:pt-4 px-16 text-center font-header text-lg md:text-xl'>
                    Tech Stack
                </h3>
                <div className='flex'>
                <div className={column}>
                    <h3 className={columnHeader}>Front-End</h3>
                    
                    <span className={techContainer}>
                        <Icon icon="skill-icons:javascript" className={techIcon}/>
                        JavaScript
                    </span>
                    
                    <span className={techContainer}>
                        <Icon icon="skill-icons:react-dark" className={techIcon}/>
                        React
                    </span>
                    
                    <span className={techContainer}>
                        <Icon icon="skill-icons:html" className={techIcon}/>
                        HTML
                    </span>
                    
                    <span className={techContainer}>
                        <Icon icon="skill-icons:css" className={techIcon}/>
                        CSS
                    </span>
                </div>
                
                <div className={column}>
                    <h3 className={columnHeader}>Back-End</h3>
                    
                    <span className={techContainer}>
                        <Icon icon="skill-icons:python-dark" className={techIcon}/>
                        Python
                    </span>
                    
                    <span className={techContainer}>
                        <Icon icon="skill-icons:flask-light" className={techIcon}/>
                        Flask
                    </span>
                    
                    <span className={techContainer}>
                        <Icon icon="skill-icons:java-light" className={techIcon}/>
                        Java
                    </span>
                    
                    <span className={techContainer}>
                        <Icon icon="skill-icons:spring-light" className={techIcon}/>
                        Spring
                    </span>
                    
                    <span className={techContainer}>
                        <Icon icon="skill-icons:nodejs-light" className={techIcon}/>
                        Node.js
                    </span>
                    
                    <span className={techContainer}>
                        <Icon icon="skill-icons:expressjs-light" className={techIcon}/>
                        Express.js
                    </span>
                </div>
                
                <div className={column}>
                    <h3 className={columnHeader}>Miscellaneous</h3>
                    
                    <span className={techContainer}>
                        <Icon icon="skill-icons:postgresql-light" className={techIcon}/>
                        PostgreSQL
                    </span>

                    <span className={techContainer}>
                        <Icon icon="skill-icons:mongodb" className={techIcon}/>
                        MongoDB
                    </span>
                        
                    <span className={techContainer}>
                        <Icon icon="logos:cypress-icon" className={techIcon}/>
                        Cypress
                    </span>
                        
                    <span className={techContainer}>
                        <Icon icon="skill-icons:jest" className={techIcon}/>
                        Jest
                    </span>
                    
                    <span className={techContainer}>
                        <Icon icon="logos:mocha" className={techIcon}/>
                        Mocha
                    </span>

                    <span className={techContainer}>
                        <Icon icon="skill-icons:git" className={techIcon}/>
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