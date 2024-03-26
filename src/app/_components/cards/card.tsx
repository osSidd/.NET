import ImageBox from '../imageBox'

export default function Card({title, img, events, sport , theme}:{theme: boolean, title: string, img: string, events: number, sport: string}){
    return (
        <div style={{height:'511px'}} className={` ${theme ? 'bg-CardDark' : 'bg-white'} w-60 p-3 shadow-lg flex flex-col items-center`}>
            <ImageBox img={img}/>
            <p className={` ${theme ? 'text-white': 'text-black'} font-medium text-lg mt-4`}>{title}</p>
            <div className={`w-full ${theme ? 'bg-mainDark': 'bg-lightSecondary'} flex justify-between p-2 mt-4`}>
                <div className="">
                    <p className={`${theme && 'text-darkSecondary'} font-normal text-xs`}>Total Events</p>
                    <p className={` ${theme ? 'text-white': 'text-black'} font-medium text-sm`}>{events} Events</p>
                </div>
                <div className="">
                    <p className={`${theme && 'text-darkSecondary'} font-normal text-xs`}>Sport</p>
                    <p className={` ${theme ? 'text-white': 'text-black'} font-medium text-sm`}>{sport}</p>
                </div>
            </div>
        </div>
    )
}