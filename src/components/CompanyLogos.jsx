import {companyLogos} from "../constants/index.js";

const CompanyLogos = ({ className }) => {
    return (
        <div className={className}>
            <h5 className="tagline text-n-1/50 text-center mb-8">
                HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT
            </h5>

            <ul className="flex">
                {companyLogos.map((logo, index) => (
                    <li key={index} className="flex-1 flex items-center justify-center  h-[8.5rem]">
                        <img
                            src={logo}
                            alt="company logo"
                            width={134}
                            height={28}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CompanyLogos;