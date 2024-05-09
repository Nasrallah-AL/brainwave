import Section from "./Section.jsx";
import {smallSphere, stars} from "../assets/index.js";
import {Heading} from "./Heading.jsx";
import {PricingList} from "../PricingList.jsx";
import {LeftLine, RightLine} from "./design/Pricing.jsx";

export const Pricing = () => {
    return (
        <Section id="pricing" className="overflow-hidden">
            <div className="container relative z-2">

                <div className="hidden relative lg:flex justify-center">
                    <img src={smallSphere}
                         className="relative z-1 transition-all
                         hover:animate-pulse origin-center"
                         width={255}
                         height={255}
                         alt="Small Sphere"
                    />

                    <div className="absolute top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2 w-[60rem] pointer-events-none">
                        <img src={stars}
                             className="w-full"
                             width={950}
                             height={400}
                             alt="Stars"
                        />
                    </div>
                </div>

                <Heading tag="GET STARTED WITH BRAINWAVE"
                         title="Pay for Quality, not Quanity"
                         className="mt-[8rem]"
                />

                <div className="relative">
                    <PricingList />
                    <LeftLine />
                    <RightLine />
                </div>

                <div className="flex justify-center mt-10">
                    <a href="#pricing" className="text-xs font-code font-bold
                    uppercase leading-normal border-b">
                        See the full details
                    </a>
                </div>
            </div>
        </Section>
    )
}
