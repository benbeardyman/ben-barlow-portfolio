import styled from "styled-components"
import { Icon } from '@iconify/react'

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30vh;
    background-color: #f9bc60;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 75vw;
`

const Header = styled.h2`
    color: #001e1d;
    padding: 1.5em;
`
const Email = styled.a`
    text-decoration: none;
    color: #001e1d;
`

const iconStyle = {
    margin: "0.5rem",
    height: "2em",
    width: "2em"
}

const Contact = () => {

    return (
        <Section id="contact">
            <Wrapper>
                <Header>Find Me</Header>
                <Email
                    href="mailto:benbcodes@gmail.com?subject=Hi!"
                    target="_blank">
                    benbcodes@gmail.com
                </Email>
                <a href="https://github.com/benbeardyman" target="_blank">
                    <Icon
                        icon="skill-icons:github-dark"
                        style={iconStyle}
                    />
                </a>
                <a href="https://www.linkedin.com/in/ben-barlow-codes/" target="_blank">
                    <Icon
                        icon="skill-icons:linkedin"
                        style={iconStyle}
                    />
                </a>
            </Wrapper>
        </Section>
    )

}

export default Contact