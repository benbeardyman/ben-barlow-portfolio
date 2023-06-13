import ProjectItem from "./ProjectItem"
import { HashLink as Link } from "react-router-hash-link"
import { Icon } from '@iconify/react'

const linkStyle ="no-underline text-coral text-lg font-semibold m-4"

const Projects = ({ projects }) => {

    const projectsArray = projects.map((project) => {
        return (
            <ProjectItem key={project.id}
                name={project.name}
                description={project.description}
                image={project.img}
                url={project.url} />
        )
    })

    return (
        <div id='projects' className="flex flex-col min-h-screen justify-between">
            <div className="flex items-center justify-center">
                <Link smooth to="/ben-barlow-portfolio/#tech_stack" className={linkStyle}>
                    Previous
                </Link>
            </div>
            <div className="flex items-center">
                <Icon icon="bxs:left-arrow" color="#ff9c99" width="50" height="50" />
                <div id="slider" className="relative w-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory">
                    {/* <div className="flex"> */}
                        {projectsArray}
                    {/* </div>     */}
                </div>
                <Icon icon="bxs:right-arrow" color="#ff9c99" width="50" height="50" />
            </div>
            <div className="flex items-center justify-center">
                <Link smooth to="/ben-barlow-portfolio/#contact" className={linkStyle}>
                    Next
                </Link>
            </div>
        </div>
    )

}

export default Projects