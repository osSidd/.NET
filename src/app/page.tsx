"use client"
import { useState } from "react";
import SportsCardsComponents from "./_components/cards/sportsCardsComponent";
import TicketsComponents from "./_components/tickets/ticketsComponents";

export default function Home(){

  const [theme, setTheme] = useState(false)

  return (
    <>
      <main className={`${theme? 'bg-mainDark' : 'white'} pt-4`}>
        <div className={`ml-auto w-fit mr-8 font-semibold ${theme? 'text-white' : 'text-black'}`}>
          {
            theme ? <button className="border border-button px-4 py-1 rounded" onClick={() => setTheme(false)}>Light</button> : <button className="border border-black px-4 py-1 rounded" onClick={() => setTheme(true)}>Dark</button>
          }
        </div>
        <SportsCardsComponents theme={theme}/>
        <TicketsComponents theme={theme}/>
      </main>
    </>
  )
}