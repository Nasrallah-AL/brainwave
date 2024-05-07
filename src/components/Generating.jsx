import {loading} from "../assets/index.js";
import {TypeAnimation} from "react-type-animation";

const Generating = ({ className }) => {
    return (
        <div className={`
        flex items-center h-[3.5rem] px-6 bg-n-8/80 text-base rounded-[1.7rem]
        ${className ?? ''}
        `}>
            <img
                className="mr-4 size-5 animate-spin"
                src={loading}
                alt="loading"
            />
            <TypeAnimation
                sequence={[

                    "AI is thinking...",
                    1000,
                    "Generating insights...",
                    1000,
                    "Processing data...",
                    1000,
                    "Analyzing patterns...",
                    1000,
                    "Searching through information...",
                    1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
        </div>
    )
}

export default Generating;