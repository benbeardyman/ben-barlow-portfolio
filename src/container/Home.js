import { useState } from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Projects from "../components/Projects"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    
`

const Home = () => {

    return (
        <Wrapper>
            <About />
            <Projects />
            <Contact />
        </Wrapper>
    )

}

export default Home