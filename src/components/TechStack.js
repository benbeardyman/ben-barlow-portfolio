import styled from "styled-components"
import { Icon } from '@iconify/react'


const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
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
        height: 2em;
        width: 2em;
        margin: .5rem;
        padding-right: 1rem;
    }
    @media screen and (max-width: 479px) {
        align-items: center;
        & > span > :first-child {
            height: 1.7em;
            width: 1.7em;
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
    height: 2em;
        width: 2em;
        margin: .5rem;
        padding-right: 1rem;
    }
    @media screen and (max-width: 479px) {
        align-items: center;
        & > span > :first-child {
            height: 1.7em;
            width: 1.7em;
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
        height: 2em;
        width: 2em;
        margin: .5rem;
        padding-right: 1rem;
    }
    @media screen and (max-width: 479px) {
        align-items: center;
        & > span > :first-child {
            height: 1.7em;
            width: 1.7em;
            margin: 0;
            padding-right: 0;
            padding-bottom: .25rem;
        }
    }
`

const Header = styled.h3`
    font-size: 1.3rem;
    @media screen and (max-width: 479px) {
    font-size: .9rem;
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
                        />
                        JavaScript
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:react-dark"
                        />
                        React
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:html"
                        />
                        HTML
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:css"
                        />
                        CSS
                    </TechWrap>
                </FrontEnd>
                <BackEnd>
                    <Header>Back-End</Header>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:python-dark"
                        />
                        Python
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:flask-light"
                        />
                        Flask
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:java-light"
                        />
                        Java
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:spring-light"
                        />
                        Spring
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:nodejs-light"
                        />
                        Node.js
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:expressjs-light"
                        />
                        Express.js
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:jest"
                        />
                        Jest
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="logos:mocha"
                        />
                        Mocha
                    </TechWrap>
                </BackEnd>
                <Misc>
                    <Header>Miscellaneous</Header>
                    <TechWrap>
                        <Icon
                            icon="logos:cypress-icon"
                        />
                        Cypress
                    </TechWrap>
                    <TechWrap>
                        <Icon
                            icon="skill-icons:mongodb"
                        />
                        MongoDB
                    </TechWrap>

                    <TechWrap>
                        <Icon
                            icon="skill-icons:postgresql-light"
                        />
                        PostgreSQL
                    </TechWrap>

                    <TechWrap>
                        <Icon
                            icon="skill-icons:git"
                        />
                        Git
                    </TechWrap>
                </Misc>
            </Wrapper>
        </Section>
    )

}

export default TechStack