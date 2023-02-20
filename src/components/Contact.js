import styled from "styled-components"
import { Icon } from '@iconify/react'

const Section = styled.section`
    display: flex;
    justify-content: center;
    min-height: 25vh;
    background-color: #f9bc60;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    width: 75vw;
`

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
            <Wrapper>
                <Spacer/>
                <Header>Find Me:</Header>
                <div>
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
                </div>
                <p>email: <Email
                    href="mailto:benbcodes@gmail.com?subject=Hi!"
                    target="_blank">
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