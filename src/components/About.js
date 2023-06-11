import styled from "styled-components"
import pixelMug from "../images/pixel_mug.jpg"
import { HashLink as Link } from "react-router-hash-link"

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
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
        min-height: 40vh;
        width:75vw;
    }
    @media screen and (max-width: 767px) {
        width:90vw;
    }
`

const linkStyle = {
    textDecoration: "none",
    color: "#f9bc60",
    fontSize: "1rem",
    fontWeight: "300",
    margin: "1rem"
}

const Headline = styled.h3`
    padding-top:2rem;
    padding-right: 4rem;
    padding-left: 4rem;
    text-align: center;
    color: #001e1d;
    @media screen and (max-width: 991px) {
    padding-right: 2rem;
    padding-left: 2rem;
    }
    @media screen and (max-width: 767px) {
    font-size: 1.1rem;
    padding-top: 1rem;
    padding-right: 2rem;
    padding-left: 2rem;
    }
    @media screen and (max-width: 479px) {
    font-size: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
    }
`

const Description = styled.p`
    padding-top:1rem;
    padding-right: 4rem;
    padding-left: 4rem;
    text-align: center;
    @media screen and (max-width: 991px) {
    padding-right: 2rem;
    padding-left: 2rem;
    }
    @media screen and (max-width: 767px) {
    font-size: 1rem;
    padding-top: .5rem;
    padding-right: 2rem;
    padding-left: 2rem;
    }
    @media screen and (max-width: 479px) {
    font-size: .9rem;
    padding-top: 0rem;
    padding-right: 1rem;
    padding-left: 1rem;
    }
`

const ProfileImage = styled.img`
    border:4px solid;
    border-radius: 50%;
    border-color: #001e1d;
    height: 8em;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    @media screen and (max-width: 479px) {
    margin-top: 1rem;
    margin-bottom: 1.8rem;
    height: 6rem;
    }
`

const About = () => {

    return (
        <Section id="about">
            <Link smooth to="/ben-barlow-portfolio/#title" style={linkStyle}>
                Previous
            </Link>
            <Wrapper>
                <Headline>
                    I am a naturally inquisitive newly qualified Software Developer with extensive experience in retail and hospitality. 
                </Headline>
                <Description>
                    <p>
                        For the past 5 years I worked in a dynamic team growing a street food startup into a flourishing multi-location business. This experience honed skills in communication, collaboration and analysis  whilst also giving me the opportunity to be creative through branding, marketing and web-design.
                    </p> 
                    <p>
                        Driven by my fascination with the inner workings of software systems I’ve used previously, I chose the CodeClan bootcamp to pursue a new career in technology. I am now excitedly looking for my first role using my new skills.
                    </p>
                </Description>
                <ProfileImage src={pixelMug} />
            </Wrapper>
            <Link smooth to="/ben-barlow-portfolio/#tech_stack" style={linkStyle}>
                Next
            </Link>
        </Section>
    )

}

export default About