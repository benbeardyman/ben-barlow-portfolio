import React, { useState, useEffect } from "react"
import styled from "styled-components"



const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #004643;
`

const TitleHeader = styled.h1`
    color: #f9bc60;
    font-size: 6em;
    font-weight: 400;
`

const Title = () => {

    const [text, setText] = useState("")
    const [fullText, setFullText] = useState("<b>en </b>arlow")
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
                setText(text + fullText[index])
                setIndex(index + 1)
            }, 200)
        }
    }, [index])

    return (
        <Section id="title">
            <TitleHeader>
                {text}
                {/* {"<b>"}en {"</b>"}arlow */}
            </TitleHeader>
        </Section>
    )

}

export default Title