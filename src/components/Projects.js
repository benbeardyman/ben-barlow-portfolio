import ProjectItem from "./ProjectItem"
import styled from "styled-components"

const Section = styled.section`
    min-height: 100vh;
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
    height: 90vh;
    width: 75vw;
    background-color: #fffffe;
    border:4px solid;
    border-radius: 40px;
    border-color: #e16162;
`

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
        <Section id='projects'>
            <Wrapper>
                {projectsArray}
            </Wrapper>
        </Section>
    )

}

export default Projects