import styled from "styled-components"
import pixelMug from "../images/pixel_mug.jpg"

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #004643;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-height: 50vh;
    width: 75vw;
    background-color: #fffffe;
    border:4px solid;
    border-radius: 40px;
    border-color: #e16162;
    @media screen and (max-width: 991px) {
        width:75vw;
    }
    @media screen and (max-width: 767px) {
        width:90vw;
    }
`

const Headline = styled.h3`
    padding-top:2rem;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    text-align: center;
    color: #001e1d;
`

const Description = styled.p`
    padding: 1.5rem;
    text-align: center;
`

const ProfileImage = styled.img`
    border:4px solid;
    border-radius: 50%;
    border-color: #001e1d;
    height: 8em;
    margin-top:1rem;
    margin-bottom: 2rem;
`

const About = () => {

    return (
        <Section id="about">
            <Wrapper>
                <Headline>
                    I'm an Edinburgh based full-stack Software Developer, currently completing the Professional Software Development course at CodeClan.
                </Headline>
                <Description>
                    I have extensive experience in hospitality, management, marketing and design. My past 5 years have centred around a fast growing hospitality startup evolving from a street food business to a flourishing operation with two permanent restaurants and an array of outside catering units, giving me a particular curiosity for the workings of digital hospitality systems.
                </Description>
                <ProfileImage src={pixelMug} />
            </Wrapper>
        </Section>
    )

}

export default About