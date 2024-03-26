import ImageBox from "../imageBox";

export default function TicketCard({title, img, dateTime, venue, collection, theme}: {theme:boolean, title:string, img: string, dateTime: string, venue: string, collection: string}){
    return (
    <div className={`mx-8 ${theme ? 'bg-CardDark': 'bg-white'} shadow-xl overflow-hidden flex flex-col items-center mix-blend-hard-light`} style={{height:'625px', width: '256px'}}>
        <div className="px-3 pt-3">
            <ImageBox img={img} minWidth="226px"/>
        </div>
        <div className="flex justify-between items-center w-full mt-4 bg-transparent">
            <div className={`w-5 h-5 ${theme ? 'bg-collectionDark' : 'bg-gray-100'} rounded-full`} style={{marginLeft: '-10px'}}></div>
            <div className=" w-52 h-1 border-t border-dashed border-gray-400"></div>
            <div className={`w-5 h-5 ${theme ? 'bg-collectionDark' : 'bg-gray-100'} rounded-full`} style={{marginRight: '-10px'}}></div>
        </div>
        <p className={`${theme ? 'text-white' : 'text-black'} font-medium text-lg mt-3`}>{title}</p>
        <p className={`${theme ? 'text-white' : 'text-black'} font-normal text-sm mt-2`}>{dateTime}</p>
        <p className={`${theme ? 'text-darkSecondary' : 'text-black'} font-normal text-sm mt-3 text-center w-4/5`}>{venue}</p>
        <button className="text-xs font-medium text-white bg-gray-900 mt-5 px-8 py-2">{collection}</button>
    </div>
    )
}