import styled from "styled-components"

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #004643;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    height: 50%;
    width: 80%;
    background-color: #fffffe;
    border:4px solid;
    border-radius: 40px;
    border-color: #e16162;
`

const Header = styled.h2`
    color: #001e1d;
`

const TechStack = () => {

    return (
        <Section id="tech_stack">
            <Wrapper>
                <Header>Tech Stack</Header>
            </Wrapper>
        </Section>
    )

}

export default TechStack