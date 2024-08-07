import { useState } from "react";

export default function PlaceGallery({place})
{
    const [showAllPhotos,setShowAllPhotos] = useState(false);
    if(showAllPhotos)
        {
            return (
                <div className="absolute inset-0 min-h-screen bg-black">
                    <div className="p-8 grid gap-4 bg-black ">
                        <div className="">
                            <h2 className="text-3xl mr-48 text-white">Photos of {place.title}</h2>
                            <button onClick={()=>setShowAllPhotos(false)} className="shadow shadow-black fixed top-8 right-12 flex gap-1 py-2 px-4 rounded-2xl bg-white text-black font-bold"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            Close</button>
                        </div>
                    {place?.photos?.length > 0 && place.photos.map(photo =>(
                        <div className="">
                            <img className= "" src={'http://localhost:4000/uploads/'+photo} alt="" />
                        </div>
                    ))};
                    </div>
                </div>
            )
        }
    

    return(
        <div className="relative">
            <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-2xl overflow-hidden">
                <div>
                    {place.photos?.[0] && (
                        <div><img onClick={()=>setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover" src={'http://localhost:4000/uploads/'+place.photos?.[0]} alt="" /></div>
                    )}
                </div>
                <div className="grid">{place.photos?.[1] && (
                    <img onClick={()=>setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover" src={'http://localhost:4000/uploads/'+place.photos?.[1]} alt="" />
                    )}
                    <div className="overflow-hidden">
                    {place.photos?.[2] && (
                        <img onClick={()=>setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover relative top-2" src={'http://localhost:4000/uploads/'+place.photos?.[2]} alt="" />
                    )}
                    </div>
                </div>
            </div>
            <button onClick={() =>setShowAllPhotos(true)} className=" flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
  <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
</svg>
    Show more photos</button>
            </div>
    );
}