import styled from "styled-components"
import pixelMug from "../images/pixel_mug.jpg"
import mugshot from "../images/mugshot.jpg"

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

const ProfileImage = styled.img`
    margin: 20px;
    border:5px solid;
    border-radius: 15px;
    border-color: #001e1d;
`

const About = () => {

    return (
        <Section id="about">
            <Wrapper>
                <Header>About</Header>
                <ProfileImage src={pixelMug} height="200" />
            </Wrapper>
        </Section>
    )

}

export default About