import Section from "./Section.jsx";
import {Heading} from "./Heading.jsx";
import {benefits} from "../constants/index.js";
import Arrow from "../assets/svg/Arrow.jsx";
import {GradientLight} from "./design/Benefits.jsx";
import ClipPath from "../assets/svg/ClipPath.jsx";

export const Benefits = () => {
    return (
        <Section id="features">
            <div className="container relative z-2 ">
                <Heading className="md:max-w-md lg:max-w-2xl text-center"
                         title="Chat Smarter, Not Harder with Brainwave"/>

                <div className="flex flex-wrap gap-10 mb-10">
                    {benefits.map(benefit => (
                        <div key={benefit.id}
                             className="block p-0.5 relative bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                             style={{
                                 backgroundImage: `url(${benefit.backgroundUrl})`,
                             }}
                        >
                            <div className="relative z-2 flex flex-col min-h-[22rem] p-10 pointer-events-none">
                                <h5 className="h5 mb-5">{benefit.title}</h5>
                                <p className="body-2 text-n-3 mb-6">{benefit.text}</p>
                                <div className="mt-auto flex items-center">
                                    <img src={benefit.iconUrl}
                                         height={48}
                                         width={48}
                                         alt={benefit.title}
                                    />
                                    <p className="ml-auto font-code text-n-1 uppercase text-xs font-bold tracking-wider">
                                        explore more
                                    </p>
                                    <Arrow />
                                </div>
                            </div>

                            {benefit.light && <GradientLight />}
                            <div className="absolute inset-0.5 bg-n-8"
                                 style={{ clipPath: "url(#benefits)" }}
                            >
                                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-15">
                                    {benefit.imageUrl && (
                                        <img src={benefit.imageUrl}
                                             width={380}
                                             height={360}
                                             alt={benefit.title}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ClipPath />

        </Section>
    )
}
