import ProjectItem from "./ProjectItem"
import styled from "styled-components"

const Wrapper = styled.section`
    height: 100vh;
    background-color: #abd1c6;
`

const Header = styled.h2`
    color: #001e1d;
`

const Projects = ({ projects }) => {

    const projectsArray = projects.map((project) => {
        return <ProjectItem key={project.id} name={project.name} description={project.description} img={project.img} url={project.url} />
    })

    return (
        <Wrapper id='projects'>
            <Header>Projects</Header>
            <ul>{projectsArray}</ul>
        </Wrapper>
    )

}

export default Projects