import styled from "styled-components"
import pixelMug from "../images/pixel_mug.jpg"

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
    /* align-items: flex-end; */
    flex-wrap: wrap;
    /* gap: 16px; */
    height: 70%;
    width: 80%;
    background-color: #fffffe;
    border:4px solid;
    border-radius: 15px;
    border-color: #e16162;
`

const Header = styled.h2`
    color: #001e1d;
`

const ProfileImage = styled.img`
    margin: 20px;
    border:4px solid;
    border-radius: 15px;
    border-color: #001e1d;
`

const About = () => {

    return (
        <Section id="about">
            <Wrapper>
                <Header>About</Header>
                <p>I'm an Edinburgh based software developer. I see myself as full stack but leaning towards the front end</p>
                <ProfileImage src={pixelMug} height="200" />
            </Wrapper>
        </Section>
    )

}

export default About