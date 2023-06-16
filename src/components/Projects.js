import ProjectItem from "./ProjectItem"
import { Icon } from '@iconify/react'

const Projects = ({ projects }) => {

    const slideLeft = () => {
        const slider = document.getElementById('projects-slider')
        slider.scrollLeft = slider.scrollLeft -1000
    }

    const slideRight = () => {
        const slider = document.getElementById('projects-slider')
        slider.scrollLeft = slider.scrollLeft +1000
    }

    const projectsArray = projects.map((project) => {
        return (
            <ProjectItem key={project.id}
                name={project.name}
                description={project.description}
                image={project.img}
                url={project.url} 
                technologies={project.technologies}
                />
        )
    })

    return (
        <div id='projects' className="flex flex-col min-h-screen justify-center">
            <div className="flex items-center">
                <Icon icon="bxs:left-arrow" onClick={slideLeft} color="#ff9c99" className="h-12 w-12 ml-2 opacity-50 cursor-pointer hover:opacity-100"/>
                <div id="projects-slider" className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scroll-smooth no-scrollbar">
                    {projectsArray}
                </div>
                <Icon icon="bxs:right-arrow" onClick={slideRight} color="#ff9c99" className="h-12 w-12 mr-2 opacity-50 cursor-pointer hover:opacity-100"/>
            </div>
        </div>
    )

}

export default Projects