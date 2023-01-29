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
    height: 60%;
    width: 80%;
    background-color: #e8e4e6;
    border:5px solid;
    border-radius: 15px;
    border-color: #001e1d;
`

const Header = styled.h2`
    color: #001e1d;
`

const Contact = () => {

    return (
        <Section id="contact">
            <Wrapper>
                <Header>Contact</Header>
            </Wrapper>
        </Section>
    )

}

export default Contact