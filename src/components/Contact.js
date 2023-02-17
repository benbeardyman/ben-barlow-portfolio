import styled from "styled-components"

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30vh;
    background-color: #f9bc60;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 80%;
`

const Header = styled.h2`
    color: #001e1d;
    padding: 1.5em;
`

const Contact = () => {

    return (
        <Section id="contact">
            <Wrapper>
                <Header>Find Me</Header>
            </Wrapper>
        </Section>
    )

}

export default Contact