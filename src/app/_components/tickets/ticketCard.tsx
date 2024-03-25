import ImageBox from "../cards/imageBox";

export default function TicketCard(){
    return (
        <div className="w-64 bg-white shadow-2xl overflow-hidden flex flex-col items-center" style={{height:'625px'}}>
        <div className="px-3 pt-3">
            <ImageBox img="/ticket.jpeg" minWidth="226px"/>
        </div>
        <div className="flex justify-between items-center w-full mt-4">
            <div className=" w-5 h-5 bg-white rounded-full" style={{marginLeft: '-10px'}}></div>
            <div className=" w-52 h-1 border-t border-dashed border-gray-400"></div>
            <div className=" w-5 h-5 bg-white rounded-full" style={{marginRight: '-10px'}}></div>
        </div>
        <p className=" font-medium text-lg mt-4">Las Vegas Aviators</p>
        <p className=" font-normal text-sm mt-2">OCT 15 | SUN | 4:30 PM</p>
        <p className=" font-normal text-sm mt-2 text-center text-gray-500 w-4/5">Las Vegas Ballpark, Las Vegas, Nevada</p>
        <button className="text-xs font-medium text-white bg-gray-900 mt-3 px-8 py-2">Take Flight Collection</button>
    </div>
    )
}