import styled from "styled-components"

const Wrapper = styled.nav`
    height: 100vh;
    background-color: #abd1c6;
`
const Links = styled.ul`
    margin:0;
    list-style: none;
`


const NavBar = () => {

    return (
        <Wrapper>
            <Links>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </Links>
        </Wrapper>
    )

}

export default NavBar