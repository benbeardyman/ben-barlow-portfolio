import ProjectItem from "./ProjectItem"
import styled from "styled-components"

const Section = styled.section`
    height: 100vh;
    background-color: #004643;
    display:flex; 
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto; 
    height: 55em;
    width: 90em;
    background-color: #fffffe;
    border:4px solid;
    border-radius: 15px;
    border-color: #e16162;
`

const Header = styled.h2`
    color: #001e1d;
`

const Projects = ({ projects }) => {

    const projectsArray = projects.map((project) => {
        return <ProjectItem key={project.id} name={project.name} description={project.description} img={project.img} url={project.url} />
    })

    return (
        <Section id='projects'>
            <Wrapper>
            <Header>Projects</Header>
                {projectsArray}
            </Wrapper>
        </Section>
    )

}

export default Projects