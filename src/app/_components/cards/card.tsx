import ImageBox from './imageBox'

export default function Card(){
    return (
        <div className=" w-60 h-2/5 bg-white p-3 shadow-lg flex flex-col items-center">
            <ImageBox/>
            <p className=" font-medium text-lg mt-4">Sacramento River Cats</p>
            <div className="w-full flex justify-between bg-slate-100 p-2 mt-4">
                <div className="">
                    <p className=" font-normal text-xs">Total Events</p>
                    <p className="font-medium text-sm">48 Events</p>
                </div>
                <div className="">
                    <p className=" font-normal text-xs">Sport</p>
                    <p className="font-medium text-sm">Baseball</p>
                </div>
            </div>
        </div>
    )
}