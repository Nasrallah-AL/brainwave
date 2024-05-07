import {notification1} from "../assets/index.js";
import {notificationImages} from "../constants/index.js";

const Notification = ({className}) => {
    return (
        <div
            className={`
            flex bg-n-9/40 items-center
            rounded-2xl border border-n-1/10
            backdrop-blur p-4 pr-6
            gap-5
            ${className || ""}`}
        >
            <img
                src={notification1}
                alt="notification"
                width={62}
                height={62}
                className="object-contain rounded-2xl"
            />

            <div className="flex-1">
                <h6 className="mb-1 font-semibold text-base">Code generation</h6>

                <div className="flex justify-between items-center">
                    <div>
                        <ul className="flex -m-0.5">
                            {notificationImages.map((image, i) => (
                                <li key={i} className="flex size-6
                                 rounded-full overflow-hidden
                                 border-2 border-n-12 -mr-1.5">
                                    <img
                                        src={image}
                                        alt="user image"
                                        width={20}
                                        height={20}
                                        className="w-full"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="body-2 text-n-13 text-sm">1m ago</div>
                </div>
            </div>


        </div>
    )
}

export { Notification };