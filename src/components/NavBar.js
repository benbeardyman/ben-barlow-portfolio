import logo from "../images/logo.png"
import styled from "styled-components"
import { HashLink as Link } from "react-router-hash-link"
import { Icon } from '@iconify/react'

const Wrapper = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    background-color: #004643;
    border-right:3px solid;
    border-color: #f9bc60;
`

const NavLinks = styled.div`
    grid-area: links;
    display: flex;
    flex-direction:column;
    padding:0;
    list-style: none;
`

const NavLink = styled.div`
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
    width: 100px;
    grid-area: logo;
`

const Placeholder = styled.div`
    height: 80px;
`

// const hamburger = {
//     height: "2em",
//     width: "2em",
//     position: "absolute",
//     top: "50%",
//     right: "25px",
//     transform: "translateY(-50%)",
//     display: "none"
// }

const NavBar = () => {

    return (
        <>
            <Wrapper>
                <Link smooth to="/ben-barlow-portfolio/#title">
                    <Logo src={logo} />
                </Link>
                {/* <button className="hamburger">
                    <Icon icon="charm:menu-hamburger" style={hamburger}>
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </Icon>
                </button> */}
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
                    <NavLink />
                </NavLinks>
                <Placeholder />
            </Wrapper>
        </>
    )

}

export default NavBar