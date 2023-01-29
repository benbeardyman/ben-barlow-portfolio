import styled from "styled-components"
import { HashLink as Link } from "react-router-hash-link"

const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    height: 100vh;
    background-color: #abd1c6;
    border-right:5px solid;
    border-color: #001e1d;
`
const Links = styled.ul`
    display: flex;
    flex-direction:column;
    justify-content: center;
    margin:0;
    padding: .75rem;
    list-style: none;
`

const linkStyle = {
  textDecoration: "none",
  color: "#001e1d",
  fontSize: "1.5rem",
  fontWeight: "bold"
}

const NavBar = () => {

    return (
        <Wrapper>
            <Links>
                <li>
                    <Link smooth to="/ben-barlow-portfolio/#about" style={linkStyle}>About</Link>
                </li>
                <li>
                    <Link smooth to="/ben-barlow-portfolio/#projects" style={linkStyle}>Projects</Link>
                </li>
                <li>
                    <Link smooth to="/ben-barlow-portfolio/#contact" style={linkStyle}>Contact</Link>
                </li>
            </Links>
        </Wrapper>
    )

}

export default NavBar