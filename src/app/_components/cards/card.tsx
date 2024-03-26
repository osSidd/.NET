import ImageBox from '../imageBox'

export default function Card({title, img, events, sport,}:{title: string, img: string, events: number, sport: string}){
    return (
        <div style={{height:'511px'}} className=" w-60 bg-white p-3 shadow-lg flex flex-col items-center">
            <ImageBox img={img}/>
            <p className=" font-medium text-lg mt-4">{title}</p>
            <div className="w-full flex justify-between bg-slate-100 p-2 mt-4">
                <div className="">
                    <p className=" font-normal text-xs">Total Events</p>
                    <p className="font-medium text-sm">{events} Events</p>
                </div>
                <div className="">
                    <p className=" font-normal text-xs">Sport</p>
                    <p className="font-medium text-sm">{sport}</p>
                </div>
            </div>
        </div>
    )
}