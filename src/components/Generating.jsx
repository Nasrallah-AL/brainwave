import {loading} from "../assets/index.js";

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
            AI is generating
            {
                [...Array(3)].map((_, index) => (
                    <span key={index} className={`animate-pulse`}>
                        &nbsp;.
                    </span>
                ))
            }
        </div>
    )
}

export default Generating;