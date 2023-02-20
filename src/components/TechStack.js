import styled from "styled-components"
import { Icon } from '@iconify/react'


const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #004643;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    min-height: 50vh;
    width: 75vw;
    background-color: #fffffe;
    border:4px solid;
    border-radius: 40px;
    border-color: #e16162;
    padding-top: 1rem;
    padding-bottom: 1rem;
    @media screen and (max-width: 991px) {
        width:75vw;
    }
    @media screen and (max-width: 767px) {
        width:90vw;
    }
`

const TechWrap = styled.span`
    display: flex;
    align-items: center;
    font-weight: 300;
    @media screen and (max-width: 479px) {
        flex-direction: column;
        font-weight: 100;
        font-size: .8rem;
        padding-bottom:.5rem;
    }
`

const FrontEnd = styled.div`
    display: flex;
    flex-direction: column;
    & > span > :first-child {
            margin: .5rem;
            padding-right: 1rem;
            height: 2em;
            width: 2em;
    }
    @media screen and (max-width: 479px) {
        align-items: center;
        & > span > :first-child {
            margin: 0;
            padding-right: 0;
            padding-bottom: .25rem;
        }
    }
`

const BackEnd = styled.div`
    display: flex;
    flex-direction: column;
    & > span > :first-child {
            margin: .5rem;
            padding-right: 1rem;
            height: 2em;
            width: 2em;
    }
    @media screen and (max-width: 479px) {
        align-items: center;
        & > span > :first-child {
            margin: 0;
            padding-right: 0;
            padding-bottom: .25rem;
        }
    }
`

const Misc = styled.div`
    display: flex;
    flex-direction: column;
    & > span > :first-child {
            margin: .5rem;
            padding-right: 1rem;
            height: 2em;
            width: 2em;
    }
    @media screen and (max-width: 479px) {
        align-items: center;
        & > span > :first-child {
            margin: 0;
            padding-right: 0;
            padding-bottom: .25rem;
        }
    }
`

const Header = styled.h3`
@media screen and (max-width: 479px) {
        font-size: 1rem;
    }
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
                            // style={iconStyle}
                        />
                        JavaScript
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:react-dark"
                            // style={iconStyle}
                        />
                        React
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:html"
                            // style={iconStyle}
                        />
                        HTML
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:css"
                            // style={iconStyle}
                        />
                        CSS
                    </TechWrap>
                </FrontEnd>
                <BackEnd>
                    <Header>Back-End</Header>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:python-dark"
                            // style={iconStyle}
                        />
                        Python
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:flask-light"
                            // style={iconStyle}
                        />
                        Flask
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:java-light"
                            // style={iconStyle}
                        />
                        Java
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:spring-light"
                            // style={iconStyle}
                        />
                        Spring
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:nodejs-light"
                            // style={iconStyle}
                        />
                        Node.js
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:expressjs-light"
                            // style={iconStyle}
                        />
                        Express.js
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:jest"
                            // style={iconStyle}
                        />
                        Jest
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="logos:mocha"
                            // style={iconStyle}
                        />
                        Mocha
                    </TechWrap>
                </BackEnd>
                <Misc>
                    <Header>Miscellaneous</Header>
                    <TechWrap>
                        <Icon
                            icon="logos:cypress-icon"
                            // style={iconStyle}
                        />
                        Cypress
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:mongodb"
                            // style={iconStyle}
                        />
                        MongoDB
                    </TechWrap>

                    <TechWrap>
                        <Icon
                            icon="skill-icons:postgresql-light"
                            // style={iconStyle}
                        />
                        PostgreSQL
                    </TechWrap>

                    <TechWrap>
                        <Icon
                            icon="skill-icons:git"
                            // style={iconStyle}
                        />
                        Git
                    </TechWrap>
                </Misc>
            </Wrapper>
        </Section>
    )

}

export default TechStack