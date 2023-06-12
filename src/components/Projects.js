import ProjectItem from "./ProjectItem"
import styled from "styled-components"
import { HashLink as Link } from "react-router-hash-link"

const Section = styled.section`
    min-height: 100vh;
    display:flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 90vh;
    
    @media screen and (min-width: 992px) {
        margin: 0 auto; 
        width: 75vw;
        background-color: #fffffe;
        border:4px solid;
        border-radius: 40px;
        border-color: #e16162;
    }
`

const linkStyle = {
    textDecoration: "none",
    color: "#FF9C99",
    fontSize: "1.2rem",
    fontWeight: "600",
    margin: "1rem"
}

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
            <Link smooth to="/ben-barlow-portfolio/#tech_stack" style={linkStyle}>
                Previous
            </Link>
            <Wrapper>
                {projectsArray}
            </Wrapper>
            <Link smooth to="/ben-barlow-portfolio/#contact" style={linkStyle}>
                Next
            </Link>
        </Section>
    )

}

export default Projects