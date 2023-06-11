import styled from "styled-components"
import { HashLink as Link } from "react-router-hash-link"


const Wrapper = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const NavLink = styled.div`
    width: 9rem;
    border-top:.15rem solid;
    border-left:.15rem solid;
    border-right:.15rem solid;
    border-color: #e16162;
    padding: .7rem;
    text-align: center;
    font-size:1.4rem;
`
const NavLinkBottom = styled.div`
    width: 9rem;
    border:.15rem solid;
    border-color: #e16162;
    padding: .7rem;
    text-align: center;
    font-size:1.4rem;
`

const linkStyle = {
    textDecoration: "none",
    color: "#f9bc60",
    fontWeight: "300",
    margin: "1rem"
}

const MobileNav = ({ toggleMobileNav }) => {
    return (
        <Wrapper>
            <NavLink>
                <Link smooth to="/ben-barlow-portfolio/#about" style={linkStyle} onClick={toggleMobileNav}>
                    About
                </Link>
            </NavLink>
            <NavLink>
                <Link smooth to="/ben-barlow-portfolio/#tech_stack" style={linkStyle} onClick={toggleMobileNav}>
                    Tech Stack
                </Link>
            </NavLink>
            <NavLink>
                <Link smooth to="/ben-barlow-portfolio/#projects" style={linkStyle} onClick={toggleMobileNav}>
                    Projects
                </Link>
            </NavLink>
            <NavLinkBottom>
                <Link smooth to="/ben-barlow-portfolio/#contact" style={linkStyle} onClick={toggleMobileNav}>
                    Contact
                </Link>
            </NavLinkBottom>
        </Wrapper>
    );
};


export default MobileNav