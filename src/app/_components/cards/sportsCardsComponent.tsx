import { useState } from "react";
import Card from "./card";
import cardData from '@/app/_static/cards'
import Ad from "./ad";
export default function sportsCardsComponent(){

    const [cards, setCards] = useState(cardData)
    const [count, setCount] = useState(0)

    return (
        <div style={{width: '96%'}} className="mx-auto my-4">
            <h2 className="font-bold text-2xl border-b-2 border-blue-400 w-fit pb-2">Sports</h2>
            <div className="mt-6 flex justify-between items-start gap-x-2">
                <div className=" grid grid-cols-4 gap-y-8 w-full">
                    {
                        cards.slice(0, 4*(count+1)).map(card => (
                            <Card
                                key={card.id}
                                title={card.title}
                                img={card.img}
                                events={card.events}
                                sport={card.sport}
                            />
                        ))
                    }
                </div>
                <Ad/>
            </div>
            <button onClick={() => {setCount(prev => prev<3? prev+1: 0)}} className="bg-blue-400 text-white font-semibold text-sm px-8 py-3 rounded block mt-10 mx-auto">{count === 3 ? 'Show Less' : 'Show More'}</button>
        </div>
    )
}