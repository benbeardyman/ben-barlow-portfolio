import Typewriter from "typewriter-effect"
import { HashLink as Link } from "react-router-hash-link"

const linkStyle ="no-underline text-coral text-lg font-semibold m-4"

const Title = () => {

    return (
        <div id="title" className="flex flex-col items-center justify-between min-h-screen">
            <div/>
            <div className="text-coral text-8xl text-center" >
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(250)
                            .typeString('Ben Barlow')
                            .typeString('<br/>')
                            .pauseFor(500)
                            .typeString('software')
                            .typeString('<br/>')
                            .typeString('developer')
                            .start()
                    }}
                />
            </div>
            <Link smooth to="/ben-barlow-portfolio/#about" className={linkStyle}>
                Next
            </Link>
        </div>
    )
}

export default Title