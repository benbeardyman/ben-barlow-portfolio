import logo from "../images/logo.png"
import styled from "styled-components"
import { HashLink as Link } from "react-router-hash-link"

const Wrapper = styled.nav`
    display: flex;
    /* flex-direction: column; */
    /* align-items: left; */
    align-items: center;
    height: 100vh;
    background-color: #004643;
    border-right:3px solid;
    border-color: #f9bc60;
`
const NavLinks = styled.ul`
    display: flex;
    flex-direction:column;
    padding:0;
    list-style: none;
`

const NavLink = styled.li`
    width: 110px;
    border-top:.15rem solid;
    border-color: #e16162;
    padding: .7rem;
`

const linkStyle = {
    textDecoration: "none",
    color: "#f9bc60",
    fontSize: "1rem",
    fontWeight: "300",
    margin: "1rem"
}

const Logo = styled.img`
    width: 80px;
`

const NavBar = () => {

    return (
        <>
        
        <Wrapper>
            {/* <Logo src={logo}/> */}
            <NavLinks>
                <NavLink>
                    <Link smooth to="/ben-barlow-portfolio/#about" style={linkStyle}>About</Link>
                </NavLink>
                <NavLink>
                    <Link smooth to="/ben-barlow-portfolio/#tech_stack" style={linkStyle}>Tech Stack</Link>
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
        </>
    )

}

export default NavBar