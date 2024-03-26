import { useState } from "react";
import Card from "./card";
import cardData from '@/app/_static/cards'
import Ad from "./ad";
export default function sportsCardsComponent({theme}:{theme:boolean}){

    const [cards, setCards] = useState(cardData)
    const [count, setCount] = useState(0)

    return (
        <div style={{width: '96%'}} className="mx-auto my-4">
            <h2 className={`font-bold text-2xl ml-8 md:ml-0 border-b-2 border-button ${theme ? 'text-white': 'text-black'} w-fit pb-2`}>Sports</h2>
            <div className="mt-6 mx-auto w-fit lg:w-full gap-y-8 flex flex-col md:flex-row justify-between items-start">
                <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-y-8 w-full">
                    {
                        cards.slice(0, 4*(count+1)).map(card => (
                            <Card
                                key={card.id}
                                title={card.title}
                                img={card.img}
                                events={card.events}
                                sport={card.sport}
                                theme={theme}
                            />
                        ))
                    }
                </div>
                <Ad theme={theme}/>
            </div>
            <button onClick={() => {setCount(prev => prev<3? prev+1: 0)}} className=" bg-button text-white font-semibold text-sm px-8 py-3 rounded block mt-10 mx-auto">{count === 3 ? 'Show Less' : 'Show More'}</button>
        </div>
    )
}