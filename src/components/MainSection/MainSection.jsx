import { useEffect, useState } from "react";
import TicketCard from "../TicketCard/TicketCard";
import { toast } from "react-toastify";


const MainSection = ({ count, setCount, resolve, setResolve }) => {

    const [tickets, setTickets] = useState([]);



    useEffect(() => {
        fetch('/ticket.json').then(res => res.json()).then(data => setTickets(data));
    }, []);

    const handleResolve = (ticket) => {
        const alreadyExits = resolve.find(newSolveData => newSolveData.id === ticket.id);
        if (!alreadyExits) {
            setResolve([...resolve, ticket]);

            const remaining = count.filter(
                item => item.id !== ticket.id
            );

            const remaining2 = tickets.filter(item2 => item2.id !== ticket.id);


            setCount(remaining);
            setTickets(remaining2)
            toast('Complete task!')
        }    

    }


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

            <div className="border-l-2 w-1/5 pl-2 ">

                <div className="p-2 ">
                    <h1 className="font-bold text-2xl">Task Status</h1>

                    <div className="bg-base-300  mt-3 shadow-xl h-64 overflow-y-auto">

                        {
                            count.map(newData => <div key={newData.id} className="p-5 rounded-xl shadow-2xl bg-base-300" >
                                <h3 className="font-bold">{newData.title}</h3>
                                <button onClick={() => handleResolve(newData)} className="btn btn-secondary mt-3 w-full">Complete</button>
                            </div>)
                        }
                    </div>


                </div>



                <div className="p-2">

                    <h1 className="font-bold text-2xl">Resolved Task</h1>

                    <ol className="bg-base-300 shadow-xl h-64 overflow-y-auto rounded list-decimal p-5 mt-3" >
                        {
                            resolve.map(solve => <div key={solve.id} solve={solve}>

                                <li >{solve.title}</li>

                            </div>)
                        }

                    </ol>
                </div>
            </div>
        </div>
    );
};

export default MainSection;