import { useState } from "react";

const TicketCard = ({ data, count, setCount }) => {



    const [disabled, setDisabled] = useState(false);

    const handleProgressCount = () => {

        if (disabled) return;
        setCount(count + 1);

        setDisabled(true);


    };


    const getPriorityColor = (priority) => {

        switch (priority) {

            case "Critical":
                return "text-red-500";

            case "High":
                return "text-yellow-500";

            case "Medium":
                return "text-green-500";

            case "low":
                return "text-blue-500";

            default:
                return "bg-base-500";
        }
    }

    return (

        <div onClick={handleProgressCount} className={`
                ${disabled
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer hover:scale-[1.01] duration-200"}
            `}>

            <div className="p-5 m-2 shadow-3xl space-y-2 rounded-xl  bg-base-200">

                <div className="flex justify-between">

                    <h1 className='font-bold text-xl'>{data.title}</h1>

                    <p>
                        <span
                            className={`badge gap-2 font-medium

                    ${data.status === "Open"
                                    ? "bg-green-300 text-green-700"
                                    : data.status === "In Progress"
                                        ? "bg-yellow-100 text-yellow-700 border-yellow-300"
                                        : "bg-green-100 text-green-700 border-green-300"
                                }
                  `}
                        >
                            <span
                                className={`w-4 h-4 rounded-full
                      ${data.status === "Open"
                                        ? "bg-green-800"
                                        : data.status === "In Progress"
                                            ? "bg-yellow-500"
                                            : "bg-green-500"
                                    }
                    `}
                            ></span>

                            {data.status}
                        </span>
                    </p>

                </div>

                <p>{data.description}</p>

                <div className='flex justify-between'>

                    <div className='flex gap-5'>

                        <p>#00{data.id}</p>

                        <p className={getPriorityColor(data.priority)}>{data.priority}</p>

                    </div>

                    <div className='flex gap-5'>

                        <h3 className="font-bold">{data.customer}</h3>
                        <p> {" "}
                            {new Date(data.createdAt).toLocaleDateString("en-GB")}</p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default TicketCard;