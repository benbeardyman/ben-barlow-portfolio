import styled from "styled-components"
import { HashLink as Link } from "react-router-hash-link"

const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    height: 100vh;
    background-color: #004643;
    border-right:5px solid;
    border-color: #001e1d;
`
const NavLinks = styled.ul`
    display: flex;
    flex-direction:column;
    justify-content: center;
    padding:0;
    list-style: none;
`

const NavLink = styled.li`
    width: 150%;
    border-top:.15rem solid;
    border-color: #001e1d;
    padding: 0.5rem;
`

const linkStyle = {
    textDecoration: "none",
    color: "#f9bc60",
    fontSize: "1.5rem",
    fontWeight: "light"
}

const NavBar = () => {

    return (
        <Wrapper>
            <NavLinks>
                <NavLink>
                    <Link smooth to="/ben-barlow-portfolio/#about" style={linkStyle}>About</Link>
                </NavLink>
                <NavLink>
                    <Link smooth to="/ben-barlow-portfolio/#projects" style={linkStyle}>Projects</Link>
                </NavLink>
                <NavLink>
                    <Link smooth to="/ben-barlow-portfolio/#contact" style={linkStyle}>Contact</Link>
                </NavLink>
                <NavLink/>
            </NavLinks>
        </Wrapper>
    )

}

export default NavBar