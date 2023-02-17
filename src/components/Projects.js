import ProjectItem from "./ProjectItem"
import styled from "styled-components"

const Section = styled.section`
    height: 100vh;
    background-color: #004643;
    display:flex; 
`
const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto; 
`

const Header = styled.h2`
    color: #e8e4e6;
`

const Projects = ({ projects }) => {

    const projectsArray = projects.map((project) => {
        return <ProjectItem key={project.id} name={project.name} description={project.description} img={project.img} url={project.url} />
    })

    return (
        <Section id='projects'>
            <ProjectsWrapper>
            <Header>Projects</Header>
                {projectsArray}
            </ProjectsWrapper>
        </Section>
    )

}

export default Projects