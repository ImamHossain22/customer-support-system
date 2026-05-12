import { useEffect, useState } from "react";
import TicketCard from "../TicketCard/TicketCard";


const MainSection = () => {

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
                    tickets.filter(data=>data.status !== "Resolved").map(data => <TicketCard key={data.id} data={data}></TicketCard> )
                }
                    
                     
               </div>

            </div>

            <div className="1/5">
                <div><h1>Task Status</h1>
                    <p>select a ticket to add Task Status</p>
                </div>
                <div><h1>Task Status</h1>
                    <p>select a ticket to add Task Status</p>
                </div>
            </div>
        </div>
    );
};

export default MainSection;