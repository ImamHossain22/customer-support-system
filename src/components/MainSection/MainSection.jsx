import { useEffect, useState } from "react";
import TicketCard from "../TicketCard/TicketCard";


const MainSection = ({ count , setCount}) => {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetch('/ticket.json').then(res => res.json()).then(data => setTickets(data));
    }, []);

   
    return (
        <div className="flex gap-4 my-6 ">

            <div className="w-4/5 ">
                <h1 className="font-bold text-4xl">Customer Tickets</h1>

                <div className="lg:grid grid-cols-2 ">

                    {
                        tickets.map(data => <TicketCard count={count} setCount={setCount} key={data.id} data={data}></TicketCard>)
                    }


                </div>

            </div>

            <div className="border-l-2 rounded  w-1/5 pl-2  space-y-4">

                <div className="shadow-xl bg-base-300 p-2">
                    <h1 className="font-bold text-2xl">Task Status</h1>

                    Select a ticket to add to Task Status

                </div>



                <div className="bg-base-300 shadow-xl mt-10 p-2">

                    <h1 className="font-bold text-2xl">Resolved Task</h1>

                    No resolved tasks yet

                </div>
            </div>
        </div>
    );
};

export default MainSection;