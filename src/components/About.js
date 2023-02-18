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
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
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

const ProfileImage = styled.img`
    margin: 20px;
    border:4px solid;
    border-radius: 50%;
    border-color: #001e1d;
    height: 8em;
`

const About = () => {

    return (
        <Section id="about">
            <Wrapper>
                <p>I'm an Edinburgh based software developer. I see myself as full stack but leaning towards the front end</p>
                <ProfileImage src={pixelMug}/>
            </Wrapper>
        </Section>
    )

}

export default About