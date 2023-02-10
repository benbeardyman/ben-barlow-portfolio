import ProjectItem from "./ProjectItem"
import styled from "styled-components"

const Section = styled.section`
    height: 100vh;
    background-color: #abd1c6;
`
const ProjectsWrapper = styled.div`
    height:80vh;
`

const Header = styled.h2`
    color: #001e1d;
`

const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
`

const Projects = ({ projects }) => {

    const projectsArray = projects.map((project) => {
        return <ProjectItem key={project.id} name={project.name} description={project.description} img={project.img} url={project.url} />
    })

    return (
        <Section id='projects'>
            <Header>Projects</Header>
            <ProjectsWrapper>
            <Ul>{projectsArray}</Ul>
            </ProjectsWrapper>
        </Section>
    )

}

export default Projects