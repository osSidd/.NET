import Image from "next/image";
import TicketCard from "./ticketCard";

export default function TicketsComponents(){
    return (
        <div className=" w-10/12 my-24 mx-auto">
            <div className="text-center">
                <h2 className="font-bold text-5xl">Collection Spotlight</h2>
                <p className="font-normal text-sm mt-6">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
            </div>
        <div className="mt-12 flex items-center justify-between">
            <div className=" w-9 h-12 border border-blue-300 flex items-center justify-center cursor-pointer">
                <Image
                    src='/leftarrow.svg'
                    height={11}
                    width={19}
                    alt="arrow-left"
                />
            </div>
            <TicketCard/>
            <TicketCard/>
            <TicketCard/>
            <div className=" w-9 h-12 border border-blue-300 flex items-center justify-center cursor-pointer">
                <Image
                    src='/rightarrow.svg'
                    height={11}
                    width={19}
                    alt="arrow-right"
                />
            </div>

        </div>
        </div>
    )
}