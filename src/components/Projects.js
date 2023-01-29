import styled from "styled-components"

const Wrapper = styled.div`
    height: 100vh;
    background-color: #abd1c6;
`

const Header = styled.h2`
    color: #001e1d;
`

const Projects = () => {

    return (
        <section id='projects'>
            <Wrapper>
                <Header>Projects</Header>
            </Wrapper>
        </section>
    )

}

export default Projects