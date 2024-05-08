import Section from "./components/Section.jsx";
import {collabApps, collabContent, collabText} from "./constants/index.js";
import {brainwaveSymbol, check} from "./assets/index.js";
import Button from "./components/Button.jsx";
import {LeftCurve, RightCurve} from "./components/design/Collaboration.jsx";

export const Collaboration  = () => {
    return (
        <Section crosses>
            <div className="container lg:flex">

                <div className="max-w-[25rem]">
                    <h2 className="h2 mb-4 md:mb-8">
                        AI Chat App for seamless collaboration
                    </h2>

                    <ul className="max-w-[22rem] mb-10 md:mb-14">
                        {collabContent.map(collab => (
                            <li key={collab.id} className="mb-3 py-3">
                                <div className="flex items-center">
                                    <img src={check}
                                         width={24}
                                         height={24}
                                         alt="check"
                                    />
                                    <h6 className="ml-5 body-2">{collab.title}</h6>
                                </div>

                                {collab.text && (
                                    <p className="body-2 mt-3 text-n-4">
                                        {collab.text}
                                    </p>
                                )}

                            </li>
                        ))}
                    </ul>

                    <Button className="mt-6 ml-8 mb-8"> Try it now </Button>
                </div>


                <div className="lg:ml-auto xl:w-[38rem] mt-4">
                    <p className="body-2 mb-20 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
                        {collabText}
                    </p>


                    <div className="relative left-1/2 flex w-[22rem] -translate-x-1/2
                                    aspect-square rounded-full border border-n-6
                                    scale:75 md:scale-100">

                        <div className="flex w-60 m-auto aspect-square
                         rounded-full border border-n-6">
                            <div className="w-[6rem] m-auto aspect-square
                            rounded-full p-[0.2rem] bg-conic-gradient ">
                                <div className="flex items-center justify-center
                                w-full h-full bg-n-8 rounded-full">
                                    <img src={brainwaveSymbol}
                                         width={48}
                                         height={48}
                                         alt="brainwave"
                                    />
                                </div>
                            </div>
                        </div>

                        <ul className="">
                            {collabApps.map((app, index) => (
                                <li key={app.id}
                                    className={`absolute top-0 left-1/2 h-1/2
                                    -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
                                    <div className={`relative -top-[1.6rem]
                                     w-[3.2rem] h-[3.2rem] bg-n-7 border flex
                                     border-n-1/15 rounded-xl -rotate-${index * 45}`}>
                                        <img src={app.icon}
                                             width={app.width}
                                             height={app.height}
                                             alt={app.title}
                                             className={`m-auto`}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <LeftCurve />
                        <RightCurve />
                    </div>


                </div>

            </div>
        </Section>
)
}
