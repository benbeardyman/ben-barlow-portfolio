import styled from "styled-components"
import { HashLink as Link } from "react-router-hash-link"
// import { NavHashLink as NavLink } from "react-router-hash-link"

const Wrapper = styled.nav`
    height: 100vh;
    background-color: #abd1c6;
    border-right:5px solid;
    border-color: #001e1d;
`
const Links = styled.ul`
    margin:0;
    list-style: none;
`

const NavBar = () => {

    return (
        <Wrapper>
            <Links>
                <li>
                    <Link smooth to="/ben-barlow-portfolio/#about">About</Link>
                </li>
                <li>
                    <Link smooth to="/ben-barlow-portfolio/#projects">Projects</Link>
                </li>
                <li>
                    <Link smooth to="/ben-barlow-portfolio/#contact">Contact</Link>
                </li>
            </Links>
        </Wrapper>
    )

}

export default NavBar