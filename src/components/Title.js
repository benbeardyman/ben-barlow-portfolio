import Typewriter from "typewriter-effect"
import styled from "styled-components"


const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #004643;
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

const Title = () => {

    return (
        <Section id="title">
            <TitleHeader>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(250)
                            .typeString('<b')
                            .typeString('>en </b>arlow')
                            .typeString('<br/>')
                            .pauseFor(500)
                            .typeString('software')
                            .typeString('<br/>')
                            .typeString('developer')
                            .start()
                    }}
                />
            </TitleHeader>
        </Section>
    )
}

export default Title