const ProjectItem = (project, name, description, image, url) => {

    return (
        <div>
            <li>
                <p>{project.name}</p>
                <p>{project.description}</p>
            </li>
        </div>
    )
}

export default ProjectItem