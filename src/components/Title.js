import Typewriter from "typewriter-effect"

const Title = () => {

    return (
        <div id="title" className="flex flex-col items-center justify-center min-h-screen">
            <div className="text-coral text-8xl text-center font-title" >
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
        </div>
    )
}

export default Title