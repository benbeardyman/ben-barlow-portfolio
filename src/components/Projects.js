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
        <section id='projects' className="h-screen flex flex-col items-center content-center">
            <Link smooth to="/ben-barlow-portfolio/#tech_stack" className={linkStyle}>
                Previous
            </Link>
            <div className="flex flex-col content-evenly items-center h-4/5">
                {projectsArray}
            </div>
            <Link smooth to="/ben-barlow-portfolio/#contact" className={linkStyle}>
                Next
            </Link>
        </section>
    )

}

export default Projects