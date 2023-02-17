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
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    height: 50%;
    width: 80%;
    background-color: #fffffe;
    border:4px solid;
    border-radius: 40px;
    border-color: #e16162;
`

const TechIcons = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 0.5em;
`

const TechWrap = styled.span`
    display: flex;
    align-items: center;
`
const iconStyle = {
    margin: "0.5rem",
    height: "2em",
    width: "2em"
}

const TechStack = () => {

    return (
        <Section id="tech_stack">
            <Wrapper>
                <TechIcons>
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

                    <TechWrap>
                        <Icon
                            icon="skill-icons:nodejs-light"
                            style={iconStyle}
                        />
                        NodeJs
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="logos:mocha"
                            style={iconStyle}
                        />
                        Mocha
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
                            icon="logos:cypress-icon"
                            style={iconStyle}
                        />
                        Cypress
                    </TechWrap>
                    <TechWrap>
                    <Icon
                        icon="skill-icons:expressjs-light"
                        style={iconStyle}
                    />
                    Express
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
                        icon="skill-icons:postgresql-light"
                        style={iconStyle}
                    />
                    PostgreSQL
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
                        icon="skill-icons:git"
                        style={iconStyle}
                    />
                    Git
                    </TechWrap>

                </TechIcons>

            </Wrapper>
        </Section>
    )

}

export default TechStack