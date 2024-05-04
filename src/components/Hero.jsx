import Section from "./Section.jsx";
import {curve} from "../assets/index.js";
import Button from "./Button.jsx";

const Hero = () => {
    return (
        <Section  className="pt-[12rem] -mt-[5.25rem]"
                  crosses
                  crossesOffset="lg:translate-y-[5.25rem]"
                  customPaddings
                  id="hero"
        >
            <div className="container relative">
                <div className="relative z-1 max-w-[62rem]
                     mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <h1 className="h1 mb-6">
                        Explore the Possibilities of AI Chatting with {" "}
                        <span className="inline-block relative">
                             Brainwave {" "}
                            <img src={curve}
                                 className="absolute top-full w-full left-0 xl:-mt-2"
                                 width={624}
                                 height={28}
                                 alt="Curve"
                            />
                        </span>
                    </h1>

                    <p className="body-1 max-w-3xl mb-6 text-n-2 lg:mb-8 mx-auto">
                        Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.
                    </p>

                    <Button href="/pricing" white>
                        Get Started
                    </Button>
                </div>

            </div>

        </Section>
    )
}

export default Hero;
