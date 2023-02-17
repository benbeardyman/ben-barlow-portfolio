import ProjectItem from "./ProjectItem"
import styled from "styled-components"

const Section = styled.section`
    height: 100vh;
    background-color: #004643;
`
const ProjectsWrapper = styled.div`
    height:80vh;
`

const Header = styled.h2`
    color: #001e1d;
`

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-content: space-between; */
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
                {/* <Ul> */}
                    {projectsArray}
                {/* </Ul> */}
            </ProjectsWrapper>
        </Section>
    )

}

export default Projects