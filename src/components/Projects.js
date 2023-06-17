import ProjectItem from "./ProjectItem"
import { Icon } from '@iconify/react'

const Projects = ({ projects }) => {

    const scrollDown = () => {
        const aboutComponent = document.getElementById('contact');
        aboutComponent.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollLeft = () => {
        const slider = document.getElementById('projects-slider')
        slider.scrollLeft = slider.scrollLeft -1000
    }

    const scrollRight = () => {
        const slider = document.getElementById('projects-slider')
        slider.scrollLeft = slider.scrollLeft +1000
    }

    const projectsArray = projects.map((project, index) => {
        return (
            <ProjectItem
                key={project.id}
                index={index}
                name={project.name}
                description={project.description}
                image={project.img}
                url={project.url} 
                technologies={project.technologies}
                
            />
            
        )
    })

    
    return (
        <div id='projects' className="flex flex-col min-h-screen justify-center relative">
            <div className="flex items-center">
                <Icon
                    icon="bxs:left-arrow"
                    onClick={scrollLeft}
                    color="#ff9c99"
                    className="h-12 w-12 ml-4 lg:ml-16 opacity-50 cursor-pointer hover:opacity-100" 
                />
                
                <div id="projects-slider" className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scroll-smooth no-scrollbar">
                    {projectsArray}
                </div>
                <div className="absolute bottom-0 mb-2 md:mb-8 left-0 right-0 flex justify-center">
                    <Icon
                        icon="simple-line-icons:arrow-down"
                        onClick={scrollDown}
                        color="#ff9c99"
                        className="h-10 w-10 md:h-12 md:w-12 opacity-70 cursor-pointer hover:opacity-100 animate-fade" 
                    />
                </div>
                <Icon
                    icon="bxs:right-arrow"
                    onClick={scrollRight}
                    color="#ff9c99"
                    className="h-12 w-12 mr-4 lg:mr-16 opacity-50 cursor-pointer hover:opacity-100" 
                />
            </div>
        </div>    
    )

}

export default Projects
