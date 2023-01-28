import styled from "styled-components"

const Wrapper = styled.div`
    height: 100vh;
    background-color: #004643;
`

const Header = styled.h2`
    color: #fffffe;
`

const About = () => {

    return (
        <Wrapper>
            <Header>About</Header>
        </Wrapper>
    )

}

export default About