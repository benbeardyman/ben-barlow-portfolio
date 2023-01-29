import styled from "styled-components"
import pixelMug from "../images/pixel_mug.jpg"



const Wrapper = styled.section`
    height: 100vh;
    background-color: #004643;
`

const Header = styled.h2`
    color: #fffffe;
`

const ProfileImage = styled.img`
    border-radius: 30%;
`

const About = () => {

    return (
        <Wrapper id="about">
            <Header>About</Header>
            <ProfileImage src={pixelMug} height="200" />
        </Wrapper>
    )

}

export default About