import styled from "styled-components"
import pixelMug from "../images/pixel_mug.jpg"



const Wrapper = styled.div`
    height: 100vh;
    background-color: #004643;
`

const Header = styled.h2`
    color: #fffffe;
`

const About = () => {

    return (
        <section id="about">
            <Wrapper>
                <Header>About</Header>
                <img src={pixelMug} height="200" />
            </Wrapper>
        </section>
    )

}

export default About