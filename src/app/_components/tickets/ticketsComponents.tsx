import TicketCard from "./ticketCard";

export default function TicketsComponents(){
    return (
        <div className=" w-8/12 my-24 mx-auto">
            <div className="text-center">
                <h2 className="font-bold text-5xl">Collection Spotlight</h2>
                <p className="font-normal text-sm mt-6">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
            </div>
        <div className="mt-12 flex justify-between">
            <TicketCard/>
            <TicketCard/>
            <TicketCard/>
        </div>
        </div>
    )
}