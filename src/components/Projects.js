import ProjectItem from "./ProjectItem"
import { HashLink as Link } from "react-router-hash-link"

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
            <div className="overflow-x-scroll flex">
                <div className="flex min-w-screen">
                    {projectsArray}
                </div>
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