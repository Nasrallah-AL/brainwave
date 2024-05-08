import Section from "./components/Section.jsx";
import {Heading} from "./components/Heading.jsx";
import { check, service1, service2, service3} from "./assets/index.js";
import {brainwaveServices, brainwaveServicesIcons} from "./constants/index.js";
import Generating from "./components/Generating.jsx";
import {Gradient, PhotoChatMessage, VideoBar, VideoChatMessage} from "./components/design/Services.jsx";

export const Services = () => {
    return (
        <Section id="how-to-use">
            <div className="container">
                <Heading title="Generative AI made for creators."
                        text="Brainwave unlocks the potential of AI-powered applications"
                />

                <div className="relative">
                    <div className="relative z-1 flex items-center
                overflow-hidden mb-5 p-8 border border-n-1/10 rounded-3xl
                h-[39rem] lg:p-20 xl:h-[46rem]">
                        <div className="absolute top-0 left-0
                     w-full h-full pointer-events-none md:w-3/5  xl:w-auto">
                            <img src={service1}
                                 className="w-full h-full object-cover md:object-right"
                                 width={800}
                                 height={730}
                                 alt="Smartest AI"
                            />
                        </div>

                        <div className="relative z-1 max-w-[17rem] ml-auto
                    max-sm:backdrop-blur-md max-sm:p-4 rounded-2xl max-sm:overflow-hidden">
                            <h4 className="h4">Smartest AI</h4>
                            <p className="body-2 text-n-3 mt-4 mb-12">Brainwave unlocks the potential of AI-powered
                                applications</p>
                            <ul className="body-2">
                                {brainwaveServices.map((service, index) => (
                                    <li key={index} className="flex items-start
                                 py-4 mt-3  first:border-none border-t  border-n-6">
                                        <img src={check}
                                             width={24}
                                             height={24}
                                             alt="check"/>
                                        <p className="ml-4">{service}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Generating className="absolute bottom-4 left-4 right-4 border border-n-1/10
                    lg:left-1/2 lg:-translate-x-1/2 lg:bottom-8" defaultText="Tuning the picture . . ."/>
                    </div>

                    <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                        <div className="relative min-h-[39rem] lg:min-h-[46rem]
                         border border-n-1/10 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0">
                                <img src={service2}
                                     className="w-full h-full object-cover "
                                     width={630}
                                     height={750}
                                     alt="Robot"
                                />
                            </div>

                            <div
                                className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                                <h4 className="h4 mb-4">Photo editing</h4>
                                <p className="body-2 mb-[3rem] text-n-3">
                                    Automatically enhance your photos using our AI app&apos;s
                                    photo editing feature. Try it now!
                                </p>
                            </div>

                            <PhotoChatMessage />
                        </div>

                        <div className="relative lg:min-h-[46rem]
                        rounded-3xl overflow-hidden p-4 bg-n-7">
                            <div className="px-4 py-12 lg:px-8">
                                <h4 className="h4">Video generation</h4>
                                <p className="body-2 text-n-3 mt-4">
                                    The world’s most powerful AI photo and video art generation engine
                                    . What will you create?
                                </p>
                                <ul className="flex items-center justify-between mt-8">
                                    {brainwaveServicesIcons.map((icon, index) => (
                                        <li key={index}
                                            className={`flex rounded-2xl items-center
                                             justify-center size-10 bg-n-6 md:size-15
                                             ${index === 2 && 'p-0.25 bg-conic-gradient size-12 md:size-[4.5rem]'}
                                             `}>
                                            <div className={`
                                            ${index === 2 && 
                                            'flex justify-center items-center bg-n-7 size-full rounded-[1rem]'}
                                            `}>
                                                <img src={icon}
                                                     width={24}
                                                     height={24}
                                                     alt={icon}
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative h-[20rem] md:h-[25rem]
                            bg-n-8 rounded-xl overflow-hidden group/s3">
                                <img src={service3}
                                     className="w-full h-full object-cover transition
                                     group-hover/s3:translate-x-20 group-hover/s3:scale-125 duration-[3s]"
                                     width={520}
                                     height={400}
                                     alt="Scary AI"
                                />
                                <VideoChatMessage />
                                <VideoBar />
                            </div>
                        </div>
                    </div>

                    <Gradient />
                </div>
            </div>

        </Section>
    )
}
