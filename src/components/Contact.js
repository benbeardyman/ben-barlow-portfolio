import styled from "styled-components"

const Wrapper = styled.section`
    height: 100vh;
    background-color: #004643;
`

const Header = styled.h2`
    color: #fffffe;
`

const Contact = () => {

    return (
        <Wrapper id="contact">
            <Header>Contact</Header>
        </Wrapper>
    )

}

export default Contact