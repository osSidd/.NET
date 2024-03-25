import Card from "./card";

export default function sportsCardsComponent(){
    return (
        <div className="w-4/5 mx-auto my-4">
            <h2 className="font-bold text-2xl border-b-2 border-blue-400 w-fit pb-2">Sports</h2>
            <div className="mt-6 flex justify-between items-center w-full">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <button className="bg-blue-400 text-white font-semibold text-sm px-8 py-3 rounded block mt-10 mx-auto">See More</button>
        </div>
    )
}