import React, { useState, useEffect } from "react"
import Typewriter from "typewriter-effect"
import styled from "styled-components"


const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #004643;
`

const TitleHeader = styled.h1`
    color: #f9bc60;
    font-size: 6em;
    font-weight: 400;
    text-align: center;
`

const Title = () => {

    return (
        <Section id="title">
            <TitleHeader>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            // .html(false)
                            .changeDelay(250)
                            // .typeString('<b>en </b>arlow')
                            .typeString('<b')
                            .typeString('>en </b>arlow')
                            .typeString('<br/>')
                            .pauseFor(500)
                            .typeString('junior software developer')
                            .start()
                    }}
                />

            </TitleHeader>
        </Section>
    )

}

export default Title