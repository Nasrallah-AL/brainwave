import {pricing} from "./constants/index.js";
import Button from "./components/Button.jsx";
import {check} from "./assets/index.js";

export const PricingList = () => {
    return (
        <div className="flex gap-[1rem] max-lg:flex-wrap">
            {pricing.map((card, index) => (
                <div key={card.id}
                     className=" border border-n-1/10 max-lg:w-full h-full  bg-n-8 w-[19rem] lg:w-auto
                     rounded-[2rem]  px-6  odd:my-4 py-8  even:py-14 ">
                    <h4 className={`h4 ${card.color}`} >{card.title}</h4>
                    <p className="body-2 min-h-[4rem] text-n-1/50">{card.description}</p>


                    {
                        card.price && (
                            <div className="mt-flex flex-start items-center mt-12">
                                <span className="text-[3rem]">$</span>
                                <span className="text-[5.5rem] font-bold">{card.price}</span>
                                <span className="body-2 text-n-3 text-sm font-semibold">/month</span>
                            </div>
                        )
                    }

                    <div className={`mt-8 w-full ${card.id === "2" && "mt-[8rem]"}`}>
                        <Button white={card.id !== "2"} className="w-full">{card.id === "2" ? "Contact us" : "Get Started"}</Button>
                    </div>

                    <ul className="mt-6">
                        {card.features.map((feature, index) => (
                            <li key={index} className="py-5
                                 border-t border-n-6 flex flex-start items-start">
                                <img src={check}
                                     width={24}
                                     height={24}
                                     alt="check"
                                />
                                <p className="ml-4 body-2 ">{feature}</p>

                            </li>
                        ))}
                    </ul>

                </div>
            ))}

        </div>
    )
}
