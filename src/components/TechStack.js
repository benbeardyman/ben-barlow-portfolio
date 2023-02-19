import styled from "styled-components"
import { Icon } from '@iconify/react'


const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #004643;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 50vh;
    width: 75vw;
    background-color: #fffffe;
    border:4px solid;
    border-radius: 40px;
    border-color: #e16162;
    padding-top: 1rem;
`

const TechWrap = styled.span`
    display: flex;
    align-items: center;
`
const iconStyle = {
    margin: ".5rem",
    paddingRight: "1rem",
    height: "2em",
    width: "2em"
}

const FrontEnd = styled.div`
    display: flex;
    flex-direction: column;
`

const BackEnd = styled.div`
    display: flex;
    flex-direction: column;
`

const Misc = styled.div`
    display: flex;
    flex-direction: column;
`

const Header = styled.h3`
`

const TechStack = () => {

    return (
        <Section id="tech_stack">
            <Wrapper>
                <FrontEnd>
                    <Header>Front-End</Header>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:javascript"
                            style={iconStyle}
                        />
                        JavaScript
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:react-dark"
                            style={iconStyle}
                        />
                        React
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:html"
                            style={iconStyle}
                        />
                        HTML
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:css"
                            style={iconStyle}
                        />
                        CSS
                    </TechWrap>
                </FrontEnd>
                <BackEnd>
                    <Header>Back-End</Header>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:python-dark"
                            style={iconStyle}
                        />
                        Python
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:flask-light"
                            style={iconStyle}
                        />
                        Flask
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:java-light"
                            style={iconStyle}
                        />
                        Java
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:spring-light"
                            style={iconStyle}
                        />
                        Spring
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:nodejs-light"
                            style={iconStyle}
                        />
                        Node.js
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:expressjs-light"
                            style={iconStyle}
                        />
                        Express.js
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:jest"
                            style={iconStyle}
                        />
                        Jest
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="logos:mocha"
                            style={iconStyle}
                        />
                        Mocha
                    </TechWrap>
                </BackEnd>
                <Misc>
                    <Header>Miscellaneous</Header>
                    <TechWrap>
                        <Icon
                            icon="logos:cypress-icon"
                            style={iconStyle}
                        />
                        Cypress
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:mongodb"
                            style={iconStyle}
                        />
                        MongoDB
                    </TechWrap>

                    <TechWrap>
                        <Icon
                            icon="skill-icons:postgresql-light"
                            style={iconStyle}
                        />
                        PostgreSQL
                    </TechWrap>

                    <TechWrap>
                        <Icon
                            icon="skill-icons:git"
                            style={iconStyle}
                        />
                        Git
                    </TechWrap>
                </Misc>
            </Wrapper>
        </Section>
    )

}

export default TechStack