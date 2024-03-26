import Image from "next/image";

export default function ImageBox({img='/player.jpeg', minWidth='385px', height='385px'}){
    return (
        <div className=" w-56 h-96 flex items-start justify-center overflow-hidden">
            <Image
                src={img}
                width={385}
                height={385}
                style={{minWidth:minWidth, height:'auto'}}
                alt="player"
            />        
        </div>
    )
}