import Typewriter from "typewriter-effect"
import styled from "styled-components"
import { HashLink as Link } from "react-router-hash-link"


const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`

const TitleHeader = styled.div`
    color: #f9bc60;
    font-size: 6rem;
    font-weight: 400;
    text-align: center;
    @media screen and (max-width: 767px) {
        font-size:  3rem;
    }
    @media screen and (max-width: 479px) {
        font-size:  2.5rem;
    }
`

const linkStyle = {
    textDecoration: "none",
    color: "#f9bc60",
    fontSize: "1rem",
    fontWeight: "300",
    margin: "1rem"
}

const Title = () => {

    return (
        <Section id="title">
            <TitleHeader>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(250)
                            .typeString('Ben Barlow')
                            .typeString('<br/>')
                            .pauseFor(500)
                            .typeString('software')
                            .typeString('<br/>')
                            .typeString('developer')
                            .start()
                    }}
                />
            </TitleHeader>
            <Link smooth to="/ben-barlow-portfolio/#about" style={linkStyle}>
                Next
            </Link>
        </Section>
    )
}

export default Title