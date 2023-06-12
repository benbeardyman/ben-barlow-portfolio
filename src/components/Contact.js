import styled from "styled-components"
import { Icon } from '@iconify/react'
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
    align-items: flex-end;
    justify-content: space-evenly;
    width: 75vw;
`

const linkStyle = {
    textDecoration: "none",
    color: "#f9bc60",
    fontSize: "1rem",
    fontWeight: "300",
    margin: "1rem"
}

const Header = styled.h2`
    color: #001e1d;
`

const Email = styled.a`
    text-decoration: none;
    color: #001e1d;
`

const iconStyle = {
    margin: "0.5rem",
    height: "2rem",
    width: "2rem",
    paddingLeft: ".5rem"
}

const Info = styled.p`
`
const Spacer = styled.div`
    height: 2rem;
`

const Contact = () => {

    return (
        <Section id="contact">
            <Link smooth to="/ben-barlow-portfolio/#projects" style={linkStyle}>
                Previous
            </Link>
            <Wrapper>
                <Spacer/>
                <Header>Find Me:</Header>
                <div>
                <a href="https://github.com/benbeardyman" target="_blank" rel="noreferrer">
                    <Icon
                        icon="skill-icons:github-dark"
                        style={iconStyle}
                    />
                </a>
                <a href="https://www.linkedin.com/in/ben-barlow-codes/" target="_blank" rel="noreferrer">
                    <Icon
                        icon="skill-icons:linkedin"
                        style={iconStyle}
                    />
                </a>
                </div>
                <p>email: <Email
                    href="mailto:benbcodes@gmail.com?subject=Hi!"
                    target="_blank" rel="noreferrer">
                    benbcodes@gmail.com
                </Email>
                </p>
                <Info>website by me 2023</Info>
                <Spacer/>
            </Wrapper>
        </Section>
    )

}

export default Contact