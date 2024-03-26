import Image from "next/image";
import TicketCard from "./ticketCard";
import { useState } from "react";
import ticketData from '@/app/_static/tickets'

export default function TicketsComponents({theme}: {theme:boolean}){

    const [tickets, setTickets] = useState(ticketData)
    const [translate, setTranslate] = useState(0.5)
    const translateX = 19.5

    return (
        <div style={{width:'95%'}} className={`px-2 md:px-20 pt-16 mt-8 ${theme ? 'bg-collectionDark' : 'bg-white'} mx-auto`}>
            <div className="text-center w-full">
                <h2 className={`font-bold text-3xl md:text-5xl ${theme ? 'text-white' : 'text-black'}`}>Collection Spotlight</h2>
                <p className={`font-normal text-sm mt-6 md:w-10/12 mx-auto ${theme ? 'text-white' : 'text-black'}`}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
            </div>
        <div className="mt-12 flex items-center justify-between">
            <button onClick={() => {translate < 0 ? setTranslate(prev => prev + translateX) : undefined}} className=" w-9 h-12 border border-button flex items-center justify-center">
                <Image
                    src='/leftarrow.svg'
                    height={11}
                    width={19}
                    style={{opacity: translate < 0 ? 1 : 0.25}}
                    alt="arrow-left"
                />
            </button>
            <div style={{height:'45rem'}} className="w-11/12 overflow-hidden">
                <div style={{width: '175rem', transform:`translateX(${translate}rem)`}} className=" flex transition-transform duration-300 py-8">
                    {
                        tickets.map(ticket => (
                            <TicketCard
                                key={ticket.id}
                                title={ticket.title}
                                img={ticket.img}
                                dateTime={ticket.dateTime}
                                venue={ticket.venue}
                                collection={ticket.collection}
                                theme={theme}
                            />
                        ))
                    }
                </div>
            </div>
            <button onClick={() => {translate > -(5 * translateX) ? setTranslate(prev => prev - translateX) : undefined}} className=" w-9 h-12 border border-button flex items-center justify-center">
                <Image
                    src='/rightarrow.svg'
                    height={11}
                    width={19}
                    style={{opacity: translate > -(5*translateX) ? 1 : 0.25}}
                    alt="arrow-right"
                />
            </button>

        </div>
        </div>
    )
}