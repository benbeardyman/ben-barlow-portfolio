import ProjectItem from "./ProjectItem"
import styled from "styled-components"

const Wrapper = styled.section`
    height: 100vh;
    background-color: #abd1c6;
`

const Header = styled.h2`
    color: #001e1d;
`

const Projects = () => {

    return (
        <Wrapper id='projects'>
            <Header>Projects</Header>
        </Wrapper>
    )

}

export default Projects