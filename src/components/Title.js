import { Icon } from '@iconify/react'


const Title = () => {

    const scrollDown = () => {
        const aboutComponent = document.getElementById('about');
        aboutComponent.scrollIntoView({ behavior: 'smooth' });
    };
    

    return (
        <div id="title" className="flex flex-col items-center justify-center min-h-screen relative">
            <div className="flex">
                <h1 className="text-coral text-8xl text-center font-title slide-top mr-4" >
                    Ben
                </h1>
                <h1 className="text-coral text-8xl text-center font-title slide-bottom" >
                    Barlow
                </h1>
            </div>
            <h2 className="text-coral text-4xl text-center font-title animate-fade">
                Software Developer
            </h2>
            <div className="absolute bottom-0 mb-8" >
            <Icon
                    icon="simple-line-icons:arrow-down"
                    onClick={scrollDown}
                    color="#ff9c99"
                    className="h-12 w-12 opacity-70 cursor-pointer hover:opacity-100 animate-fade" 
                />
            </div>
        </div>
    )
}

export default Title