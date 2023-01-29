import styled from "styled-components"

const Wrapper = styled.div`
    height: 100vh;
    background-color: #004643;
`

const Header = styled.h2`
    color: #fffffe;
`

const Contact = () => {

    return (
        <section id="contact">
            <Wrapper>
                <Header>Contact</Header>
            </Wrapper>
        </section>
    )

}

export default Contact